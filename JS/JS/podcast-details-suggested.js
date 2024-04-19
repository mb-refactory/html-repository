document.addEventListener('DOMContentLoaded', function () {
    const podcastDetails = getPodcastDetails();
    console.log('Cover URL:' + podcastDetails.artwork);
    const cover = document.querySelector('.img-fluid');
    cover.src = podcastDetails.artwork;
    const title = document.querySelector('h1');
    title.textContent = podcastDetails.title;
    const description = document.querySelector('p');
    description.textContent = podcastDetails.description.replace(/<[^>]*>/g, '');
});


function addSubscribedPodcast(podcastId) {
    let subscribedPodcasts = getSubscribedPodcastsIDs();
    if (!subscribedPodcasts.includes(podcastId)) {
        subscribedPodcasts.push(podcastId);
        localStorage.setItem('subscribedPodcasts', JSON.stringify(subscribedPodcasts));
        console.log('Podcast with ID: ' + podcastId + ' added to the subscribed list');
    }
}

function checkSubscription(){
    let podcastID = getPodcastDetails().id;
    let subscribedPodcasts = getSubscribedPodcastsIDs();
    if (subscribedPodcasts.includes(podcastID)) {
        subscribeBtn.classList.replace('btn-primary', 'btn-success');
        subscribeBtn.textContent = 'Subscribed';
    }
}

const subscribeBtn = document.querySelector("button");

subscribeBtn.addEventListener('click', () => {
    let podcastID = getPodcastDetails().id;
    let subscribedPodcasts = getSubscribedPodcastsIDs();
    if (!subscribedPodcasts.includes(podcastID)) {
        // Aggiungi il podcast alla lista iscrizioni
        addSubscribedPodcast(podcastID);
        subscribeBtn.classList.replace('btn-primary', 'btn-success');
        subscribeBtn.textContent = 'You subscribed to the podcast!';
    } else {
        alert("You are already subscribed to this podcast");
    }
}
);

checkSubscription();