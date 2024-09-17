
const heading = document.getElementById('heading');
const increaseBtn = document.getElementById('increase-btn');
const decreaseBtn = document.getElementById('decrease-btn');
//const heading = documnet.getElementById('heading');
//const increaseBtn = document.getElementById('increas-btn');
//Const decreaseBtn = document.getElementById('decrease-btn');


let fontSize = 18.72;
//let fontSize = 16;


function updateFontSize() {
    heading.style.fontSize = `${fontSize}px`;
}
// function updateFontSize(){
// heading.style.fontSize =`${fontSize}px`;
// }


increaseBtn.addEventListener('click', () => {
    fontSize += 4;
    updateFontSize();
});

decreaseBtn.addEventListener('click', () => {
    fontSize -= 4;
    updateFontSize();
});


// updateFontSize();
