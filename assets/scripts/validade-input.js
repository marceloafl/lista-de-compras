export function inputValidity(item){
    let validInput = true;

    if (item.length === 0){
        validInput = false;
    }

    return validInput;
}

