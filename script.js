const panels = document.querySelectorAll('.panel');

//Function to increase the flex basis
function toggleOpen() {
    this.classList.toggle('open');
}

//Function to make the text pop in
function toggleActive(e) {
    if(e.propertyName.includes('flex')) {
        this.classList.add('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
