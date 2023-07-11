const textElements = document.querySelectorAll('[item]');
const add = document.getElementById('add');

add.addEventListener('click', addList);

function addList(){
    for (let i=0; i<textElements.length; i++){
        if(textElements[i].classList.contains('o')){
            textElements[i].classList.remove('o');
            return;
        }
    }
    alert("Limits exceeded, Clear the list.");
}