class Card{
    constructor(nome, lifePoints, attack) {
        this.nome = nome;
        this.lifePoints = lifePoints;
        this.attack = attack;
      }
    
    hability1(){
        console.log(this.lifePoints)
    }

    hability2(){
        console.log(this.attack)
    }
}

let poolOfMana = {
    branco: 0,
    preto: 2,
    verde: 3,
    vermelho: 0,
    azul: 0,
    cinza: 0
}

console.log('Mana pool:', poolOfMana)

let card1 = new Card('Dirps, o grande mago', 14, 1)
card1.hability1 = function() {
    let custo = {
        branco: 0,
        preto: 1,
        verde: 1,
        vermelho: 0,
        azul: 0,
        cinza: 0
    }
    if(verificaSePodeHabilidade(poolOfMana, custo)){
        console.log('Habilidade usada')
        removeCostFromPool(poolOfMana, custo)
    }else {
        console.log('Sem mana')
    }
    console.log(poolOfMana)
}

function chooseCard1() {
    /* Access image by id and change 
    the display property to block*/
    document.getElementById('card1')
        .style.display = "block";
    document.getElementById('btn-choose-card-1')
        .style.display = "none";
    
    bindFunctionToButton('card1', card1)

}

let card2 = new Card('Adrobervinzley', 10, 2)

function chooseCard2() {
    document.getElementById('card2')
        .style.display = "block";
    document.getElementById('btn-choose-card-2')
        .style.display = "none";
    
    bindFunctionToButton('card2', card2)

}

function bindFunctionToButton(cardID, card){

    let habButton1 = document.getElementById(cardID+'-hab1')
    let habButton2 = document.getElementById(cardID+'-hab2')

    habButton1.addEventListener('click', function(evento){
        evento.preventDefault()
        card.hability1()
    })
    habButton2.addEventListener('click', function(evento){
        evento.preventDefault()
        card.hability2()
    })
}

function removeCostFromPool(pool, cost){
    Object.keys(pool).forEach(key => {
        pool[key] -= cost[key]
    });
}

function verificaSePodeHabilidade(pool, cost){
    let podeUsar = true
    Object.keys(pool).forEach(key => {
        if (cost[key]>pool[key]){
            podeUsar = false
        }
    });
    return podeUsar
}

