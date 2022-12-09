document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form =document.querySelector('form')
  form.addEventListener('submit', (e) =>{
   e.preventDefault()
  handleToDo(e.target.querySelector('#new-task-description').value)
   })
});

function handleToDo(todo){
  let p = document.createElement('p')
  let btn= document.createElement('button')
  btn.addEventListener('click', deleteBtn)
  btn.textContent= 'x'
  p.textContent= `${todo} `
  p.appendChild(btn)
  
  document.querySelector('#tasks').appendChild(p)

}

function deleteBtn(e){
e.target.parentNode.remove()
}