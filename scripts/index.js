let header = document.getElementById('header')

window.addEventListener('scroll' , () => {
    if (window.scrollY >= 200) {
        header.style.background = '#FFFFFF'
    } else {
        header.style.background = 'transparent'
    }

})

header.style.transition = 'background 0.6s ease';