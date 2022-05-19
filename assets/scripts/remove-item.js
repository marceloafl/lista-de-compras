const deleteBtn = document.querySelectorAll('[data-item="delete"]');

export function removeItem(item){
    item.parentNode.remove();

}
