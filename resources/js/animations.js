var links = document.getElementsByClassName("link");

for(var i = 0; i < links.length; i++) {
  links[i].addEventListener("mouseover", mouseOver)
  links[i].addEventListener("mouseout", mouseOut);
}

// Wrap every letter in a span
var textWrapper = document.querySelector('.name .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");


anime.timeline({loop: true})
  .add({
    targets: ['.letter'],
    translateY: '-0.4rem',
    translateZ: 0,
    duration: 400,
    offset:'-=300',
    easing: 'easeInOutExpo',
    delay: (el, i) => 50 * i
  })
  .add({
    targets: '.letter',
    translateY: '0rem',
    translateZ: 0,
    duration: 400,
    endDelay: 3000,
    easing: 'easeInOutExpo',
    // direction: 'reverse',
    delay: (el, i) => 50 * i
  })

function mouseOut(evt) {
  anime({
    targets: '#' + evt.currentTarget.children[0].id,
    scaleX: [1,0],
    opacity: [1,0.5],
    easing: "easeOutExpo",
    duration: 700,
    // offset: '-=875',
    // delay: (el, i, l) => 80 * (l - i)
  })
}

function mouseOver(evt) {
  anime({
    targets: '#' + evt.currentTarget.children[0].id,
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    // offset: '-=875',
    // delay: (el, i, l) => 80 * (l - i)
  })
}

