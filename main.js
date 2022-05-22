import { addItem } from "./assets/scripts/add-item.js";
import { lineTrough } from "./assets/scripts/line-through.js";
import { removeItem } from "./assets/scripts/remove-item.js";

const btnAddTitle = document.querySelector('[data-button="add-title"]');
const btnClose = document.querySelector('[data-button="close"]');
const cardAdd = document.querySelector('[data-card="add"]');
const btnAdd = document.querySelector('[data-button="add"]');
const list = document.querySelector('[data-list]');
const itemInput = document.querySelector('[data-input="item"]');
const inputAdd = document.querySelector('[data-input="item"]');

btnAddTitle.addEventListener('click', function(event){
    event.preventDefault();
    cardAdd.classList.add('add__wrapper--active');
    btnClose.classList.remove('hide');
});

btnClose.addEventListener('click', function(event){
    event.preventDefault();
    cardAdd.classList.remove('add__wrapper--active');
    btnClose.classList.add('hide');
});

btnAdd.addEventListener('click', function(event){
    event.preventDefault();
    addItem(itemInput);
});

inputAdd.addEventListener('keypress', function(event){
    if (event.key === 'Enter'){
        addItem(itemInput);
    }
});

list.addEventListener('click', function(event){
    const target = event.target;
    if (target.dataset.item === 'name'){
        lineTrough(target);
    }

    if (target.dataset.item === 'delete'){
        removeItem(target);
    }
});


