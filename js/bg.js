const bgImage = document.createElement("img");
bgImage.src = `img/img (${Math.ceil(Math.random() * 9)}).jpg`;
document.querySelector("#img").appendChild(bgImage);
