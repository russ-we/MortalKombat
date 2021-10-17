const $arenas = document.querySelector('.arenas')
const $randomButton = document.querySelector('.button')


const player1 = {
    player: 1,
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['knife', 'gun'],
    attack: function() {
        console.log(player1['name'] + ' Fight...')
    }
}

const player2 = {
    player: 2,
    name: 'Sub-Zero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['knife', 'gun'],
    attack: function() {
        console.log(player1['name'] + ' Fight...')
    }
}

function createElement(tag, className) {
    const $tag = document.createElement(tag)
    if (className) {
        $tag.classList.add(className)
    }

    $tag.classList.add(className)
    
    return $tag
}


function createPlayer(playerObj) {
    
    const $player = createElement('div', 'player' + playerObj.player)
    const $progressbar = createElement('div', 'progressbar')
    const $character = createElement('div', 'character')
    const $life = createElement('div', 'life')
    const $name = createElement('div', 'name')
    const $img = createElement('img')

    $name.innerText = playerObj.name 
    $life.style.width = playerObj.hp + '%'
    $img.src = playerObj.img
    $player.appendChild($progressbar)
    $player.appendChild($character)
    $progressbar.appendChild($life)
    $progressbar.appendChild($name)
    $character.appendChild($img)

    return $player
}

function changeHP(player) {
    const $playerLife = document.querySelector('.player'+player.player+' .life')
    player.hp -= Math.ceil(Math.random() * 20)
    

    if (player1.hp <= 0) {
        $arenas.appendChild(playerWins(player2.name))   
        $randomButton.disabled = true
        player1.hp = 0 
    } else if (player2.hp <= 0) {
        $arenas.appendChild(playerWins(player1.name))   
        $randomButton.disabled = true
        player2.hp = 0 
    } else if (player1.hp && player2.hp == 0) {
        $arenas.appendChild(noWins()) 
    }

    
    
    
     $playerLife.style.width = player.hp + '%'
    console.log('у игрока '+player.name+' осталось '+player.hp+' HP')
}

function playerWins(name) {
    const $winsTitle = createElement('div', 'winsTitle')
    $winsTitle.innerText = name + ' wins'
    return $winsTitle
}

function noWins(name) {
    const $noWinsTitle = createElement('div', 'winsTitle')
    $noWinsTitle.innerText = 'no wins'
    return $noWinsTitle
}

$randomButton.addEventListener('click', function() {
    changeHP(player1)
    changeHP(player2)
})

$arenas.appendChild(createPlayer(player1))
$arenas.appendChild(createPlayer(player2))
