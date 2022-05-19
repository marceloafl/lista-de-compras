const itemInput = document.querySelector('[data-input="item"]');
const list = document.querySelector('[data-list]');

export function addItem(){
    const item = itemInput.value;
    criaItem(item);
    getFocus();
    resetInput();
}

function criaItem(item){
    const name = document.createElement('p');
    name.dataset.item = 'name';
    name.classList.add('item__name');
    name.textContent = item;

    const buttonDelete = document.createElement('button');
    buttonDelete.dataset.item = 'delete';
    buttonDelete.classList.add('item__delete');

    const lineItem = document.createElement('section');
    lineItem.classList.add('list__item');

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