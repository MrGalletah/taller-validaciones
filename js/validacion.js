// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

const pwd1 = document.getElementById("password1");
const pwd2 = document.getElementById("password2");
const submit = document.getElementById("submit");

// function checkPwd(pw1, pw2) {
//   return pw1 === pw2;
// }

submit.addEventListener("click", (e)=>{
    
    if ( document.getElementById("password1").value != document.getElementById("password2").value ) {
        e.preventDefault()
        pwd1.setCustomValidity('Password Must be Matching.');
        pwd2.setCustomValidity('Password Must be Matching.');
        e.stopPropagation();
    } else {
        // input is valid -- reset the error message
        pwd1.setCustomValidity('');
        pwd2.setCustomValidity('');

        e.stopPropagation()
    }
        
})
