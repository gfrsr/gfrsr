const animationEl = document.querySelector('#animation');
const fragment = document.createDocumentFragment();
const grid = [17, 17];
const col = 25;
const row = 7;
const numberOfElements = 150

for (let i = 0; i < numberOfElements; i++) {
    fragment.appendChild(document.createElement('div'));
}

animationEl.appendChild(fragment);

const staggersAnimation = anime.timeline({
    targets: '#animation div',
    easing: 'easeInOutSine',
    loop: true,
    autoplay: false,
    duration: 6000,
    loopComplete: (a) => console.log('end'),
    //update: () => console.log(staggersAnimation.progress)
  })
.add({
    rotate: anime.stagger(2, {from: 'center', direction: 'reverse', easing: 'easeInSine'}),
    translateX: 0,
    translateY: 0,
    delay: anime.stagger(2, {from: 'center'})
  })
  .add({
    rotate: anime.stagger(-2, {from: 'center', direction: 'reverse', easing: 'easeInSine'}),
    translateX: 0,
    translateY: 0,
    duration: 10000,
    delay: anime.stagger(2, {from: 'center'})
  })
  .add({
    rotate: anime.stagger(0, {from: 'center', direction: 'reverse', easing: 'easeInSine'}),
    translateX: 0,
    translateY: 0,
    delay: anime.stagger(2, {from: 'center'}),
    duration: 6000,
  })

  staggersAnimation.play();