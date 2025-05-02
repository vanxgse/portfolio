document.addEventListener("DOMContentLoaded", function() {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var asuntoInput = document.getElementById("asunto");
    var mensajeInput = document.getElementById("mensaje");
    var submitBtn = document.getElementById("submit-btn");

    nameInput.addEventListener("input", validateFields);
    emailInput.addEventListener("input", validateFields);
    asuntoInput.addEventListener("input", validateFields);
    mensajeInput.addEventListener("input", validateFields);

    function validateFields() {
        var nameValue = nameInput.value.trim();
        var emailValue = emailInput.value.trim();
        var asuntoValue = asuntoInput.value.trim();
        var mensajeValue = mensajeInput.value.trim();
        var nombreError = document.getElementById("nombre-error");
        var emailError = document.getElementById("email-error");
        var asuntoError = document.getElementById("asunto-error");
        var mensajeError = document.getElementById("mensaje-error");
        
        if (nameValue === "") {
            nombreError.textContent = "El campo Nombre no puede estar vacío.";
            submitBtn.disabled = true;
            return false;
        } else {
            nombreError.textContent = "";
        }

        if (emailValue === "") {
            emailError.textContent = "El campo Correo electrónico no puede estar vacío.";
            submitBtn.disabled = true;
            return false;
        } else if (!validateEmail(emailValue)) {
            emailError.textContent = "El correo electrónico no está en un formato válido.";
            submitBtn.disabled = true;
            return false;
        } else {
            emailError.textContent = "";
        }

        if (asuntoValue === "") {
            asuntoError.textContent = "El campo Asunto no puede estar vacío.";
            submitBtn.disabled = true;
            return false;
        } else if (asuntoValue.length > 50) {
            asuntoError.textContent = "El asunto no puede tener más de 50 caracteres.";
            submitBtn.disabled = true;
            return false;
        } else {
            asuntoError.textContent = "";
        }

        if (mensajeValue === "") {
            mensajeError.textContent = "El campo Mensaje no puede estar vacío.";
            submitBtn.disabled = true;
            return false;
        } else if (mensajeValue.length < 300) {
            mensajeError.textContent = "El mensaje debe tener más de 300 caracteres.";
            submitBtn.disabled = true;
            return false;
        } else {
            mensajeError.textContent = "";
        }

        submitBtn.disabled = false;
        return true;
    }

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    submitBtn.addEventListener("click", function(event) {
        event.preventDefault();
        if (validateForm()) {
            var name = encodeURIComponent(document.getElementById("name").value);
            var email = encodeURIComponent(document.getElementById("email").value);
            var asunto = encodeURIComponent(document.getElementById("asunto").value);
            var mensaje = encodeURIComponent(document.getElementById("mensaje").value);
        
            var mailtoLink = "mailto:ivanugs@icloud.com" +
                            "?subject=" + asunto +
                            "&body=" + mensaje + "%0A%0A" +
                            "Nombre: " + name + "%0A" +
                            "Correo electrónico: " + email;
            window.location.href = mailtoLink;
        }
    });
});
