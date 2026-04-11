let allpost=document.querySelector(".allpost")
let name=document.querySelector(".name")
let caption=document.querySelector(".caption")
let postbtn=document.querySelector(".postbtn")
let namecaption=document.querySelector(".namecaption")

let arr = []
postbtn.addEventListener("click", ()=>{
if(!name.value){
namecaption.innerHTML="Enter your name"

}else{
    arr.push({
    name:name.value,
    caption:caption.value
})
allpost.innerHTML=""
box()
name.value=""
caption.value=""
}
})
function box(){
    arr.map(item=>{
    allpost.innerHTML +=`<div class="card" style="width: 18rem; ">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.caption}</p>
                    <button type="button" class="btn btn-primary">Edit</button>
                    <button type="button" class="btn btn-danger">Delete</button>
                </div>
            </div>`
})
}
