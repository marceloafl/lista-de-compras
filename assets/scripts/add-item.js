const itemInput = document.querySelector('[data-input="item"]');
const list = document.querySelector('[data-list]');

export function addItem(){
    const item = itemInput.value;
    criaItem(item);
    getFocus();
    resetInput();
}

function criaItem(item){
    const inputLineThrough = document.createElement('input');
    inputLineThrough.type = 'checkbox';
    inputLineThrough.classList.add('item__line-through');

    const name = document.createElement('p');
    name.classList.add('item__name');
    name.textContent = item;

    const buttonDelete = document.createElement('button');
    buttonDelete.classList.add('item__delete');

    const lineItem = document.createElement('section');
    lineItem.classList.add('list__item');

    lineItem.appendChild(inputLineThrough);
    lineItem.appendChild(name);
    lineItem.appendChild(buttonDelete);

    list.appendChild(lineItem);
}

function resetInput(){
    itemInput.value = '';
}

function getFocus(){
    itemInput.focus();
}