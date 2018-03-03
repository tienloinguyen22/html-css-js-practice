let buttons = document.getElementsByClassName('button');
for (let i=0; i<buttons.length; i+=1) {
    
    buttons[i].addEventListener('click', function() {
        this.classList.toggle("active");

        let content = this.nextElementSibling;
        if (content.style.height === '95px') {
            content.style.height = '0px';
        }
        else {
            content.style.height = '95px';
        }

    }, false);

}


let links = document.getElementsByClassName('link');
let current_slide  = 0;
for (let i=0; i<links.length; i+=1) {
    links[i].addEventListener('click', function() {
        let slides = document.getElementsByClassName('slide');
        if (links[i].classList.contains('previous')) {
            if (current_slide === 0) {
                current_slide = 2;
            }
            else {
                current_slide -= 1;
            }

            for (let j=0; j<slides.length; j+=1) {
                if (j === current_slide) {
                    slides[j].style.display = 'block';
                }
                else {slides[j].style.display = 'none';}
            }
        }
        else if (links[i].classList.contains('next')) {
            if (current_slide === 2) {
                current_slide = 0;
            }
            else {
                current_slide += 1;
            }
            for (let j=0; j<slides.length; j+=1) {
                if (j === current_slide) {
                    slides[j].style.display = 'block';
                }
                else {slides[j].style.display = 'none';}
            }
        }
    }, false);
}
