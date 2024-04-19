
document.addEventListener('DOMContentLoaded', function () {
    const podcastDetails = JSON.parse(sessionStorage.getItem('selectedPodcast'));
    console.log('Cover URL:' + podcastDetails.artwork);
    const cover = document.querySelector('.img-fluid');
    cover.src = podcastDetails.artwork;
    const title = document.querySelector('h1');
    title.textContent = podcastDetails.title;
    const description = document.querySelector('p');
    description.textContent = podcastDetails.description.replace(/<[^>]*>/g, '');;
    const podcastID = podcastDetails.id;
    console.log('Gathering information on podcast episodes with ID: ' + podcastID);
    podcastIndexEpisodesByIdAPI(podcastID, 10)
    .then(data => {
        console.log(data);
        showEpisodes(data);
    });
});

function showEpisodes(data) {
    const details = document.querySelector('.details');
    const subscribtionDate = document.querySelector('.subscription-date');

    data.items.forEach(episode => {

        const card = document.createElement('div');
        card.className = 'card mb-3 mt-3';

        const row = document.createElement('div');
        row.className = 'row';

        const cardBodyCol = document.createElement('div');
        cardBodyCol.className = 'col-md-9';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const episodeTitle = document.createElement('h4');
        episodeTitle.className = 'card-title';
        episodeTitle.textContent = episode.title;

        const episodeDescription = document.createElement('p');
        episodeDescription.className = 'card-text';
        episodeDescription.textContent = episode.description.replace(/<[^>]*>/g, '');

        cardBody.appendChild(episodeTitle);
        cardBody.appendChild(episodeDescription);
        cardBodyCol.appendChild(cardBody);
        row.appendChild(cardBodyCol);

        const btnCol = document.createElement('div');
        btnCol.className = 'col-md-3 mt-2 text-end';

        const link = document.createElement('a');
        link.href = 'episode-details.html';
        link.addEventListener('click', function () {
            sessionStorage.setItem('selectedEpisode', JSON.stringify(episode));
        });

        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'btn btn-primary py-2 m-3 btn-lg';
        btn.textContent = 'View details';

        link.appendChild(btn);
        btnCol.appendChild(link);
        row.appendChild(btnCol);

        card.appendChild(row);
        details.appendChild(card);

        subscribtionDate.insertAdjacentElement('afterend', card);

    });

}

function removeSubscribedPodcast(podcastId) {
    let subscribedPodcasts = getSubscribedPodcastsIDs();
    const index = subscribedPodcasts.indexOf(podcastId);
    subscribedPodcasts.splice(index, 1);
    localStorage.setItem('subscribedPodcasts', JSON.stringify(subscribedPodcasts));
}

function checkSubscription(){
    let podcastID = getPodcastDetails().id;
    let subscribedPodcasts = getSubscribedPodcastsIDs();
    if (!subscribedPodcasts.includes(podcastID)) {
        unsubscribeBtn.classList.replace('btn-danger', 'btn-warning');
        unsubscribeBtn.textContent = 'unsubscribed';
    }
}

const unsubscribeBtn = document.querySelector(".unsubscribe-btn");

unsubscribeBtn.addEventListener('click', () => {
    let podcastID = getPodcastDetails().id;
    let subscribedPodcasts = getSubscribedPodcastsIDs();
    if (subscribedPodcasts.includes(podcastID)) {
        // Aggiungi il podcast alla lista iscrizioni
        removeSubscribedPodcast(podcastID);
        unsubscribeBtn.classList.replace('btn-danger', 'btn-warning');
        unsubscribeBtn.textContent = 'You successfully unsubscribed from this podcast';
    } else {
        alert("You have already unsubscribed from this podcast");
    }
}
);

checkSubscription();













