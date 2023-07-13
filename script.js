const itemElements = document.querySelectorAll('[item]');
const textElements = document.querySelectorAll('[text]');
const checkMarkElements = document.querySelectorAll('[checkmark]');
const add = document.getElementById('add');

add.addEventListener('click', addList);
checkMarkElements.forEach((button, index) => {
    button.addEventListener('click', () => check(index));
})

function addList(){
    for (let i=0; i<itemElements.length; i++){
        if(itemElements[i].classList.contains('o')){
            itemElements[i].classList.remove('o');
            return;
        }
    }
    alert("Limits exceeded, Clear the list.");
}

function check(index) { 
    textElements[index].value = '';
    //first move up
    moveUp(index);
    clear(index);
}

function moveUp(index){
    let i=index
    for( ;i<(itemElements.length-1); i++){
        textElements[i].value = textElements[i+1].value
    }
    textElements[i].value='';
}

function clear(index){
    let i = textElements.length - 1;
    while(i > index && i > 4){
        if((!itemElements[i].classList.contains('o')) && textElements[i].value === ''){
            itemElements[i].classList.add('o');
            return;
        }
        i--;
    }
}
