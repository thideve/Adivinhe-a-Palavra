function addUser()
 {
   player1Name = document.getElementById("player1NameInput").value;
   //obter os valores de entrada nas caixas de texto
    player2Name = document.getElementById("player2NameInput").value;
     localStorage.setItem("player1Name", player1Name);
      localStorage.setItem("player2Name", player2Name);
       window.location = "game_page.html"; //redirecionando 
      }