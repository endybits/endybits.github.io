console.log('Hello!');

// Ejemplo de validación de formulario de contacto
var form = document.querySelector('form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  var name = form.elements.name.value;
  var email = form.elements.email.value;
  var message = form.elements.message.value;
  if (name && email && message) {
    alert('Mensaje enviado exitosamente!');
    form.reset();
  } else {
    alert('Por favor, llena todos los campos del formulario.');
  }
});

// Obtener todos los elementos de la lista de navegación
var navLinks = document.querySelectorAll('nav a');

// Agregar un evento click a cada elemento de la lista
navLinks.forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    var targetId = this.getAttribute('href');
    var target = document.querySelector(targetId);
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});

/*
// Obtener los datos del formulario
var form = document.getElementById('contact');

// Agregar un evento submit al formulario
form.addEventListener('submit', function (event) {
  event.preventDefault();
  // Obtener los valores de los campos del formulario
  var data = new FormData(form);

  // Enviar la petición HTTP POST a Formspree
  axios
    .post('https://formspree.io/f/mrgvbrpj', data)
    .then(function (response) {
      // Mostrar un mensaje de éxito
      console.log('Correo enviado con éxito');
    })
    .catch(function (error) {
      // Mostrar un mensaje de error
      console.log('Error al enviar correo: ' + error);
    });
});
*/
