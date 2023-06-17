const listcontainer=document.getElementById("list-contanier")

function addTask() {
   const box = document.getElementById("boxer");
   if(box.value===''){alert('fil the data')}
 else{
   let li=document.createElement("li")
   li.innerHTML=box.value;
   listcontainer.appendChild(li);
   let sapn = document.createElement('span')
   sapn.innerHTML="\u00d7";
   li.appendChild(sapn);
 }
 box.value='';
 saveData()
  }
  listcontainer.addEventListener("click",function(e){
   if(e.target.tagName==="LI"){e.target.classList.toggle("checked",)
   saveData()}
 
   else if(e.target.tagName==="SPAN"){e.target.parentElement.remove()}
   saveData()
  },false)
  function saveData(){
   localStorage.setItem('data',listcontainer.innerHTML);

  }
  function showData(){
   listcontainer.innerHTML=localStorage.getItem('data');
  }
  showData();


