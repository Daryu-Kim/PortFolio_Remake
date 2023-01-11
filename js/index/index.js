const wrapper_menu_checkbox = document.getElementById('wrapper-menu-checkbox');
const wrapper_menu_label = document.getElementById('wrapper-menu-label');
const wrapper_overlay = document.getElementById('wrapper-overlay');
const wrapper_pageup = document.querySelector(".wrapper-pageup");

// Header Declare
const header = document.getElementById('header');
const header_menu_home = document.getElementById('header-menu-home');
const header_menu_aboutme = document.getElementById('header-menu-aboutme');
const header_menu_resume = document.getElementById('header-menu-resume');
const header_menu_skill = document.getElementById('header-menu-skill');
const header_menu_portfolio = document.getElementById('header-menu-portfolio');
const header_menu_contact = document.getElementById('header-menu-contact');

// Content Declare
var typingBool = false;
var typingIdx1 = 0;
var typingIdx2 = 0;
var typingIdx3 = 0;
var tyInt1, tyInt2, tyInt3;
var typingText1 = "한번을 하더라도 완벽하게,";
var typingText2 = "문제 해결 및 유지 보수를 위한";
var typingText3 = "공부를 끊임없이 하는 점이 저의 장점입니다!";

wrapper_menu_label.addEventListener('click', WrapperMenuCheckbox);
wrapper_overlay.addEventListener('click', WrapperOverlayClick);
window.addEventListener("resize", ResponsiveMenu);
header_menu_home.addEventListener('click', HeaderHome);
header_menu_aboutme.addEventListener('click', HeaderAboutMe);
header_menu_resume.addEventListener('click', HeaderResume);
header_menu_skill.addEventListener('click', HeaderSkill);
header_menu_portfolio.addEventListener('click', HeaderPortFolio);
header_menu_contact.addEventListener('click', HeaderContact);

wrapper_pageup.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
window.onscroll = () => window.scrollY > 500 ? wrapper_pageup.getElementsByClassName.opacity = 1 :
wrapper_pageup.getElementsByClassName.opacity = 0;

ResponsiveMenu();
ContentTypingText1();
setTimeout(
    function () {
        ContentTypingText2();
    }, 1475);
setTimeout(
    function () {
        ContentTypingText3();
    }, 3350);

function WrapperMenuCheckbox() {
    if (wrapper_menu_checkbox.checked === true) {
        header.style.left = '-300px';
        WrapperOverlayOFF();
    } else {
        header.style.left = '0px';
        WrapperOverlayON();
    }
}

function WrapperOverlayClick() {
    WrapperOverlayOFF();
    wrapper_menu_checkbox.checked = false;
    header.style.left = '-300px';
}

function WrapperOverlayOFF() {
    document.body.classList.remove('scroll-lock');
    wrapper_overlay.animate([
        {
            opacity: 1
        },

        {
            opacity: 0
        },

        {
            easing: "ease-in-out"
        }

    ], 400);
    setTimeout(
        function () {
            wrapper_overlay.style.display = 'none';
        }, 200);
}

function WrapperOverlayON() {
    document.body.classList.add('scroll-lock');
    wrapper_overlay.style.display = 'block';
    wrapper_overlay.animate([
        {
            opacity: 0
        },

        {
            opacity: 1
        },

        {
            easing: "ease-in-out"
        }

    ], 400);
}

function ResponsiveMenu() {
    if (window.innerWidth >= 960) {
        WrapperOverlayOFF();
        wrapper_menu_checkbox.checked = false;
        header.style.left = '0';
    } else {
        header.style.left = '-300px';
    }
}

function HeaderHome() {
    document.getElementById('content-home').scrollIntoView();
    HeaderClickResponsive();
}

function HeaderAboutMe() {
    document.getElementById('content-aboutme').scrollIntoView();
    HeaderClickResponsive();
}

function HeaderResume() {
    document.getElementById('content-resume').scrollIntoView();
    HeaderClickResponsive();
}

function HeaderSkill() {
    document.getElementById('content-skill').scrollIntoView();
    HeaderClickResponsive();
}

function HeaderPortFolio() {
    document.getElementById('content-portfolio').scrollIntoView();
    HeaderClickResponsive();
}

function HeaderContact() {
    document.getElementById('content-contact').scrollIntoView();
    HeaderClickResponsive();
}

function HeaderClickResponsive() {
    if (window.innerWidth < 960) {
        WrapperOverlayOFF();
        wrapper_menu_checkbox.checked = false;
        header.style.left = '-300px';
    }
}

function ContentScroll() {
    window.scrollTo(document.getElementById('content-aboutme').offsetLeft, document.getElementById('content-aboutme').offsetTop);
}

function ContentTypingText1() {
    document.getElementById('content-home-typing1').style.display = 'block';
    typingText1 = typingText1.split("");

    if (typingBool == false) {
        var tyInt1 = setInterval(ContentTypingTextAnim1, 100)
    }
}

function ContentTypingText2() {
    document.getElementById('content-home-typing2').style.display = 'block';
    typingText2 = typingText2.split("");

    if (typingBool == false) {
        var tyInt2 = setInterval(ContentTypingTextAnim2, 100)
    }
}

function ContentTypingText3() {
    document.getElementById('content-home-typing3').style.display = 'block';
    typingText3 = typingText3.split("");

    if (typingBool == false) {
        var tyInt3 = setInterval(ContentTypingTextAnim3, 100)
    }
}

function ContentTypingTextAnim1() {
    if (typingIdx1 < typingText1.length) {
        document.getElementById('content-home-typing1').append(typingText1[typingIdx1]);
        typingIdx1++;
    } else {
        clearInterval(tyInt1);
    }
}

function ContentTypingTextAnim2() {
    if (typingIdx2 < typingText2.length) {
        document.getElementById('content-home-typing2').append(typingText2[typingIdx2]);
        typingIdx2++;
    } else {
        clearInterval(tyInt2);
    }
}

function ContentTypingTextAnim3() {
    if (typingIdx3 < typingText3.length) {
        document.getElementById('content-home-typing3').append(typingText3[typingIdx3]);
        typingIdx3++;
    } else {
        clearInterval(tyInt3);
    }
}