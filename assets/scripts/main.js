import { addItem } from "./add-item.js";
import { lineTrough } from "./line-through.js";
import { removeItem } from "./remove-item.js";

const btnAddTitle = document.querySelector('[data-button="add-title"]');
const btnClose = document.querySelector('[data-button="close"]');
const cardAdd = document.querySelector('[data-card="add"]');
const btnAdd = document.querySelector('[data-button="add"]');
const list = document.querySelector('[data-list]');

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
    addItem();
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


