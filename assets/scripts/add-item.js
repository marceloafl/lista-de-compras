import { inputValidity } from "./validade-input.js";

const list = document.querySelector('[data-list]');
const itemInput = document.querySelector('[data-input="item"]');
const msgSuccess = document.querySelector('[data-msg="success"]');

export function addItem(itemInput){
    const item = itemInput.value;

    if (inputValidity(item)){
        criaItem(item);
        successMsg();
        getFocus();
        resetInput();
    } else {
        inputWarning();
    }
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

function inputWarning(){
    itemInput.classList.add('add__input--warning');
     setTimeout(function(){
        itemInput.classList.remove('add__input--warning');
     }, 2000)
}

function successMsg(){
    msgSuccess.classList.remove('hide');
    setTimeout(function(){
        msgSuccess.classList.add('hide');
    }, 1000)
}