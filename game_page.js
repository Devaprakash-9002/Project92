player_1_name = localStorage.getItem("Player 1");
player_2_name = localStorage.getItem("Player 2");

player_1_score = 0;
player_2_score = 0;

document.getElementById("player1_name").innerHTML = player_1_name + ": ";
document.getElementById("player2_name").innerHTML = player_2_name + ": ";

document.getElementById("player1_score").innerHTML = player_1_score;
document.getElementById("player2_score").innerHTML = player_2_score;

document.getElementById("player_question").innerHTML = "Question Turn = " + player_1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn = " + player_2_name;

function send() {
    number1 = document.getElementById("number1_input").value;
    number2 = document.getElementById("number2_input").value;
    real_answer = parseInt(number1) * parseInt(number2);
    question_word = "<h4 id='word_display'>Q. " + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Answer: <input type = 'text' id = 'input_check_box'>";
    check_button = "<br><br><button class = 'btn btn-info' onclick = 'check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value="";
}

question_turn = player_1_name;
answer_turn = player_2_name;

function check() {
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.value;
    console.log(answer);
    if (answer == real_answer) {
        if(answer_turn = player_1_name) {
            player_1_score = player_1_score + 1;
            document.getElementById("player1_score").innerHTML = player_1_score;
        }
        else{
            player_2_score = player_2_score + 1;
            document.getElementById("player2_score").innerHTML = player_2_score;
        }
    }

        if(question_turn = player_1_name) {
            question_turn = player_2_name;
            document.getElementById("player_question").innerHTML = "Question turn: " + player_2_name;
        }
        else{
            question_turn = player_1_name;
            document.getElementById("player_question").innerHTML = "Question turn: " + player_1_name;
        }
        if(answer_turn = player_1_name) {
            answer_turn = player_2_name;
            document.getElementById("player_answer").innerHTML = "Answer turn: " + player_2_name;
        }
        else{
            answer_turn = player_1_name;
            document.getElementById("player_answer").innerHTML = "Answer turn: " + player_1_name;
        }
        document.getElementById("output").innerHTML = "";
}