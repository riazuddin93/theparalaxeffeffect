
let sofa = document.getElementById('sofa');
let chair1 = document.getElementById('chair1');
let chair2 = document.getElementById('chair2');
let title = document.getElementById('title')

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    sofa.style.left = value * -0.5 + 'px';
    chair2.style.left = value * 1.3 + 'px';
    chair1.style.left = value * -1.5 + 'px';
    title.style.marginTop = value * 2.5 + 'px';
});