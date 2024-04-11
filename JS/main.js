const content = document.querySelector(".content")

fetch('podcastInfo.json')
.then(response => response.text())
.then(text => console.log(text))


fetch('podcastInfo.json')
  .then(response => response.json())
  .then(data => {
    const podcastInfo = data;
    podcastInfo.feeds.forEach(feed => {
        const cover = document.createElement("img");
        const title = document.createElement("h2");
        const podcastItem = document.createElement ("div");
        podcastItem.className = "podcastItem"
        title.textContent = feed.title;
        cover.setAttribute("src", feed.artwork);
        cover.style.width = '20em';
        podcastItem.appendChild(cover);
        podcastItem.appendChild(title);
        content.appendChild(podcastItem);
      });
  });

