const radio1 = document.querySelector('#img1');
const radio2 = document.querySelector('#img2');
const radio3 = document.querySelector('#img3');

const left = document.querySelector('.controller-left');
const right = document.querySelector('.controller-right');

const tag = radio1.value;

const img1 = `https://github.com/Daryu-Kim/PortFolio_Remake/blob/main/images/portfolio/${tag}/1.png?raw=true`;
const img2 = `https://github.com/Daryu-Kim/PortFolio_Remake/blob/main/images/portfolio/${tag}/2.png?raw=true`;
const img3 = `https://github.com/Daryu-Kim/PortFolio_Remake/blob/main/images/portfolio/${tag}/3.png?raw=true`;

const background = document.querySelector('.content-slide');

IMG1();

radio1.addEventListener('change', IMG1);
radio2.addEventListener('change', IMG2);
radio3.addEventListener('change', IMG3);
left.addEventListener('click', function() {
    if (radio1.checked) {
        IMG3();
    } else if (radio2.checked) {
        IMG1();
    } else {
        IMG2();
    }
});
right.addEventListener('click', function() {
    if (radio1.checked) {
        IMG2();
    } else if (radio2.checked) {
        IMG3();
    } else {
        IMG1();
    }
});


function IMG1() {
    background.style.backgroundImage = `url(${img1})`;
    NoRadios();
    radio1.checked = true;
}

function IMG2() {
    background.style.backgroundImage = `url(${img2})`;
    NoRadios();
    radio2.checked = true;
}

function IMG3() {
    background.style.backgroundImage = `url(${img3})`;
    NoRadios();
    radio3.checked = true;
}

function NoRadios() {
    radio1.checked = false;
    radio2.checked = false;
    radio3.checked = false;
}