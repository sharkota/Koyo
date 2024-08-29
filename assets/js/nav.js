// variables
var hashLocation = new URL(window.location.href).hash.toString().replace("#", "");
const elements = document.querySelectorAll(".show");
const hashNavList = document.querySelectorAll("nav a");
const noscript = document.getElementById('noscript')
var navString = ('[href="#' + hashLocation + '"]')
var hashLocaationNav = document.querySelectorAll(navString);
const labels = document.querySelectorAll('label')
const folders = document.querySelectorAll('.folder')
const links = document.querySelectorAll('a')
const label_links = document.querySelectorAll("#nav > ul > label > li > a, ul > li")
const mobile_down = document.getElementById('mobile_down')
folder_db = true

// set up page for hidden sections
noscript.remove()

// set home on no hash
if (hashLocation == "") {
    document.location.hash = "#user"
}

// toggle show on hash changes
function locationHashChanged() {
    hashLocation = new URL(window.location.href).hash.toString().replace("#", "")
    navString = ('[href="#' + hashLocation + '"]');
    hashLocaationNav = document.querySelectorAll(navString);
    for (let I = 0; I < elements.length; I++) {
        if (elements[I].classList != undefined) {
            elements[I].classList.add("show");
        }
    }
    for (let I = 0; I < hashNavList.length; I++) {
        hashNavList[I].classList.remove("selected");
    }
    for (let I = 0; I < hashLocaationNav.length; I++) {
        hashLocaationNav[I].classList.add("selected");
    }
    hash_el = document.getElementById(hashLocation)
    hash_el && hash_el.classList.remove("show");
    scrollTop();
}

function scrollTop() {
    main_el.scroll({
        top: 0,
        left: 0
    });
}

// dom listeners
window.addEventListener("load", locationHashChanged);
window.addEventListener("hashchange", locationHashChanged);

// handle mobile nav collapse
document.querySelector("#nav > ul").classList.toggle('hide_mobile')
mobile_down.addEventListener('click', (e) => {
    e.preventDefault();
    if (mobile_down.textContent == '⬆') {
        mobile_down.textContent = '⬇'
        document.querySelector("#nav > ul").classList.toggle('hide_mobile')
    } else {
        mobile_down.textContent = '⬆'
        document.querySelector("#nav > ul").classList.toggle('hide_mobile')
    }
})

// convert keydowns to clicks
for (i of labels) {
    i.addEventListener('keydown', (e) => {
        if (e.key == 'Enter') {
            e.preventDefault()
            e.target.click()
        }
    })
}

// change folder state
for (i of folders) {
    i.addEventListener('click', (e) => {
        // check for db becuz of some nested elements jank
        folder_db && playsound('click.ogg')
        folder_db = false
        if (!e.target.classList.value.includes('folder_open')) {
            e.target.classList.add('folder_open')
        } else {
            e.target.classList.remove('folder_open');
        }
        setTimeout(() => {
            folder_db = true
        }, 100);
    })
}

// play sound on links
for (i of links) {
    // this condition only checks the first two parents
    // i will likely make this recursive later
    if (i.parentElement.className != 'folder' && i.parentElement.parentElement.className != 'folder') {
        i.addEventListener('click', (e) => {
            playsound('click.ogg')
        })
    }
}

// redirect clicks up
for (i of label_links) {
    i.addEventListener('click', (e) => {
        e.preventDefault();
        // if not action then close the folder
        !e.target.classList.value.includes('action') && e.target.parentElement.click()
    })
}