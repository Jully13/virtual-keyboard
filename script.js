import data from './js/keysData.js';

let body = document.querySelector('body');

let wrapper = document.createElement('div');
wrapper.className = 'wrapper';
body.append(wrapper);

let language = document.createElement('div');
language.className = 'language__wrapper';
wrapper.append(language);

let selectLang =  document.createElement('select');
selectLang.className = 'language__select';
language.append(selectLang);

let selectEn =  document.createElement('option');
selectEn.value = 'eng';
selectEn.textContent = 'English';
selectLang.append(selectEn);

let selectRu =  document.createElement('option');
selectRu.value = 'ru';
selectRu.textContent = 'Russian';
selectLang.append(selectRu);

let text = document.createElement('textarea');
text.setAttribute("type", "text");
text.setAttribute('autofocus', 'autofocus');
text.className = 'text';
wrapper.append(text);

let keyBoardWrapper = document.createElement('div');
keyBoardWrapper.className = 'keyboard__weapper';
wrapper.append(keyBoardWrapper);

let keyBoardKeys = document.createElement('div');
keyBoardKeys.className = 'keyboard__keys';
keyBoardWrapper.append(keyBoardKeys);




// Local Storage

window.addEventListener('beforeunload', setLocalStorage);
getLocalStorage();

function setLocalStorage() {
  localStorage.setItem('language', selectLang.value);
  localStorage.setItem('text', text.value);
}


function getLocalStorage() {
  if (localStorage.getItem('language')) {
    selectLang.value = localStorage.getItem('language');
  }
  if (localStorage.getItem('text')) {
    text.value = localStorage.getItem('text');
  }
}



getKeys ();

function getKeys () {
    document.querySelector('.keyboard__keys').innerHTML = '';
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
        key.textContent = data[selectLang.value].row1[i];
        keysRows[0].append(key);
    }

    for (let i=0; i<15; i++) {
        let key = document.createElement('div');
        key.className = 'keys';
        if (i==0) {key.className = 'keys tab__key'}
        if (i==14) {key.className = 'keys del__key'}
        key.textContent = data[selectLang.value].row2[i];
        keysRows[1].append(key);
    }

    for (let i=0; i<13; i++) {
        let key = document.createElement('div');
        key.className = 'keys';
        if (i==0) {key.className = 'keys caps-lock__key'}
        if (i==12) {key.className = 'keys enter__key'}
        key.textContent = data[selectLang.value].row3[i];
        keysRows[2].append(key);
    }

    for (let i=0; i<14; i++) {
        let key = document.createElement('div');
        key.className = 'keys';
        if (i==0) {key.className = 'keys shift__key shift__key-left'}
        if (i==12) {key.className = 'keys array__key array__key-up'}
        if (i==13) {key.className = 'keys shift__key shift__key-right'}
        key.textContent = data[selectLang.value].row4[i];
        keysRows[3].append(key);
    }

    for (let i=0; i<9; i++) {
        let key = document.createElement('div');
        key.className = 'keys';
        if (i==0) {key.className = 'keys ctrl__key ctrl__key-left'}
        if (i==1) {key.className = 'keys win__key'}
        if (i==2) {key.className = 'keys alt__key alt__key-left'}
        if (i==3) {key.className = 'keys space__key'}
        if (i==4) {key.className = 'keys alt__key alt__key-right'}
        if (i==5) {key.className = 'keys ctrl__key ctrl__key-right'}
        if (i==6) {key.className = 'keys array__key array__key-left'}
        if (i==7) {key.className = 'keys array__key array__key-down'}
        if (i==8) {key.className = 'keys array__key array__key-right'}
        key.textContent = data[selectLang.value].row5[i];
        keysRows[4].append(key);
    }
}




let keys = document.querySelectorAll('.keys');
let backSpaceKey = document.querySelector('.backspace__key');
let tabKey = document.querySelector('.tab__key');
let delKey = document.querySelector('.del__key');
let capsLockKey = document.querySelector('.caps-lock__key');
let enterKey = document.querySelector('.enter__key');
let shiftKeyLeft = document.querySelector('.shift__key-left');
let shiftKeyRight = document.querySelector('.shift__key-right');
let ctrlKeyLeft = document.querySelector('.ctrl__key-left');
let ctrlKeyRight = document.querySelector('.ctrl__key-right');
let altKeyLeft = document.querySelector('.alt__key-left');
let altKeyRight = document.querySelector('.alt__key-right');
let winKey = document.querySelector('.win__key');
let spaceKey = document.querySelector('.space__key');
let arrayUpKey = document.querySelector('.array__key-up');
let arrayLeftKey = document.querySelector('.array__key-left');
let arrayDownKey = document.querySelector('.array__key-down');
let arrayRightKey = document.querySelector('.array__key-right');


for (let i=0; i<keys.length; i++) {
    keys[i].setAttribute("keyname", keys[i].innerText);
    keys[i].setAttribute("lowerCaseName", keys[i].innerText.toLowerCase());
}


getCharFromKeyboard ();

