
const getTaskNum = document.getElementById('task-num');
const headerNum = document.getElementById('header-num')


document.getElementById('completed-btn')
.addEventListener("click",function(){
   alert("Board completed successfully");
  let taskNum = parseInt(getTaskNum.innerText);
  getTaskNum.innerText = taskNum - 1;

  let headerNumChange = parseInt(headerNum.innerText);
  headerNum.innerText = headerNumChange + 1;

})







