const form = document.querySelector(".form");
const inputEmail = document.querySelector(".form .email");

form.addEventListener("submit", (e)=>{
  e.preventDefault();
  const emailValue = inputEmail.value;
  if (validateEmail(emailValue)){
    form.classList.remove("error");
    alert("Email Succesfully submitted");
  }else{
    form.classList.add("error");
  }
})

function validateEmail(email){
  var re =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return re.test(String(email).toLowerCase());
}
