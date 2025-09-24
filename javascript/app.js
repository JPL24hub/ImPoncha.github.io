document.addEventListener("DOMContentLoaded", (event) => {
  const togglebtn = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');

togglebtn.addEventListener('click', function(){
   navigation.classList.toggle('active');
})
});