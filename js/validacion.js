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
        
        if(password1.value.length < 6 || password1.value !== password2.value){
            event.preventDefault();
            password1.classList.add('is-invalid');
        } else {
            password1.classList.remove('is-invalid');
        }
        
        if(firstName.value === ''){
            event.preventDefault();
            firstName.classList.add('is-invalid');
        } else {
            firstName.classList.remove('is-invalid');
        }
        
        if(lastName.value === ''){
            event.preventDefault();
            lastName.classList.add('is-invalid');
        } else {
            lastName.classList.remove('is-invalid');
        }
        
        if(!terms.checked){
            event.preventDefault();
            terms.classList.add('is-invalid');
        } else {
            terms.classList.remove('is-invalid');
        }
  
        form.classList.add('was-validated');
      }, false);
    });
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        input.setCustomValidity('');
        input.classList.remove('is-invalid');
      });
    });
  })();
  