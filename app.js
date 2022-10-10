console.log('Calculator');

let Text = document.getElementById('text');
let buttons = document.querySelectorAll('.btn');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        let btnText = e.target.innerText;
        console.log(btnText);
        if (btnText == 'x') {
            btnText = '*';
            screenValue += btnText
            Text.value = screenValue;
        }
        else if(btnText == 'C'){
            screenValue = '';
            Text.value = screenValue;
        }
        else if(btnText == '='){
            Text.value = eval(screenValue);
        }
        else{
            screenValue += btnText;
            Text.value = screenValue; 
        }
    })
}