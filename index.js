const buttons = document.querySelectorAll('.btn');
const result = document.getElementById('result');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        result.textContent += e.target.id;
    })
});

//un bouton avec un id n'a pas besoin d'etre déclaré (comme equal ci-desous)
equal.addEventListener('click', () => {
    result.textContent = eval(result.textContent);
})
//eval() est une méthode js qui permet de calculer 
clear.addEventListener('click', () => {
    result.textContent = "";
})
