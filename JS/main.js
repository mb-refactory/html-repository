const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ["images/pic1.jpg", "images/pic2.jpg", "images/pic3.jpg", "images/pic4.jpg", "images/pic5.jpg"];

/* Declaring the alternative text for each image file */
const alt = ["pic1", "pic2", "pic3", "pic4", "pic5"];

/* Looping through images */
for (let i = 0; i < images.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', images[i]);
    newImage.setAttribute('alt', alt[i]);
    newImage.addEventListener("click", () => {
        displayedImage.setAttribute('src', images[i]);
        displayedImage.setAttribute('alt', images[i]);
    })
    thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", ()=>{
    if (btn.getAttribute ("class") == "dark") {
        btn.setAttribute ("class", "white");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";

    } else {
        btn.setAttribute ("class", "black");
        btn.setAttribute ("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
})
