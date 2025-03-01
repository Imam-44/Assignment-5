
const getTaskNum = document.getElementById('task-num');
const headerNum = document.getElementById('header-num')
;

document.getElementById('completed-btn')
.addEventListener("click",function(){
   alert("Board completed successfully");
  let taskNum = parseInt(getTaskNum.innerText);
  getTaskNum.innerText = taskNum - 1;

  let headerNumChange = parseInt(headerNum.innerText);
  headerNum.innerText = headerNumChange + 1;

  const para = document.createElement('p');
   para.id = "para-id";

  document.getElementById("sidebar").appendChild(para);
  showMassageWithTime();

})

// click event show massage

function showMassageWithTime(){
  const real = new Date();
  const hours = real.getHours();
  const minutes = real.getMinutes();
  const second = real.getSeconds();

  const showMassage = hours + ":" + minutes + ":" + second;
  document.getElementById("para-id").innerText = "You have Complete The Task Add Dark Mode at" + showMassage;
  
}






