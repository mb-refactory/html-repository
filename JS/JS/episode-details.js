document.addEventListener('DOMContentLoaded', function () {
    const episodeDetails = JSON.parse(sessionStorage.getItem('selectedEpisode'));
    console.log(episodeDetails); console.log('Cover URL:' + episodeDetails.feedImage);
    const cover = document.querySelector('.img-fluid');
    cover.src = episodeDetails.feedImage;
    const title = document.querySelector('h1');
    title.textContent = episodeDetails.title;
    const description = document.querySelector('p');
    description.textContent = episodeDetails.description.replace(/<[^>]*>/g, '');
    const publishDate = document.querySelector('.publish-date');
    publishDate.textContent = episodeDetails.datePublishedPretty;
});

const playBtn = document.querySelector('.play-btn');
playBtn.addEventListener('click', () => {
    const listenURL = JSON.parse(sessionStorage.getItem('selectedEpisode')).enclosureUrl;
    window.open(listenURL);
    document.body.appendChild(element)
});
