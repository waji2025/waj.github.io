const form= document.forms["myForm"]
const input = form["taskinput"]
const ul =document.getElementById("tasklist")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log(input.value)
    const val=input.value
    const newLi= document.createElement("li")
    newLi.innerHTML= val + "<i onclick=\"deleteTask(this)\" class=\"fa-solid fa-xmark\" style=\"float:right\"></i>"
    ul.appendChild(newLi)
})
function deleteTask(x){
    console.log("Hello")
    x.parentElement.remove()

}