  //pegar o dado armazenado na variavel
	player1Name = localStorage.getItem("player1Name");
	player2Name = localStorage.getItem("player2Name");

	//definir score do j1 e j2 como var
	player1Score = 0;
	player2Score = 0;

	player1Width = 0;
	player1Height = 0;

	//mostrar no id "player1Name" o nome dos jogadores armazenado na variavel
document.getElementById("player1Name").innerHTML = 	player1Name + " : ";
document.getElementById("player2Name").innerHTML = player2Name + " : ";

//mostrar no id do score o score da variavel
document.getElementById("player1Score").innerHTML = player1Score ;
document.getElementById("player2Score").innerHTML = player2Score ;

//mostrar no id da pergunta o turno do jogador armazenado na variavel 
document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta - " + player1Name ;
document.getElementById("playerAnswer").innerHTML = "Turno de Resposta - " + player2Name ;

function send() {
	//armazenar o valer do id word numa variavel
	getWord = document.getElementById("word").value;
	//deixar o texto na caixa baixa que foi armazenado na variavel de cima

	word = getWord.toLowerCase();
	//mostrar no console a variavel word na "caixa baixa"
	console.log("palavra em caixa baixa = " + word);

    //indentificar o caractere no indice 1 
    charAt1 = word.charAt(1);
		//mostrar no console a variave
	console.log(charAt1);

	//definir uma variavel que vai arredondar pra baixo o comprimento do indice
	lenghtDivide2 = Math.floor(word.length/2);
	//var que indentifica o caractere do comprimento da variavel
	charAt2 = word.charAt(lenghtDivide2);

  //mostra no console a variavel
	console.log(charAt2);
    
	//var que diminui o comprimento da variavel por 1
    lenghtMinus1 = word.length - 1; 
		//para obter o indice que tá armazenado na variavel
    charAt3 = word.charAt(lenghtMinus1);
		//mostrar no console a variavel
	  console.log(charAt3);

    removeCharAt1 = word.replace(charAt1, "_");
    removeCharAt2 = removeCharAt1.replace(charAt2, "_");
    removeCharAt3 = removeCharAt2.replace(charAt3, "_");
	  console.log(removeCharAt3);

    question_word = "<h4 id='wordDisplay'> P. "+removeCharAt3+"</h4>";
    inputBox = "<br>Resposta : <input type='text' id='inputCheckBox'>";
    checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row =  question_word + inputBox + checkButton ; 
    document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
}


questionTurn = "player1";
answerTurn = "player2";


function check()
{
	getAnswer = document.getElementById("inputCheckBox").value; // declarar var para obter o valor da input
	answer = getAnswer.toLowerCase(); //declarar var para obter a var na caixa baixa (abcdefghijklmnopqrstuv...)
	console.log("resposta em caixa baixa - " + answer); //mostrar no console
	if(answer == word)
	{
		if(answerTurn == "player1")
		{
			player1Score = player1Score +1;
		    document.getElementById("player1Score").innerHTML = player1Score;
		}
		else 
		{
			player2Score = player2Score +1;
		    document.getElementById("player2Score").innerHTML = player2Score;
		}
	}
	if(questionTurn == "player1")
	{
		questionTurn = "player2"
		document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta - " + player2Name ;
	}
	else 
	{
		questionTurn = "player1"
		document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta - " + player1Name ;
	}

	if(answerTurn == "player1")
	{
		answerTurn = "player2"
		document.getElementById("playerAnswer").innerHTML = "Turno de Resposta - " + player2Name ;
	}
	else 
	{
		answerTurn = "player1"
		document.getElementById("playerAnswer").innerHTML = "Turno de Resposta - " + player1Name ;
	}

    document.getElementById("output").innerHTML = "";
}
