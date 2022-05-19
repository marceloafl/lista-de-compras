import { addItem } from "./add-item.js";
import { lineTrough } from "./line-through.js";
import { removeItem } from "./remove-item.js";

const btnAddTitle = document.querySelector('[data-button="add-title"]');
const btnClose = document.querySelector('[data-button="close"]');
const cardAdd = document.querySelector('[data-card="add"]');
const btnAdd = document.querySelector('[data-button="add"]');
const itens = document.querySelectorAll('[data-item="line-through"]');
const deleteBtn = document.querySelectorAll('[data-item="delete"]');

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

itens.forEach(item => {
    item.addEventListener('change', function(){
        lineTrough();
    })
})

deleteBtn.forEach(item => {
    item.addEventListener('click', function(){
        removeItem(item);
    })
})

// COLOCAR O EVENTLISTENER NO DOCUMENTO OU NA LISTA PRA PODER CHAMAR AS FUNÇÕES DEPOIS DE INCLUIR ITENS