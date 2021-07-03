const rangeEL = document.querySelector('#font-size-control');
const spanEL = document.querySelector('#text');

rangeEL.addEventListener("input", onTextResize);

function onTextResize() {
    spanEL.style.fontSize = rangeEL.value + 'px';
}








