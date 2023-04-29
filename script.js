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
    if (i==13) {key.className = 'keys backspace__key'}
    key.textContent = data.eng.row1[i];
    keysRows[0].append(key);
}

for (let i=0; i<15; i++) {
    let key = document.createElement('div');
    key.className = 'keys';
    if (i==0) {key.className = 'keys tab__key'}
    if (i==14) {key.className = 'keys del__key'}
    key.textContent = data.eng.row2[i];
    keysRows[1].append(key);
}

for (let i=0; i<13; i++) {
    let key = document.createElement('div');
    key.className = 'keys';
    if (i==0) {key.className = 'keys caps-lock__key'}
    if (i==12) {key.className = 'keys enter__key'}
    key.textContent = data.eng.row3[i];
    keysRows[2].append(key);
}

for (let i=0; i<14; i++) {
    let key = document.createElement('div');
    key.className = 'keys';
    if (i==0) {key.className = 'keys shift__key shift__key-left'}
    key.textContent = data.eng.row4[i];
    keysRows[3].append(key);
}

for (let i=0; i<9; i++) {
    let key = document.createElement('div');
    key.className = 'keys';
    if (i==0) {key.className = 'keys ctrl__key ctrl__key-left'}
    if (i==3) {key.className = 'keys space__key'}
    if (i==5) {key.className = 'keys ctrl__key ctrl__key-right'}
    key.textContent = data.eng.row5[i];
    keysRows[4].append(key);
}