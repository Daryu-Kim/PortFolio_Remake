const wrapper_menu_checkbox = document.getElementById('wrapper-menu-checkbox');
const wrapper_menu_label = document.getElementById('wrapper-menu-label');
const wrapper_overlay = document.getElementById('wrapper-overlay');

// Header Declare
const header = document.getElementById('header');

// Content Declare
var typingBool = false;
var typingIdx = 0;
var typingText = "Hi, I'm a Developer!"

wrapper_menu_label.addEventListener('click', WrapperMenuCheckbox);
wrapper_overlay.addEventListener('click', WrapperOverlayClick);
window.addEventListener("resize", ResponsiveMenu);

ResponsiveMenu();
ContentTypingText();

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
        function() {
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

function ContentTypingText() {
    typingText = typingText.split("");

    if (typingBool == false) {
        var tyInt = setInterval(ContentTypingTextAnim, 100)
    }
}

function ContentTypingTextAnim() {
    if (typingIdx < typingText.length) {
        document.getElementById('content-home-typing').append(typingText[typingIdx]);
        typingIdx++;
    } else {
        clearInterval(tyInt);
    }
}