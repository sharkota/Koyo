let marquees = document.querySelectorAll('marquee')

window.addEventListener("load", (params) => {
    for (marquee of marquees) {
        marquee.start()
    }
});