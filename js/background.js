const images = ["pexels-abdullah-ghatasheh-1631677.jpg",
                "pexels-carlos-oliva-3586966.jpg",
                "pexels-cátia-matos-1072179.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/background/${chosenImage}`;

document.body.prepend(bgImage);

//document.body.style.backgroundimage = `url("img/background/${chosenImage}")` 