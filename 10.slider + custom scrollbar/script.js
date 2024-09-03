const images = document.querySelectorAll('.img');
const buttons = document.querySelectorAll('.button');
const slider = document.querySelector('.slider');
const range = document.querySelector('[type=range]')


function scroll(th) {
    const fullWidth = slider.clientWidth + slider.scrollLeft;
    const prevWidth = slider.scrollLeft;

    if(th.dataset.dir === 'next') {
        next(fullWidth)
    } else {
        prev(prevWidth)
    }
}

function next(width) {
    for(let i = 0; i < images.length; i++) {
        let currImg = images[i]
        if(currImg.offsetLeft + currImg.offsetWidth > width) {
            slider.scrollLeft = currImg.offsetLeft
            return
        }
    }
}

function prev(width) {
    for(let i = images.length - 1; i >= 0; i--) {
        let currImg = images[i]
        if(currImg.offsetLeft < width) {
            slider.scrollLeft = images[i-1] ? images[i-1].offsetLeft : images[i].offsetLeft
            // debugger
            return
        }
    }
}


buttons.forEach(button => button.addEventListener('click', function(e) {
    if(e.target.closest('button')) {
        slider.classList.add('scroll__behav')
        scroll(this)

    }
}))


range.max = slider.scrollWidth - slider.clientWidth;
range.step = (slider.scrollWidth - slider.clientWidth) / 200

range.addEventListener('input', function() {
    slider.classList.remove('scroll__behav')
    slider.scrollLeft = range.value
})

slider.addEventListener('scroll', function() {
    range.value = slider.scrollLeft
})