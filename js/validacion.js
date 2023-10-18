// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        const password1 = document.getElementById('password1');
        const password2 = document.getElementById('password2');
        const lastName = document.getElementById('nombre');
        const name = document.getElementById('apellido');
        if(password1.value.length <6 || password1.value !== password2.value){
            event.preventDefault();
            password1.setCustomValidity('La constrasenas no cumplen con los requisitos');
            password1.classList.add('is-invalid');
        }
        if(lastName.value === ''){
            
        }

  
        form.classList.add('was-validated')
      }, false)
    })
  })()
