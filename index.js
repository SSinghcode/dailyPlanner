let timePeriod=["9-AM","10-AM","11-AM","12-PM","1-PM","2-PM","3-PM","4-PM","5-PM",];
//change date format
let currentHour=parseInt(moment().format("H HH"));
let currentDate = moment().format("ddd, MMM Do, YYYY");
 let datex=document.querySelector("#currentDay");
 datex.textContent=currentDate;
// dynamic push of time blocks
for(let i=0;i<timePeriod.length;i++){
  let x= document.querySelector(".container");
  let section= document.createElement("div");
  x.appendChild(section);
  section.classList.add("row");
//   let newColoumn= document.createElement("div");
//   section.appendChild(newColoumn);
//   newColoumn.classList.add("col-2");

  let p =document.createElement("p");
  section.appendChild(p);
  p.classList.add("col-2")
//   newColoumn.appendChild(p);
  p.classList.add("hour");
  p.innerHTML=timePeriod[i];
  let text = document.createElement("TEXTAREA");
  text.classList.add("col-8");
  text.classList.add("text");
  section.appendChild(text);
  let save =document.createElement("button");
  save.classList.add("col-2");
  save.classList.add()
  save.innerHTML='<i class="fas fa-save"></i>';
 save.addEventListener('click',saveButton)
  section.appendChild(save);
 // logic

if(i+9<currentHour)
{
    text.classList.add("past");


}
else if(currentHour===i+9)
{
    text.classList.add("present");


}
else{
    text.classList.add("future");
}
}

//save buttom

function saveButton(event){
console.log(event.target)
let text = event.target.previousElementSibling.value;
let id=event.target.previousElementSibling.previousElementSibling.textContent.split('-')[0];
console.log(id.split('-')[0])
console.log(text,id)
localStorage.setItem(id,text)
}


//use local storage get, use a for loop to put the correct key in the correct textarea using the hour
let textareas=$('.text')

for(let i=0 ; i < textareas.length; i++){

  let timey=localStorage.getItem(textareas[i].previousElementSibling.textContent.split('-')[0]);
  textareas[i].textContent=timey
}