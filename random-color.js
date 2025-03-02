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
    const date = new Date();  // Get the current date
  
    const options = {
      weekday: 'short', // "Wed"
      month: 'short',   // "Jul"
      day: '2-digit',   // "28"
      year: 'numeric',  // "2025"
    };
  
    return date.toLocaleDateString('en-US', options); // Format the date using the specified options
  }
  
  const formattedDate = formatDate();
  document.getElementById('date-display').innerText = formattedDate; // Set the formatted date in the p tag
  