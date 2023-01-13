const wrapper_menu_checkbox = document.getElementById('wrapper-menu-checkbox');
const wrapper_menu_label = document.getElementById('wrapper-menu-label');
const wrapper_overlay = document.getElementById('wrapper-overlay');
const wrapper_pageup = document.querySelector(".wrapper-pageup");

// Header Declare
var menu_home_clicked, menu_aboutme_clicked, menu_resume_clicked, menu_skill_clicked, menu_portfolio_clicked, menu_contact_clicked;
const header = document.getElementById('header');
const header_menu_home = document.getElementById('header-menu-home');
const header_menu_aboutme = document.getElementById('header-menu-aboutme');
const header_menu_resume = document.getElementById('header-menu-resume');
const header_menu_skill = document.getElementById('header-menu-skill');
const header_menu_portfolio = document.getElementById('header-menu-portfolio');
const header_menu_contact = document.getElementById('header-menu-contact');

HeaderClickedOFF();
menu_home_clicked = true;

// Content Declare
var typingBool = false;
var typingIdx1 = 0;
var typingIdx2 = 0;
var typingIdx3 = 0;
var tyInt1, tyInt2, tyInt3;
var typingText1 = "한번을 하더라도 완벽하게,";
var typingText2 = "문제 해결 및 유지 보수를 위한";
var typingText3 = "공부를 끊임없이 하는 점이 저의 장점입니다!";

var content_home_offset = document.getElementById('content-home').offsetTop;
var content_aboutme_offset = document.getElementById('content-aboutme').offsetTop;
var content_resume_offset = document.getElementById('content-resume').offsetTop;
var content_skill_offset = document.getElementById('content-skill').offsetTop;
var content_portfolio_offset = document.getElementById('content-portfolio').offsetTop;
var content_contact_offset = document.getElementById('content-contact').offsetTop;

const content_portfolio_filter = document.querySelector('.content-portfolio-filter');
const content_portfolio_list = document.querySelector('.content-portfolio-list');
const content_portfolio_item = document.querySelectorAll('.content-portfolio-item');

wrapper_menu_label.addEventListener('click', WrapperMenuCheckbox);
wrapper_overlay.addEventListener('click', WrapperOverlayClick);
window.addEventListener("resize", ResponsiveMenu);
window.addEventListener('scroll', ScrollHeaderMenu);

header_menu_home.addEventListener('click', HeaderHome);
header_menu_aboutme.addEventListener('click', HeaderAboutMe);
header_menu_resume.addEventListener('click', HeaderResume);
header_menu_skill.addEventListener('click', HeaderSkill);
header_menu_portfolio.addEventListener('click', HeaderPortFolio);
header_menu_contact.addEventListener('click', HeaderContact);

content_portfolio_filter.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter == null) {
        return;
    }
    content_portfolio_item.forEach((item) => {
        if (filter === '*' || filter === item.dataset.type) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});

wrapper_pageup.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
window.onscroll = () => window.scrollY > 500 ? wrapper_pageup.getElementsByClassName.opacity = 1 :
wrapper_pageup.getElementsByClassName.opacity = 0;
header_menu_home.style.filter = 'none';

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
    var temp = window.innerWidth;
    if (temp >= 1200) {
        WrapperOverlayOFF();
        wrapper_menu_checkbox.checked = false;
        header.style.left = '0';
    } else {
        header.style.left = '-300px';
    }
}

function ScrollHeaderMenu() {
    if (window.scrollY == content_home_offset) {
        HeaderFilterOFF();
        header_menu_home.style.filter = 'none';
        menu_home_clicked = true;
    } else if (window.scrollY == content_aboutme_offset) {
        HeaderFilterOFF();
        header_menu_aboutme.style.filter = 'none';
        menu_aboutme_clicked = true;
    } else if (window.scrollY == content_resume_offset) {
        HeaderFilterOFF();
        header_menu_resume.style.filter = 'none';
        menu_resume_clicked = true;
    } else if (window.scrollY == content_skill_offset) {
        HeaderFilterOFF();
        header_menu_skill.style.filter = 'none';
        menu_skill_clicked = true;
    } else if (window.scrollY == content_portfolio_offset) {
        HeaderFilterOFF();
        header_menu_portfolio.style.filter = 'none';
        menu_portfolio_clicked = true;
    } else if (window.scrollY == content_contact_offset) {
        HeaderFilterOFF();
        header_menu_contact.style.filter = 'none';
        menu_contact_clicked = true;
    } else {

    }
}

function HeaderClickedOFF() {
    menu_home_clicked = false;
    menu_aboutme_clicked = false;
    menu_resume_clicked = false;
    menu_skill_clicked = false;
    menu_portfolio_clicked = false;
    menu_contact_clicked = false;
}

function HeaderFilterOFF() {
    let temp = [header_menu_home, header_menu_aboutme, header_menu_resume, header_menu_skill, header_menu_portfolio, header_menu_contact];
    HeaderClickedOFF();
    for (let i = 0; i < temp.length; i++) {
        temp[i].style.filter = 'opacity(50%) saturate(0%)';
    }
} 

function HeaderHome() {
    document.getElementById('content-home').scrollIntoView();
    HeaderClickResponsive();
    HeaderFilterOFF();
    header_menu_home.style.filter = 'none';
    menu_home_clicked = true;
}

function HeaderAboutMe() {
    document.getElementById('content-aboutme').scrollIntoView();
    HeaderClickResponsive();
    HeaderFilterOFF();
    header_menu_aboutme.style.filter = 'none';
    menu_aboutme_clicked = true;
}

function HeaderResume() {
    document.getElementById('content-resume').scrollIntoView();
    HeaderClickResponsive();
    HeaderFilterOFF();
    header_menu_resume.style.filter = 'none';
    menu_resume_clicked = true;
}

function HeaderSkill() {
    document.getElementById('content-skill').scrollIntoView();
    HeaderClickResponsive();
    HeaderFilterOFF();
    header_menu_skill.style.filter = 'none';
    menu_skill_clicked = true;
}

function HeaderPortFolio() {
    document.getElementById('content-portfolio').scrollIntoView();
    HeaderClickResponsive();
    HeaderFilterOFF();
    header_menu_portfolio.style.filter = 'none';
    menu_portfolio_clicked = true;
}

function HeaderContact() {
    document.getElementById('content-contact').scrollIntoView();
    HeaderClickResponsive();
    HeaderFilterOFF();
    header_menu_contact.style.filter = 'none';
    menu_contact_clicked = true;
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