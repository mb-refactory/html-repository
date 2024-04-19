
function updateGrid(data) {
  const podcastInfo = data;
  const grid = document.querySelector('.container-grid');
  const row = document.createElement('div');

  row.classList.add('row', 'justify-content-center');

  podcastInfo.feeds.forEach(feed => {
    const col = document.createElement('div');
    col.classList.add('col-lg-6', 'col-md-12');

    const link = document.createElement('a');
    link.href = 'podcast-details-suggested.html';
    link.addEventListener('click', function () {
      sessionStorage.setItem('selectedPodcast', JSON.stringify(feed)); // Salva i dettagli del podcast selezionato
    });

    link.classList.add('text-decoration-none');

    const card = document.createElement('div');
    card.classList.add('card', 'mb-3', 'rounded-3');

    const cardRow = document.createElement('div');
    cardRow.classList.add('row', 'g-0');

    const imgCol = document.createElement('div');
    imgCol.classList.add('col-4');

    const img = document.createElement('img');
    img.src = feed.artwork;
    img.classList.add('img-fluid', 'rounded-start');
    img.alt = '...';

    const cardBodyCol = document.createElement('div');
    cardBodyCol.classList.add('col-8');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const title = document.createElement('h2');
    title.classList.add('card-title');
    let podcastTitle = feed.title;
    if (podcastTitle.length > 40)
      podcastTitle = (podcastTitle.substring(0, 40) + '...');
    title.textContent = podcastTitle;

    const description = document.createElement('p');
    description.classList.add('card-text');
    let podcastDescription = feed.description.replace(/<[^>]*>/g, '');
    if (podcastDescription.length > 160)
      podcastDescription = (podcastDescription.substring(0, 160) + '...');
    description.textContent = podcastDescription;

    imgCol.appendChild(img);

    cardBody.appendChild(title);
    cardBody.appendChild(description);

    cardBodyCol.appendChild(cardBody);

    cardRow.appendChild(imgCol);
    cardRow.appendChild(cardBodyCol);

    card.appendChild(cardRow);

    link.appendChild(card);

    col.appendChild(link);

    row.appendChild(col);
  });

  grid.appendChild(row);

}

let searchTerms = sessionStorage.getItem('searched');
podcastIndexSearchAPI(searchTerms, 12)
.then(data => {
  console.log(data);
  updateGrid(data);});


    

  

