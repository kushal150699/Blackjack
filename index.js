player={
    name:"Per"
}

messageEl = document.getElementById('message-el')
cardsEl = document.getElementById('cards-el')
sumEl = document.getElementById('sum-el')
playerEL = document.getElementById('player-el')

let message = ""
let cards = []
let isAlive = false
let sum = 0
let chips = 0

function getRandomCard(){
    let card = Math.floor(Math.random()*13)+1
    if(card>10){
        return 10
    }
    else if(card===1){
        return 11
    }else{
        return card
    }
}
 
function startGame(){
    isAlive=true
    hasBlackJack = false
    chips = 0
    playerEL.textContent = player.name +": $" + chips 
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards=[firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame() 
}

function renderGame(){
    cardsEl.textContent = "cards: "
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent +=cards[i] + " " 
    }   
    
    sumEl.textContent = "Sum: " + sum
  
    if(sum<=20){
        message="Draw a new card"    
        messageEl.textContent = message
    }
    else if(sum===21){
        message="You've got Blackjack"
        messageEl.textContent = message
        hasBlackJack = true
        chips = 100
        playerEL.textContent = player.name +": $" + chips 
    }
    else{
        message="You're out of the game"
        messageEl.textContent = message
        isAlive = false
    } 
}

function newCard(){
    if(isAlive===true && hasBlackJack===false){
        let card = getRandomCard()
        sum = sum+card
        cards.push(card)
        renderGame()
    }
}

