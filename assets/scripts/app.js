let burgerBtn = document.querySelector('.burger-menu');
let menu = document.querySelector('.nav-links');
let gallery = document.querySelector('.gallery');
let sectionGallery = document.querySelector('.section-gallery');
let modelSection = document.querySelector('.section-model');
let model = document.querySelector('.model');
let modelImage = document.querySelector('.model-image');
let closeBtn = document.querySelector('.close');
let btn = document.querySelector('.btn');
let openForm = document.querySelector('.message-form');

burgerBtn.addEventListener('click', function () {
    menu.classList.toggle('open');
})

gallery.addEventListener('click', function (e) {
    const imageSrc = e.path[1].firstElementChild.src;


    if (e.target.className === "overlay") {
        // sectionGallery.style.background = '#000';
        modelSection.style.display = "block";
        model.style.opacity = 1;
        modelImage.src = imageSrc;
        modelImage.style.opacity = 1;

    }

})

document.addEventListener('click', function (e) {
    if (e.target.className === "section-model") {
        modelSection.style.display = "none";
    }

    console.log(e.target.className);
})

closeBtn.addEventListener('click', function (e) {
    modelSection.style.display = "none";
})

btn.addEventListener('click', function (event) {
    // event.preventDefault();
    console.log('clicked');
    openForm.classList.toggle('form-open');
});