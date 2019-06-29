let root = document.getElementById('root')

let h1 = document.createElement('h1')

h1.innerHTML = 'My favorite color is <span>hot pink</span>'

root.appendChild( h1 )

let span = document.querySelector('h1 span')
span.style.color = 'hotpink'

let colors = [ 'blue', 'red', 'green', 'hotpink' ]

// creating box
let box = document.createElement('div')
box.style.border = '4px dashed limegreen'
box.style.height = '200px'
box.style.width = '200px'
box.style.backgroundColor = 'hotpink'
root.appendChild( box )
//  add event listeners
box.addEventListener('mouseenter', function() {
  this.style.cursor = 'pointer'
})

// changing color
const changeColor = () => {
 let colors = [ 'blue', 'red', 'green', 'hotpink' ]
 let options = colors.filter( el => el !== box.style.backgroundColor )
 let newColor = options[ Math.floor( Math.random() * options.length) ]
box.style.backgroundColor = newColor
span.style.color = newColor
span.innerText = newColor
}



// select action
let select = document.querySelector( 'select' )
let currentAction = select.value
select.addEventListener( 'change', (ev) => {
  currentAction = ev.target.value
  console.log( currentAction )
})

const changeShape = () => {
  console.log("Shapeshifting! 🍺")
}


box.addEventListener( 'click', 
  currentAction === "color" ? changeColor : changeShape)

