import data from './js/keysData.js';

let body = document.querySelector('body');

let wrapper = document.createElement('div');
wrapper.className = 'wrapper';
body.append(wrapper);

let keyBoardWrapper = document.createElement('div');
keyBoardWrapper.className = 'keyboard__weapper';
wrapper.append(keyBoardWrapper);

let keyBoardKeys = document.createElement('div');
keyBoardKeys.className = 'keyboard__keys';
keyBoardWrapper.append(keyBoardKeys);

for (let i=0; i<5; i++) {
    let row = document.createElement('div');
    row.className = 'row';
    keyBoardKeys.append(row);
}

let keysRows = document.querySelectorAll('.row');

for (let i=0; i<14; i++) {
    let key = document.createElement('div');
    key.className = 'keys';
    key[13].classList.add('backspace-key');
    key.textContent = data.eng.row1[i];
    keysRows[0].append(key);
}

for (let i=0; i<15; i++) {
    let key = document.createElement('div');
    key.className = 'keys';
    key[0].classList.add('tab-key');
    key[14].classList.add('del-key');
    key.textContent = data.eng.row2[i];
    keysRows[1].append(key);
}

for (let i=0; i<13; i++) {
    let key = document.createElement('div');
    key.className = 'keys';
    key[0].classList.add('caps-lock-key');
    key[12].classList.add('enter-key');
    key.textContent = data.eng.row3[i];
    keysRows[2].append(key);
}

for (let i=0; i<14; i++) {
    let key = document.createElement('div');
    key.className = 'keys';
    key[0].classList.add('shift-key');
    key.textContent = data.eng.row4[i];
    keysRows[3].append(key);
}

for (let i=0; i<9; i++) {
    let key = document.createElement('div');
    key.className = 'keys';
    key[0].classList.add('ctrl-key');
    key[3].classList.add('space-key');
    key[5].classList.add('ctrl-key');
    key.textContent = data.eng.row5[i];
    keysRows[4].append(key);
}
