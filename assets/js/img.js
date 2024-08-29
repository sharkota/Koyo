let images = document.querySelectorAll('img.corner_border')
let every_image = document.querySelectorAll('img')

for (image of images) {
    image.attributes.loading = 'lazy'
    image.addEventListener('click', (e) => {
        playsound('click.ogg')
        window.open(e.target.src, '_blank');
    })
}

// random flicker
for (image of every_image) {
    random = Math.random(0, 0.5)
    if (random > 0.5) {
        random = 0.2
    } else if (random > 0.8) {
        random = 0.1
    } else {
        random = 0.25
    }
    seconds = random + 's'
    image.style.animationDuration = seconds
}