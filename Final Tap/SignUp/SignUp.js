

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

            form.classList.add('was-validated')
        }, false)
    })
})()



let Ad = document.querySelector("#validationCustom01")

let Telefon = document.querySelector("#validationCustom02")

let username = document.querySelector("#validationCustom03")

let password = document.querySelector("#validationCustom04")

let submit = document.querySelector(".submit")

let esas = document.querySelector(".Esas")

let users = JSON.parse(localStorage.getItem("users")) || []

let form = document.querySelector("form")

let Error1 = new bootstrap.Modal(document.querySelector(".Error"))

let istifade = new bootstrap.Modal(document.querySelector(".istifade"))

form.addEventListener("submit", (e) => {
    e.preventDefault()

    if (form.checkValidity()) {
        let checkUser = users.some(function (e) {
            return e.username == username.value
        })
        console.log(checkUser);
        if (checkUser) {
            Error1.show()
        }
        else{
            let user = {
                Ad: Ad.value,
                Telefon: Telefon.value,
                username: username.value,
                password: password.value
            }
            users.push(user)
            localStorage.setItem("users", JSON.stringify(users))
            setTimeout(() => {
                alert("Ugurla gonderildi")
            }, 1000);
        }
        
    }

    else {
        istifade.show()
    }

})




















