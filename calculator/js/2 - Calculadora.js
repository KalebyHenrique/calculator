let output = document.querySelector('#display');
let num1 = '';
let num2 = '';
let operacao = null;
let isCalculated = false;

const incluirDigito = (digito) => {
	if (!operacao && !num2) {
		num1 += digito;
		output.innerHTML = num1;
		return;
	}
	if (isCalculated) {
		limpar();
		output.innerHTML = digito;
		num1 = digito;
		return;
	}
	num2 += digito;
	output.innerHTML = num2;
};

const iniciarCalculo = (operador) => {
	isCalculated = false;
	operacao = operador;
	output.innerHTML = num1;
	if (num2) {
		finalizarCalculo();
		return;
	}
	num2 = '';
};

const finalizarCalculo = (x) => {
	num1 = Number(num1);
	num2 = Number(num2);
	switch (operacao) {
		case '-':
			num1 -= num2;
			break;
		case '*':
			num1 *= num2;
			break;
		case '+':
			num1 += num2;
			break;
		case '/':
			num1 /= num2;
			break;
	}
	output.innerHTML = num1;
	num2 = '';
	if (x) {
		isCalculated = true;
		return;
	}
	isCalculated = false;
};

const limpar = () => {
	output.innerHTML = 0;
	num1 = '';
	num2 = '';
	resultado = 0;
	operacao = null;
};

const obterPorcento = () => {
	let result = num2 / 100 * num1;
	resultado = num2 / 100 * num1;
	output.innerHTML = resultado;
	output.innerHTML = result;
	resultado = result;
	num2 = result;
};

const incluirPonto = () => {
	if (!num2 && operacao === null) {
		num1 === '' ? (num1 += '0') : num1;
		!num1.includes('.') ? (num1 += '.') : num1;
		output.innerHTML = num1;
	} else {
		num2 === '' ? (num2 += '0') : num2;
		!num2.includes('.') ? (num2 += '.') : num2;
		output.innerHTML = num2;
	}
};
