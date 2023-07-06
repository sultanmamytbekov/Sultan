
const input = document.querySelector('input')
const btn = document.querySelector('.lol')
const ul = document.querySelector('.ul')

btn.addEventListener('click',() => {
    if (input.value.length !== 0){
        ul.innerHTML += `<li class="list-group-item mt-2 rounded-2">${input.value}</li>`
    }
    input.innerHTML = ''
})