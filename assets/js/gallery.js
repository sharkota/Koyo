// Setup
const gallery_name = document.getElementById("gallery_script").getAttribute("data-selector");
document.writeln(`<div id="gal_viewer"><img id="viewer_image"><div id="gal_buttons"><div id="gal_left">&lt;</div><div id="gal_close">X</div><div id="gal_right">&gt;</div></div></div>`)
document.writeln(`<style>${gallery_name} img{cursor:pointer}#gal_viewer{top: 0; left: 0;position:fixed;background-color:rgba(0,0,0,.582);width:100vw;height:100vh;justify-content:center;z-index:10;visibility:hidden;overflow:hidden;display:flex;flex-direction:column;align-items:center}#viewer_image{width:40vw;box-shadow:#000 0 0 50px}#gal_close,#gal_left,#gal_right{font-size:2rem;background-color:rgba(0,0,0,.541);padding:1.5rem;pointer-events:all;cursor:pointer;user-select: none;}#gal_buttons{color: white;position: absolute; bottom: 20px;display:flex;flex-direction:row}</style>`)
const images = document.querySelectorAll(`${gallery_name} img`)
const viewer = document.getElementById("gal_viewer")
const viewer_image = document.getElementById("viewer_image")
const close_button = document.getElementById("gal_close")
const right_button = document.getElementById("gal_right")
const left_button = document.getElementById("gal_left")
const buttons = document.getElementById("gal_buttons")

// Functions
function DisplayImage(src){
    viewer.style.visibility = "visible"
    viewer_image.src = src
}

function HideImage(){
    viewer.style.visibility = "hidden"
}

function ClickDetect(varName) {
    for (let I = 0; I < varName.length; I++) {
        varName[I].addEventListener("click", function(){
            DisplayImage(this.src)
        })
    }
}

function gallery_right() {
    let current_src = viewer_image.src
    for (let I = 0; I < images.length; I++) {
        if (images[I].src == current_src) {
            if (I == images.length - 1) {
                DisplayImage(images[0].src)
            } else {
                DisplayImage(images[I+1].src)
            }
        }
    }
}

function gallery_left(){
    let current_src = viewer_image.src
    for (let I = 0; I < images.length; I++) {
        if (images[I].src == current_src) {
            if (I == 0) {
                DisplayImage(images[images.length - 1].src)
            } else {
                DisplayImage(images[I-1].src)
            }
        }
    }
}

// Event Listeners
right_button.addEventListener("click", function(){
    gallery_right()
})

left_button.addEventListener("click", function(){
    gallery_left()
})

close_button.addEventListener("click", function(){
    HideImage()
})

// Keybinds
document.addEventListener("keydown", (event) => {
    if (event.isComposing || event.keyCode === 229) {
      return;
    }
    if (event.code == "KeyD" | event.code == "ArrowRight") {
        gallery_right()
    }
    if (event.code == "KeyA" | event.code == "ArrowLeft") {
        gallery_left()
    }
    if (event.code == "Escape") {
        HideImage()
    }
  });
  
// Initialize Click Detection
ClickDetect(images)