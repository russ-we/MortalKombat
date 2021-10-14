const player1 = {
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['knife', 'gun'],
    attack: function() {
        console.log(player1['name'] + ' Fight...')
    }
}

const player2 = {
    name: 'Sub-Zero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['knife', 'gun'],
    attack: function() {
        console.log(player1['name'] + ' Fight...')
    }
}

player1.attack()

function createPlayer(player, obj) {
    const $arenas = document.querySelector('.arenas')
    const $player1 = document.createElement('div')
    $player1.classList.add(player)
    const $progressbar = document.createElement('div')
    $progressbar.classList.add('progressbar')
    const $character = document.createElement('div')
    $character.classList.add('character')
    $player1.appendChild($progressbar)
    $player1.appendChild($character)
    const $life = document.createElement('div')
    $life.classList.add('life')
    $life.style.width = obj.hp
    const $name = document.createElement('div')
    $name.classList.add('name')
    $name.innerText = obj.name
    const $img = document.createElement('img')
    $img.classList.add('img')
    $img.src = obj.img
    $progressbar.appendChild($life)
    $progressbar.appendChild($name)
    $character.appendChild($img)
    $arenas.appendChild($player1)
}

createPlayer('player1', player1)
createPlayer('player2', player2)