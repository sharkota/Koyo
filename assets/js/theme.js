//get theme
theme = localStorage.getItem('theme')
const theme_el = document.getElementById('theme')
// if theme exists apply
if (theme) { theme_el.href = '/assets/css/theme/' + theme + '.css'}

// change localstorage for theme and the rendered theme
function change_theme(new_theme) {
    localStorage.setItem('theme', new_theme)
    theme = localStorage.getItem('theme')
    theme_el.href = '/assets/css/theme/' + theme + '.css'
}