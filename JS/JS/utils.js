// Ottiene gli id dei podcast a cui si è iscritti da localStorage
function getSubscribedPodcastsIDs() {
    const subscribedPodcastsJSON = localStorage.getItem('subscribedPodcasts');
    return subscribedPodcastsJSON ? JSON.parse(subscribedPodcastsJSON) : [];
}

// Ottiene il podcast selezionato da sessionStorage
function getPodcastDetails() {
    return JSON.parse(sessionStorage.getItem('selectedPodcast'));
}

// Dato un array restiruisce solo i 3 valori che compaiono più frequentemente 
function findMostFrequentValues(arr) {
    const frequencyMap = {};
    // Calcola la frequenza di ciascun valore nell'array
    arr.forEach(num => {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    });
    // Ordina i valori in base alla frequenza e restituisci i primi 3 valori
    return Object.keys(frequencyMap)
        .sort((a, b) => frequencyMap[b] - frequencyMap[a])
        .slice(0, 3)
        .map(Number);
}

// Restituisce info su tutti i podcast nella lista passata, usando gli ID come identificatori
async function fetchSubscribedPodcasts(subscribedIdList) {
    let podcastInfoArray = [];
    for (const id of subscribedIdList) {
        try {
            const data = await podcastIndexPodcastByIdAPI(id);
            podcastInfoArray.push(data);

        } catch (error) {
            console.error(`Errore nel recuperare il podcast con ID ${id}:`, error);
        }
    }
    return podcastInfoArray
}
