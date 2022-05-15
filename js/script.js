const $container = document.querySelector('.gridContainer')

const $menu = document.querySelector('.menu')
const $burgerContainer = document.querySelector('.burgerContainer')


const $top = document.querySelector('#top')                     
const $center = document.querySelector('#center')
const $bottom = document.querySelector('#bottom')

window.addEventListener('click', () => {
  e.target.addEventListener
})


$burgerContainer.addEventListener('click', (e) => {
  // let isValidate = e.target.classList.contains('openBurger')
  // console.log(isValidate);
  toggleMenu()
})

function toggleMenu() {
  $burgerContainer.classList.toggle('openBurger')
  $bottom.classList.toggle('openBurger')
  $center.classList.toggle('openBurger')
  $top.classList.toggle('openBurger')
  $top.classList.toggle('trans2')
  $center.classList.toggle('trans2')
  $bottom.classList.toggle('trans1')

  $menu.classList.toggle('openMenu')

}



const imgs = [
  'https://zolla.com/upload/iblock/4c0/rl3dfgyqx5swm9o48djq0gcavkjtlhzt.jpg',
  'https://zolla.com/upload/iblock/ad2/7pd0grstri89ozbh3b9vtr988a4fyzxp.jpg',
  'https://zolla.com/upload/iblock/85a/cseg3z5nxaw9s04s8nhe5q30wdmpwiop.jpg',
  'https://zolla.com/upload/iblock/6b8/2nmi53cwxhuyscci60baiar43zh1vo0x.jpg',
]



// window.addEventListener('DOMContentLoaded', () => {

//   const newCards = imgs.map((img, id) => cardTemplate(img, id)).join('')
//   $container.innerHTML = newCards
// })





function cardTemplate(img, id) {
  return `
  <div class="cards" onmouseover="actionProduct(${id})" onmouseout="actionProduct(${id})">
    <div class="cardImg">
      <img class="productImg" src="${img}" alt="">
    </div>
      
    <div class="more">
      <h4>Shop Pants</h4>
      <img class="arrow" src="https://cdn-icons-png.flaticon.com/512/545/545682.png" alt="">
    </div>
  </div>
  `
}


const $arrow = document.querySelectorAll('.arrow')
const $productImg = document.querySelectorAll('.productImg')


function actionProduct(id) {

  $arrow[id].classList.toggle('arrowAct')
  $productImg[id].classList.toggle('imgAct')
}







// $arrow.addEventListener('mouseover', () => {



//   actionProduct(id)
//   console.log(1)
  
  
// })

// $arrow.addEventListener('mouseout', () => {
//   if($arrow.classList.contains('arrow')) {
//     actionProduct()
//     console.log(2);
//   }
// })


// $productImg.addEventListener('mouseover', () => {
//   actionProduct()
// })


// $productImg.addEventListener('mouseout', () => {
//   actionProduct()
// })


