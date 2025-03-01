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

// //header date
// function getFormattedDate() {
//   const today = new Date(); // বর্তমান সময় নিলাম

//   const options = { weekday: "short", month: "short", day: "2-digit", year: "numeric" };
//   const formattedDate = today.toLocaleDateString("en-US", options);

//   return formattedDate.replace(",", ""); // কমা রিমুভ করলাম
// }

// console.log(getFormattedDate()); // আউটপুট: "Wed Jul 28 2025"
