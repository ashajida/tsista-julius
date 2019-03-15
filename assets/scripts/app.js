let burgerBtn = document.querySelector('.burger-menu');
let menu = document.querySelector('.nav-links');
let gallery = document.querySelector('.gallery');
let model = document.querySelector('.model');
let modelImage = document.querySelector('.model-image');
let closeBtn = document.querySelector('.close');


burgerBtn.addEventListener('click', function () {
    menu.classList.toggle('open');
})

gallery.addEventListener('click', function (e) {
    const imageSrc = e.path[1].firstElementChild.src;
    model.style.display = "block";
    modelImage.src = imageSrc;
    modelImage.style.opacity = 1;
})

closeBtn.addEventListener('click', function (e) {
    model.style.display = "none";
})