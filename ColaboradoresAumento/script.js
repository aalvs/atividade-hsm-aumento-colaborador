
function update() {

    let salario = document.querySelector('#input-salario').value;
    let salarioFormatado =  parseFloat(salario);

    let plano = document.querySelector('#tipo-plano');
    let itemSelect = plano.options[plano.selectedIndex].value;
    
    let aumentoSalario = 0;
    let novoSalario = document.querySelector('#novoSalario');

    switch(itemSelect) {
        case 'A':
            aumentoSalario = salarioFormatado + (salarioFormatado * .10);
            novoSalario.innerText = aumentoSalario;
            console.log(aumentoSalario);
            break;
        case 'B':
            aumentoSalario = salarioFormatado + (salarioFormatado * .15);
            novoSalario.innerText = aumentoSalario;
            console.log(aumentoSalario);
            break;
        case 'C':
            aumentoSalario = salarioFormatado + (salarioFormatado * .20);
            novoSalario.innerText = aumentoSalario;
            console.log(aumentoSalario);
            break;
    }
};



