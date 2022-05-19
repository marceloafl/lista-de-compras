const itens = document.querySelectorAll('[data-item="line-through"]');

export function lineTrough(){
    itens.forEach(function(item){
        if(item.checked){
            item.nextElementSibling.classList.add('item__name--line-through');
        }
        if(!item.checked){
            item.nextElementSibling.classList.remove('item__name--line-through');
        }
    })
}