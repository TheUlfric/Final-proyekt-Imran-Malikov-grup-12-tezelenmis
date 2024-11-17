let Computer = JSON.parse(localStorage.getItem("Computer")) || []


let cards = document.querySelector(".cards")

let user = JSON.parse(localStorage.getItem("user"))

let modal1 = new bootstrap.Modal(document.querySelector(".modal1"))


let ul = document.querySelector("ul")

let modalBody = document.querySelector(".modal-body")

let spinerparent = document.querySelector(".spiner-parent")


displayCom(Computer)

function displayCom(newCom) {


  if (Computer.length == 0) {
    cards.innerHTML = "Saytda Computer Paylasilmayib"
  }
  else {
    cards.innerHTML = ""

    newCom.forEach(Com => {
      cards.innerHTML += `
  <div class="col-4 parent">
  
  <div class="card " style="width: 18rem;">
        <img src="${Com.sekil}" class="card-img-top" alt="...">
        
        <div class="card-body">
        <p class="card-title"> Id:${Com.id}</p>
          <p class="card-title"> Ad:${Com.Ad}</p>
          <p class="card-text"> Tesvir:${Com.Tesvir}</p>
          <p class="card-text">Qiymet:${Com.Qiymet}</p>
          <p class="card-text">Yeni:${Com.Yeni}</p>
          <p class="card-text">Telefon:${user.Telefon}</p>
          <button class="btn btn-primary"onclick="openModal(${Com.id})">Sebete</button>
        </div>
      </div>
  
  </div>
    `

    });

  }


}

function openModal(comId) {
  modal1.show()

  let findedCom = Computer.find(function (com) {
    return com.id == comId
  })
  let element = `
<div class="modal-left">
<img class="Img" src="${findedCom.sekil}" alt="">
          </div>
          <div class="modal-right">
            <ul class="list-group">
                <li class="list-group-item">Id:${findedCom.id}</li>
                <li class="list-group-item">Ad:${findedCom.Ad}</li>
                <li class="list-group-item">Tesvir:${findedCom.Tesvir}</li>
                <li class="list-group-item">Qiymet:${findedCom.Qiymet}</li>
                <li class="list-group-item">Telefon:${user.Telefon}</li>
                <li class="list-group-item">Yeni:${findedCom.Yeni}</li>
                <li class="list-group-item">EmeliYadas:${findedCom.EmeliYadas}</li>
                <li class="list-group-item">Cpu:${findedCom.Prosesor}</li> 
                <li class="list-group-item">DaimiYadas:${findedCom.DaimiYadas}</li>
                 <li class="list-group-item">DaimiYadasTipi:${findedCom.DaimiYadasTipi}</li>
                <li class="list-group-item">EmeliyatSistemi:${findedCom.EmeliyatSistemi}</li>
                <li class="list-group-item">VideoKart:${findedCom.VideoCart}</li>
              </ul>
          </div>`
  modalBody.innerHTML = element
}
let items = document.querySelectorAll(".list-group-item")


items.forEach(function (e) {
  e.addEventListener("click", function (item) {

    items.forEach(function (k) {
      k.classList.remove("active")
    })
    item.target.classList.add("active")

    let spiner = `<div class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden"></span>
    </div>
  </div>`
          spinerparent += spiner

    if (Computer.length == 0) {
      cards.innerHTML = "Saytda Computer Paylasilmayib"
    }
    else {
      if (item.target.innerHTML == "Hamisi") {
        displayCom(Computer)
      }
      else {

  



        setTimeout(()=>{

   spinerparent=""



          let filteredCom = Computer.filter(function (com) {
            return com.Kategoriya.toLowerCase() == item.target.innerHTML.toLowerCase()
          })
          if (filteredCom.length == 0) {
            cards.innerHTML = `<h1 style="text-aling:center;">${item.target.innerHTML} Kategoriyasinda Computer yoxdur</h1>`
          }
          else {
            displayCom(filteredCom)
          }
        },1000)
        
      }
    }







  })
})


let search = document.querySelector(".search")

search.addEventListener("input", function (e) {

  let filteredCom = Computer.filter(function (com) {
    return com.Ad.toLowerCase().includes(e.target.value.toLowerCase()) || com.Kategoriya.toLowerCase().includes(e.target.value.toLowerCase())
  })
  console.log(filteredCom);
  displayCom(filteredCom)

})























