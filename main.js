const main = document.querySelector('.main');
const cancel = document.querySelector('.cancel');
const msg = document.querySelector('#msg');

while (true) {
    let n = prompt("Enter your name");
    
    if(n == null) {
        main.style.display = "none";
        cancel.style.display = "flex";
        msg.innerHTML = "f*kudenji";
    }

    if (n.length > 0) {
        alert("What if di ka crush ng mo?");
        alert("What if gusto kita");
        alert('What if Tayo nalang');
        alert('Wag ka na dyan sa crush mo');
        alert('I love You ' + n);
        main.style.display = 'block';
        break;
    }
}