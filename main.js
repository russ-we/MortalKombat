const $arenas = document.querySelector('.arenas')
const $randomButton = document.querySelector('.button')


const player1 = {
    player: 1,
    name: 'Scorpion',
    hp: 90,
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
    player.hp -= 20
    $playerLife.style.width = player.hp + '%'

    if (player.hp <= 0 ) {
        $arenas.appendChild(playerLose(player.name))
        player.hp = 0
        $randomButton.remove()
    }
    console.log(player.hp)
}

function playerLose(name) {
    const $loseTitle = createElement('div', 'loseTitle')
    $loseTitle.innerText = name + ' lose'
    return $loseTitle
}

$randomButton.addEventListener('click', function() {
    changeHP(player1)
    changeHP(player2)
})

$arenas.appendChild(createPlayer(player1))
$arenas.appendChild(createPlayer(player2))
