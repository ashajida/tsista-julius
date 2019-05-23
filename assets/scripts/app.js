let burgerBtn = document.querySelector('.burger-menu');
let menu = document.querySelector('.nav-links');
let gallery = document.querySelector('.gallery');
let sectionGallery = document.querySelector('.section-gallery');
let modelSection = document.querySelector('.section-modal');
let model = document.querySelector('.modal');
let modelImage = document.querySelector('.modal-image');
let closeBtn = document.querySelector('.close');
let btn = document.querySelector('.btn');
let openForm = document.querySelector('.message-form');
const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.prev');
const storyleft = document.querySelector('.story.left');
const storyRight = document.querySelector('.story.right');


burgerBtn.addEventListener('click', function () {
    menu.classList.toggle('open');
})

if (gallery != null) {
    gallery.addEventListener('click', function (e) {
        const imageSrc = e.path[1].firstElementChild.src;


        if (e.target.className === "overlay") {
            modelSection.classList.add('modal-active');
            modelImage.src = imageSrc;
            modelImage.style.opacity = 1;
        }



    })
}


if (closeBtn != null) {
    closeBtn.addEventListener('click', function (e) {
        modelSection.classList.remove('modal-active');
    })
}



if (btn != null) {

    btn.addEventListener('click', function () {
        openForm.classList.toggle('form-open');
    });
}


if (btnNext != null | btnPrev != null) {
    btnNext.addEventListener('click', function (e) {
        storyleft.classList.remove('left-animation');
        storyRight.classList.remove('normal');
        btnPrev.classList.remove('current-story');
        e.target.classList.add('current-story');
    })
    btnPrev.addEventListener('click', function (e) {
        storyleft.classList.add('left-animation');
        storyRight.classList.add('normal');
        btnNext.classList.remove('current-story');
        e.target.classList.add('current-story');
    })
}

// hero slider

const images = ['assets/images/hero-picture-2g.png', 'assets/images/hero-picture-1fixed.png', 'assets/images/pic-1-couple.jpg']
const imgDiv = document.querySelector('.slide-show-img');
let i = 0;

function slideShow() {

    imgDiv.src = images[i];

    if (i < images.length - 1) i++;
    else i = 0;

    setTimeout('slideShow()', 6000);
}

window.onload = slideShow();
