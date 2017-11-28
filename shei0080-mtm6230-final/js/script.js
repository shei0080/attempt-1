var pictures = document.getElementById("pictures"),
    bigPicture = document.getElementById("big-picture");
    
var images = ["image1", "image2", "image3", "image4", "image5", "image6"];

function buildGallery(picture) {
    "use strict";
    var thumbnail = document.createElement("img");
    thumbnail.setAttribute('src', 'media/' + images[picture] + '.jpg');
    thumbnail.classList.add("thumbnail");
    pictures.appendChild(thumbnail);
}
for (i = 0; i < images.length; i++) {
    buildGallery(i);
}