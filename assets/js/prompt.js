// Html Setup
var style = document.createElement('style')
style.innerHTML =
    `@font-face {
    font-family: 'Hoog';
    src: url('/assets/font/HOOG0553.TTF');
}`
document.body.appendChild(style)

var prompt_div = document.createElement('div')
prompt_div.style.fontFamily = 'Hoog'
prompt_div.style.position = 'fixed'
prompt_div.style.top = '0px'
prompt_div.style.left = '0px'
prompt_div.style.width = '100vw'
prompt_div.style.height = '100vh'
prompt_div.style.background = 'rgba(0,0,0)'
prompt_div.style.margin = '0px'
prompt_div.style.display = 'flex'
prompt_div.style.flexDirection = 'column'
document.body.appendChild(prompt_div)

var prompt_text = document.createElement('h1')
prompt_text.textContent = 'LEND YOUR EAR AND LISTEN'
prompt_text.style.color = 'white'
prompt_text.style.fontSize = '5vw'
prompt_text.style.marginTop = '25vh'
prompt_text.style.pointerEvents = 'none'
prompt_div.appendChild(prompt_text)

var prompt_button = document.createElement('button')
prompt_button.style.fontFamily = 'inherit'
prompt_button.style.width = '200px'
prompt_button.style.height = '50px'
prompt_button.textContent = 'CONTINUE'
prompt_button.style.color = 'white'
prompt_button.style.backgroundColor = 'transparent'
prompt_button.style.border = 'none'
prompt_button.style.outline = '2px white solid'
prompt_button.style.fontSize = '150%'
prompt_button.style.cursor = 'pointer'
prompt_div.appendChild(prompt_button)

// Detect if prompt_button was clicked

prompt_button.addEventListener('click', function () {
    prompt_div.remove()
    document.getElementById('music').play()
})