function sendForm(event, form) {
  event.preventDefault();
  // these IDs from the previous steps
  emailjs.sendForm('contact_service', 'contact_form', form)
      .then(() => {
          console.log('SUCCESS!');
      }, (error) => {
          console.log('FAILED...', error);
      });
}


window.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contact-form");
  var button = document.getElementById("contact-form-button");
  var status = document.getElementById("contact-form-status");

  function success() {
    form.reset();
    button.style = "display: none ";
    status.innerHTML = "Thanks! Contact form is submitted successfully.";
  }

  function error() {
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event
  if (form != null) {
    form.addEventListener("submit", ev => sendForm(ev, form));
  }
});



// // helper function for sending an AJAX request

// function ajax(method, url, data, success, error) {
//   var xhr = new XMLHttpRequest();
//   xhr.open(method, url);
//   xhr.setRequestHeader("Accept", "application/json");
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState !== XMLHttpRequest.DONE) return;
//     if (xhr.status === 200) {
//       success(xhr.response, xhr.responseType);
//     } else {
//       error(xhr.status, xhr.response, xhr.responseType);
//     }
//   };
//   xhr.send(data);
// }
