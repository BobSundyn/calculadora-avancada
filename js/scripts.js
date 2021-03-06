// Variáveis com Escopo Global
var num1 = "";
var num2 = "";
var operador = "";

function pegarValor(valor) {
    play();

    //Verifica se o operador tem valor 
    if (operador == "") {
        num1 = num1 + valor;
        //num1 += valor; // O mesmo que o de cima

        atualizarDisplay(num1); //Atualiza o display
    } else {
        num2 = num2 + valor;
        atualizarDisplay(num2); //Atualiza o display
    } 
}

function pegarOperador(sinal) {
    play();

    //Verifica se o primeiro valor foi informado
    if (num1 != "") { //SE o num1 for diferente de ""

        // Se o segundo valor NÃO for informado
        if (num2 == "") {
            operador = sinal;
            atualizarDisplay(num1 + sinal);//Atualiza o display

        } else {
            //Faz o cálculo
            calcular();
        }
    }
}


//Realiza os Cálculos
function calcular() {
    //Converter os valores para FLOAT (decimal)
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    //Guarda o resultado
    var resultado = "";

    //Verifica o sinal informado
    if (operador == "+") {
        resultado = num1 + num2;

    }else if (operador == "-") {
        resultado = num1 - num2;

    }else if (operador == "*") {
        resultado = num1 * num2;

    }else if (operador =="/") {
        resultado = num1 / num2;
    }

    //Limpa o conteúdo das variáveis e atualiza o display
       // num1 = ""; //num1 = resultado; PARA O NUM1 CONTINUAR COM O RESULTADO
       limpar();
       atualizarDisplay(resultado);
}

//Tecla igual
function verificarIgual() {
    play();

    // Verificar se TODOS os campos foram preenchidos
    if (num1 != "" && num2 != "" && operador != "") {
        calcular();
    }
}


// Atualiza o display
function atualizarDisplay(valor) {
    document.getElementById('display').innerHTML = valor;
}

// Limpar 
function limpar() {
    play();
    num1 = "";
    num2 = "";
    operador = "";
    atualizarDisplay("0");
}


// reproduz o som da tecla
function play() {
    var blip = document.getElementById('blip');

    blip.volume = 0.5;
    blip.play();
}

//EXEMPLO DE ESTRUTURA CONDICIONAL SE NÃO
/*function verificarMedia(n1, n2, n3) {
    var n1 = parseInt(n1.value);
    var n2 = parseInt(n2.value);
    var n3 = parseInt(n3.value);

    var media = (n1 + n2 + n3) / 3;

    console.log("Média: " + media);

    // verifica se o aluno está aprovado ou reprovado
    //SE (media maior ou igual a 6) FAÇA
    if (media >= 6){
        alert("Aprovado");

    // Senão se faça    
    } else if (media < 6 && media >= 3) {
        alert("Exame");
        

    //Senão faça
    } else {
        alert("Reprovado");
    }
}*/