document.getElementById('theme-btn')
.addEventListener('click',function(){
  changeColor();
  getRandomColor();
})


  function changeColor() {
    const color = getRandomColor();
    document.body.style.backgroundColor = color;
   
  }

  function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }



  //header date
  function formatDate() {
    const date = new Date();  
  
    const options = {
      weekday: 'short', 
      month: 'short',  
      day: '2-digit',   
      year: 'numeric',  
    };
  
    return date.toLocaleDateString('en-US', options);
  }
  
  const formattedDate = formatDate();
  document.getElementById('date-display').innerText = formattedDate; 
  