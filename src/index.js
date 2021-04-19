
import png from '../images/screen.png'
import svg from '../images/coffee-cup.svg'
import './styles/main.sass'
// создание свойства класса без конструктора
class Game {
    name = 'Violin Charades'
}
const myGame = new Game()

const div = document.createElement('div')
div.classList.add('container')
div.textContent = 'Loremsadsdasdasa'

// создаем параграф
const p = document.createElement('p')
p.textContent = `I like ${myGame.name}.`

// создаем элемент заголовка
const heading = document.createElement('h1')
heading.textContent = 'Как интересно!'

// добавляем параграф и заголовок в DOM
const root = document.querySelector('#root')
root.append(heading, p, div)