// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict';
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation');
    
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        
        const password1 = document.getElementById('password1');
        const password2 = document.getElementById('password2');
        const firstName = document.getElementById('nombre');
        const lastName = document.getElementById('apellido');
        const terms = document.getElementById('terminos');
        const btnTerms = document.getElementById('btnTerms');
        const email = document.getElementById('email');
        
        
        if(password1.value.length < 6){
            event.preventDefault();
            password1.classList.remove('is-valid');
            password1.classList.add('is-invalid');
           
        } else {
            password1.classList.remove('is-invalid');
            password1.classList.add('is-valid');

        }

        if(password1.value !== password2.value || !password1.checkValidity()){
            event.preventDefault();
            password2.classList.remove('is-valid');
            password2.classList.add('is-invalid');
        } else {
            password2.classList.remove('is-invalid');
            password2.classList.add('is-valid');
        }
        
        if(firstName.value === ''){
            event.preventDefault();
            firstName.classList.remove('is-valid');
            firstName.classList.add('is-invalid');
        } else {
            firstName.classList.remove('is-invalid');
            firstName.classList.add('is-valid');
        }
        
        if(lastName.value === ''){
            event.preventDefault();
            lastName.classList.remove('is-valid');
            lastName.classList.add('is-invalid');
        } else {
            lastName.classList.remove('is-invalid');
            lastName.classList.add('is-valid');
        }
        
        if(!terms.checked){
            event.preventDefault();
            terms.classList.remove('is-valid');
            terms.classList.add('is-invalid');
            btnTerms.classList.add('is-invalid');
        } else {
            terms.classList.add('is-valid');
            btnTerms.classList.remove('is-invalid');
        }
        if(email.value === '' && !checkEmail(email)){
            event.preventDefault();
            email.classList.remove('is-valid');
            email.classList.add('is-invalid');
        } else {
            email.classList.remove('is-invalid');
            email.classList.add('is-valid');
        }

        if (password1.value.length >= 6 && password1.value === password2.value && firstName.value !== '' && lastName.value !== '' && terms.checked && email.value !== '' && checkEmail(email)) {
            form.classList.add('was-validated');
            alert("Datos enviados");
        } else {
            alert("Error en los datos");
        }
  
       
      }, false);
    });
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        input.classList.remove('is-invalid');
      });
    });
  })();

  const btnTerms = document.getElementById('btnTerms');
  const terms = document.getElementById('terminos');

  terms.addEventListener("click", (e)=>{ 

    terms.classList.toggle("is-valid");
    btnTerms.classList.toggle("is-valid");

  })
  
   function checkEmail(email){
 if(email.checkValidity()){
     return true
 }else {
     return false
 }
   };