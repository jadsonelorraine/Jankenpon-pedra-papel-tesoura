/*contagem de pontos*/
var contUser = 0
var contPc = 0

/*Elementos da aplicação*/
const imgUser = document.getElementById("user")
const imgPc = document.getElementById("pc")
const playing = document.getElementById("playing")
const contador = document.getElementById("contador")
const winner = document.getElementById("winner")
const loser = document.getElementById("loser")

/*Sons*/
const audioWin = new Audio("assets/sounds/winning.wav")
const audioLoser = new Audio("assets/sounds/losing.wav")

/*Variáveis de elementos*/
var player1 = ""
var player2 = ""

playing.addEventListener("click", () => {
    reset()
    playPc()
})

function reset() {
    player1 = document.querySelector('input[name="play"]:checked').value
    imgUser.innerHTML = "<img src='assets/images/" + player1 + ".png'>"
    imgPc.innerHTML = ""
}

function playPc() {
    let opt = ['rock', 'paper', 'scissor'] /*0,1,2*/
    let num = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    player2 = opt[num]
    imgPc.innerHTML = "<img src='assets/images/" + player2 + ".png'>"
    analyze()
}

function analyze() {
    
    playing.disabled = true

    let win = "0"
    /* Quando win for 0 = empate
                      1 = vitória
                      -1 = derrota*/
    if  (player1 == player2) {

    } else if (player1 == "rock"){
        win = player2 == 'scissor' ? 1 : -1
    } else if (player1 == 'paper'){
        win = player2 ==  'rock' ? 1 : -1
    } else if (player1 == 'scissor') {
        win = player2 == 'paper' ? 1 : -1
    }

    if (win == 0){

    } else if (win > 0){
        contUser = contUser + 1 
        audioWin.play()
    } else {
        contPc = contPc + 1
        audioLoser.play()
    }

    contador.innerHTML = contUser +  ":" +  contPc

    if (contUser >= 5){
        winner.classList.remove('nome')
        winner.classList.add('center')
    }

    if (contPc >= 5){
        loser.classList.remove('none')
        loser.classList.add('center')
    }

   setTimeout(()=>{
    playing.disabled = false
    clear();
   },2000)

}

function clear(){
    imgPc.innerHTML=""
    imgUser.innerHTML=""
}

function newGame(){
    contador.innerHTML = "0:0"
    contPc = 0
    contUser = 0
    reset()
    winner.classList.add('none')
    winner.classList.remove('center')
    loser.classList.add('none')
    loser.classList.remove('center')
}
    