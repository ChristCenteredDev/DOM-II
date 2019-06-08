// Your code goes here
let h1Logo = document.querySelector('.logo-heading');
h1Logo.addEventListener('mouseover', () => {
  if (h1Logo.style.fontSize != '6rem') {
    h1Logo.style.fontSize = '6rem';
  }
});

h1Logo.addEventListener('mouseout', () => {
  h1Logo.style.fontSize = '4rem';
});

let introIMG = document.querySelector('.intro img');
introIMG.addEventListener('mouseover', () => {
  if (introIMG.style.transform != 'scale(1.2)') {
    introIMG.style.transform = 'scale(1.2)';
  }
});

introIMG.addEventListener('mouseout', () => {
    introIMG.style.transform = 'scale(1.0)';
});

let html = document.querySelector('html');
html.addEventListener('dblclick', () => {
  html.classList.toggle('grey');
});

let imgContent = document.querySelectorAll('.img-content img');
imgContent.forEach((elem) => {
  elem.addEventListener('mousemove', () => {
    if (elem.style.borderRadius != '50%') {
      elem.style.borderRadius = '50%';
    }
  });

  elem.addEventListener('mouseleave', () => {
    elem.style.borderRadius = '10px';
  });
});

let destIMG = document.querySelector('.content-destination img');
destIMG.addEventListener('click', (event) => {
  event.stopPropagation();
  destIMG.setAttribute('hidden', 'true');
});

let p = document.querySelectorAll('p');
p.forEach((elem) => {
  elem.addEventListener('auxclick', () => {
    elem.style.color = 'blue';
  });
});