/* ---------------- */
// VARIABLES GLOBALES
  const passwordInput1 = document.getElementById('password1');
  const passwordInput2 = document.getElementById('password2');
  const toggleButton = document.getElementById('togglePassword');



// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
      const forms = document.querySelectorAll('.needs-validation')
     Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

// SHOW AND HIDE PASSWORD BUTTON
  function togglePasswordVisibility() {
      
    if (passwordInput1.type === 'password') {
      passwordInput1.type = 'text';
      passwordInput2.type = 'text';
      toggleButton.textContent = 'Ocultar contraseñas';
    } else {
      passwordInput1.type = 'password';
      passwordInput2.type = 'password';
      toggleButton.textContent = 'Mostrar contraseñas';
    }
  }
  
  toggleButton.addEventListener('click', togglePasswordVisibility);