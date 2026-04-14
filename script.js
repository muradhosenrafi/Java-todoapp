let allpost=document.querySelector(".allpost")
let name=document.querySelector(".name")
let caption=document.querySelector(".caption")
let postbtn=document.querySelector(".postbtn")
let namecaption=document.querySelector(".namecaption")
let updatbtn=document.querySelector(".updatbtn")
let arr = []
let teStor;

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

updatbtn.addEventListener("click",()=>{
    arr[teStor].name=name.value
    arr[teStor].caption=caption.value
 allpost.innerHTML=""
    box()
    updatbtn.style.display="none"
postbtn.style.display="block"

name.value=""
caption.value=""

})


function box(){
    arr.map(item=>{
allpost.innerHTML +=`<div class="card">
  <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <small style="color:gray;">Just now</small>
    <p class="card-text">${item.caption}</p>
    <button class="editbtn">Edit</button>
    <button class="deletebtn">Delete</button>
  </div>
</div>`
})

let deletebtn=document.querySelectorAll(".deletebtn")
let convartdeletbtn=Array.from(deletebtn)
convartdeletbtn.map((item,index) =>{
    item.addEventListener("click",()=>{
    //    console.log(index);
       
        arr.splice(index,1)
 allpost.innerHTML=""
        box()
    })
})

let editbtn=document.querySelectorAll(".editbtn")
let convarteditbtn=Array.from(editbtn)
convarteditbtn.map((item,index)=>{
item.addEventListener("click",()=>{

name.value=arr[index].name
caption.value=arr[index].caption

teStor=index

updatbtn.style.display="block"
postbtn.style.display="none"
})
})

}
