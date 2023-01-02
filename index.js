const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function getRandom() {
    const min = 0;
    const max = characters.length -1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateKey(length, value){
    const str = value.split('');
    let key = '';

    for(let i = 0; i < length; i++){
        key += str[getRandom()];
    }
    return key;
}

const key = generateKey(23, characters);

console.log(key);