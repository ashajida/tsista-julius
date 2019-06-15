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
const links = document.querySelector('.nav-links');

links.addEventListener('click', (e) => {
    console.log(e.target.className);
    if (e.target.className === 'link') e.target.classList.add('current-page');
    if (e.target.className === 'link current-page') e.target.classList.remove('current-page');
})

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

if (imgDiv) window.onload = slideShow();


function countdown(element) {

    var endDate = new Date("Jun 27, 2019 09:00:00").getTime();

    var timer = setInterval(function () {

        let now = new Date().getTime();
        let t = endDate - now;

        if (t >= 0) {

            let days = Math.floor(t / (1000 * 60 * 60 * 24));
            let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
            let secs = Math.floor((t % (1000 * 60)) / 1000);

            element.daysLeft.innerHTML = days +
                "<span class='label'>DAY(S)</span>";

            element.hoursLeft.innerHTML = ("0" + hours).slice(-2) +
                "<span class='label'>HR(S)</span>";

            element.minutesLeft.innerHTML = ("0" + mins).slice(-2) +
                "<span class='label'>MIN(S)</span>";

            element.secondsLeft.innerHTML = ("0" + secs).slice(-2) +
                "<span class='label'>SEC(S)</span>";

        } else {

            document.getElementById("timer").innerHTML = "The countdown is over!";

        }

    }, 1000);

}

const daysLeft = document.querySelector('.days');
const hoursLeft = document.querySelector('.hours');
const minutesLeft = document.querySelector('.minutes');
const secondsLeft = document.querySelector('.seconds');

countdown({
    daysLeft,
    hoursLeft,
    minutesLeft,
    secondsLeft
});

const song = './song.mp3';

let audio = new Audio();
audio.src = song;

window.onload = () => audio.play();
