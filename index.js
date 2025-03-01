
const getTaskNum = document.getElementById('task-num');
const headerNum = document.getElementById('header-num');

const cards = document.getElementsByClassName("cards");

for(let i = 0; i < cards.length; i++){
cards[i].addEventListener("click",function(){
   alert("Board completed successfully");

  let taskNum = parseInt(getTaskNum.innerText);
  getTaskNum.innerText = taskNum - 1;

  let headerNumChange = parseInt(headerNum.innerText);
  headerNum.innerText = headerNumChange + 1;

  const para = document.createElement('p');
    para.id = "para-id";
   para.classList.add('massage-style')
      // Find the closest card and get its title
      const card = this.closest(".card");
      const cardTitle = card.querySelector(".card-title").innerText;

   showMassageWithTime(para, cardTitle);


  document.getElementById("sidebar").appendChild(para);

  disabledFunction(this);
  allDisabled();
});
}
// click event show massage

function showMassageWithTime(para,cardTitle){
  const real = new Date();

  let hours = (real.getUTCHours() + 6) % 24;
  const minutes = real.getUTCMinutes().toString().padStart(2, '0');
  const second = real.getUTCSeconds().toString().padStart(2, '0');

  //am or pm
  let ampm;
  if(hours >= 12){
    ampm = "PM";
  }else {
    ampm = 'AM';
  }
 hours = hours % 12 || 12;


 



  const showMassage = hours + ":" + minutes + ":" + second + " " +ampm;
  para.innerText = `You have Complete The Task  ${cardTitle} ${showMassage} `;
}


//btn disabled


function disabledFunction(button){
  button.disabled = true;
  button.style.backgroundColor = 'gray';
  button.style.cursor = 'not-allowed'
}
  
function allDisabled(){
  const allButtons = document.querySelectorAll(".cards");
  
  let allDisabled = true;
 for(let i = 0; i < allButtons.length; i++){
  if(!allButtons[i].disabled){
    allDisabled = false;
    break;
  }
 }

  if(allDisabled){
    alert('you have compleated all task');
  }else{
    console.log("object");
  }
}


// clear button
document.getElementById('clear-btn').addEventListener('click', function() {
  const messages = document.querySelectorAll('#sidebar .massage-style');
 messages.forEach(function(message) {
    message.remove();
  });
});






