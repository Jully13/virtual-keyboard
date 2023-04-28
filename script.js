let keyContent = {
    row1: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
}


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
    key.textContent = keyContent.row1[i];
    keysRows[0].append(key);
}

for (let i=0; i<15; i++) {
    let key = document.createElement('div');
    key.className = 'keys';
    keysRows[1].append(key);
}

for (let i=0; i<13; i++) {
    let key = document.createElement('div');
    key.className = 'keys';
    keysRows[2].append(key);
}

for (let i=0; i<14; i++) {
    let key = document.createElement('div');
    key.className = 'keys';
    keysRows[3].append(key);
}

for (let i=0; i<9; i++) {
    let key = document.createElement('div');
    key.className = 'keys';
    keysRows[4].append(key);
}