function getCharFromKeyboard () {
    text.setAttribute('autofocus', 'autofocus');
    window.addEventListener('keydown', function (event) {
        console.log(event.code)
        for (let i=0; i<keys.length; i++) {
            if (event.key == keys[i].getAttribute('keyname') || event.key == keys[i].getAttribute('lowerCaseName')) {
                keys[i].classList.add('active');
            }
            if (event.code == 'Space') {
                spaceKey.classList.add('active');
            }
            if (event.code == 'Delete') {
                delKey.classList.add('active');
            }
            if (event.code == 'ArrowUp') {
                arrayUpKey.classList.add('active');
            }
            if (event.code == 'ArrowDown') {
                arrayDownKey.classList.add('active');
            }
            if (event.code == 'ArrowLeft') {
                arrayLeftKey.classList.add('active');
            }
            if (event.code == 'ArrowRight') {
                arrayRightKey.classList.add('active');
            }
            if (event.code == "ShiftLeft") {
                shiftKeyRight.classList.remove('active');
            }
            if (event.code == "ShiftRight") {
                shiftKeyLeft.classList.remove('active');
            }
            if (event.code == 'AltLeft') {
                altKeyRight.classList.remove('active');
            }
            if (event.code == 'AltRight') {
                altKeyLeft.classList.remove('active');
            }
            if (event.code == 'ControlLeft') {
                ctrlKeyLeft.classList.add('active');
            }
            if (event.code == 'ControlRight') {
                ctrlKeyRight.classList.add('active');
            }
            if (event.code == 'Enter') {
                enterKey.classList.add('active');
            }
            if (event.code == 'CapsLock') {
                capsLockKey.classList.toggle('active');
            }
        }
    })

    window.addEventListener('keyup', function(event) {
        for (let i=0; i<keys.length; i++) {
            if (event.key == keys[i].getAttribute('keyname') || event.key == keys[i].getAttribute('lowerCaseName')) {
                keys[i].classList.remove('active');
                keys[i].classList.add('remove');
            }
            if (event.code == 'Space') {
                spaceKey.classList.remove('active');
                spaceKey.classList.add('remove');
            }
            if (event.code == 'Delete') {
                delKey.classList.remove('active');
                delKey.classList.add('remove');
            }
            if (event.code == 'ArrowUp') {
                arrayUpKey.classList.remove('active');
                arrayUpKey.classList.add('remove');
            }
            if (event.code == 'ArrowDown') {
                arrayDownKey.classList.remove('active');
                arrayDownKey.classList.add('remove');
            }
            if (event.code == 'ArrowLeft') {
                arrayLeftKey.classList.remove('active');
                arrayLeftKey.classList.add('remove');
            }
            if (event.code == 'ArrowRight') {
                arrayRightKey.classList.remove('active');
                arrayRightKey.classList.add('remove');
            }
            if (event.code == 'ShiftLeft') {
                shiftKeyRight.classList.remove('active');
                shiftKeyRight.classList.remove('remove');
            }
            if(event.code == 'ShiftRight') {
                shiftKeyLeft.classList.remove('active');
                shiftKeyLeft.classList.remove('remove');
            }
            if (event.code == 'AltLeft') {
                altKeyRight.classList.remove('active');
                altKeyRight.classList.remove('remove');
            }
            if(event.code == 'AltRight') {
                altKeyLeft.classList.remove('active');
                altKeyLeft.classList.remove('remove');
            }
            if (event.code == 'ControlRight') {
                ctrlKeyRight.classList.remove('active');
                ctrlKeyRight.classList.add('remove');
            }
            if(event.code == 'ControlLeft') {
                ctrlKeyLeft.classList.remove('active');
                ctrlKeyLeft.classList.add('remove');
            }
            if(event.code == 'Enter') {
                enterKey.classList.remove('active');
                enterKey.classList.add('remove');
            }
            setTimeout(()=> {
                keys[i].classList.remove('remove');
            },200);
        }
    })
}

getCharFromVirtualKeyboard ();

function getCharFromVirtualKeyboard () {
    text.setAttribute('autofocus', 'autofocus');
    keys.forEach(key => {
        key.addEventListener('mousedown', function () {
            key.classList.add('active');
        })
        key.addEventListener('mouseup', function (event) {
            key.classList.remove('active');
            key.classList.add('remove');
            setTimeout(()=> {
                key.classList.remove('remove');
            },200);
            writeCharInTextBox (key);
        })
    })

    function writeCharInTextBox (key) {
        if (key.getAttribute('keyName') == 'Caps Lock') {
            text.textContent = text.textContent;
        } else
        if (key.getAttribute('keyName') == 'Backspace') {
            text.textContent = (text.textContent).substring(0, (text.textContent).length-1)
        } else
        if (key.getAttribute('keyName') == 'Tab') {
            text.textContent += String.fromCharCode(9);
        } else
         if (key.getAttribute('keyName') == 'ENTER') {
            text.textContent += String.fromCharCode(13);
        } else
        if (key.classList.contains('space__key')) {
            text.textContent += String.fromCharCode(32);
        } else
        if (key.getAttribute('keyName') == 'Win') {
            winKey.addEventListener('click', (event) => {
                event.code = 91;
            })
        } else
        if (key.getAttribute('keyName') == 'DEL') {
           text.textContent = (text.textContent).substring(0, (text.textContent).length-1)
        } else {
            if (capsLockKey.classList.contains('upper')) {
                text.textContent += key.getAttribute('keyname');
            } else {text.textContent += key.getAttribute('lowerCaseName');}
        }
    }
    capsLockKey.addEventListener('click', () => {
        capsLockKey.classList.toggle('upper');
    })
}



selectLang.addEventListener ('change', () => {
    for (let i=0; i<keys.length; i++) {
        keys[i].setAttribute("keyname", keys[i].innerText);
        keys[i].setAttribute("lowerCaseName", keys[i].innerText.toLowerCase());
    }
    getKeys ();
 
    getCharFromVirtualKeyboard ();

   
 
})




