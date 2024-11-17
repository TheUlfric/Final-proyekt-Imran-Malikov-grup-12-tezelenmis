
// Example starter JavaScript for disabling form submissions if there are invalid fields
((e) => {
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






let form = document.querySelector("form")

let username = document.querySelector("#validationCustom01")

let password = document.querySelector("#validationCustom02")

let Error1=new bootstrap.Modal(document.querySelector(".Error"))

let users = JSON.parse(localStorage.getItem("users")) || []

let user=JSON.parse(localStorage.getItem("user"))

console.log(user);

console.log(users);

let isdifade = new bootstrap.Modal(document.querySelector(".isdifade"))

form.addEventListener("submit", (e) => {
    e.preventDefault()
    
    let user = users.find((item) => {
        return item.username == username.value && item.password == password.value
    })
    console.log(user);

    if(user){
        localStorage.setItem("user",JSON.stringify(user))
        isdifade.show()
        location.href="../EsasHisse/Esas.html"
    }
    else{
    Error1.show()
    }
    
})

