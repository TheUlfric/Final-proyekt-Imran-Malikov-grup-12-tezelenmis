

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })



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



///create///
let Kategoriya = document.querySelector("#Kategoriya")
console.log(Kategoriya.value);


let Ad = document.querySelector("#Ad")

let Qiymet = document.querySelector("#Qiymet")

let Tesvir = document.querySelector("#Tesvir")

let Yeni = document.querySelector("#Yeni")

let Sekil = document.querySelector("#Sekil")

let EmeliYadas = document.querySelector("#EmeliYadas")

let Prosesor = document.querySelector("#Prosesor")

let DaimiYadas = document.querySelector("#DaimiYadas")

let DaimiYadasTipi = document.querySelector("#DaimiYadasTipi")

let EmeliyatSistemi = document.querySelector("#EmeliyatSistemi")

let VideoCart = document.querySelector("#VideoCart")

let form = document.querySelector("form")

let table = new DataTable('.table');

let Computer = JSON.parse(localStorage.getItem("Computer")) || []

console.log(Computer);


const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

let istifade = new bootstrap.Modal(document.querySelector(".istifade"))



///edit////


function generateId() {
  return Computer[Computer.length - 1]?.id + 1 || 1
}

form.addEventListener("submit", (e) => {
  if (form.checkValidity()) {
    let computer = {
      id: generateId(),
      Kategoriya: Kategoriya.value,
      Ad: Ad.value,
      Qiymet: Qiymet.value,
      Tesvir: Tesvir.value,
      Yeni: Yeni.value,
      sekil: Sekil.value,
      EmeliYadas: EmeliYadas.value,
      Prosesor: Prosesor.value,
      DaimiYadas: DaimiYadas.value,
      DaimiYadasTipi: DaimiYadasTipi.value,
      EmeliyatSistemi: EmeliyatSistemi.value,
      VideoCart: VideoCart.value
    }

    Computer.push(computer)

    console.log(computer);
    

    localStorage.setItem("Computer", JSON.stringify(Computer))

    if (id.value && Kategoriya.value && Ad.value && Qiymet.value && Yeni.value && Sekil.value && EmeliYadas.value && Prosesor.value && DaimiYadas.value && DaimiYadasTipi.value && EmeliyatSistemi.value && VideoCart.value) {
      table.row.add([
       id.value, Kategoriya.value, Ad.value, Qiymet.value, Tesvir.value, Yeni.value, `<img class="Img" src="${computer.sekil}">`, EmeliYadas.value, Prosesor.value, DaimiYadas.value, DaimiYadasTipi.value, EmeliyatSistemi.value, VideoCart.value
          ` <button onclick="removeCom(${computer.id})" class="btn btn-danger">Sil</button>
         <button onclick="editCom(${computer.id})" class="btn btn-primary">Redakte</button>`

      ]).draw();
    }

    else {
      istifade.show()

      
    }
    
    
  }
  

})


function displayCom() {


  Computer.forEach(function (com) {
    console.log(com);
    

    
      table.row.add([
       com.id,  com.Ad,`<img class="Img" onclick="modalImg()"  src="${com.sekil}">`, com.Qiymet,
          ` <button onclick="removeCom(${com.id})" class="btn btn-danger">Sil</button>
         <button onclick="editCom(${com.id})" class="btn btn-primary">Redakte</button>`

      ]).draw();
    
    console.log(com);
  })


}

displayCom()

let modal = new bootstrap.Modal(document.querySelector(".Modal"))

let ImgModal=document.querySelector(".Img")

let modalbody=document.querySelector(".modal-body")

function modalImg() {
  ImgModal.addEventListener("click",()=>{
    Computer.forEach(function (img) {
      modal.show()
      let element=`<img src="${img.sekil}">`
      modalbody+=element
    })
    })
}
modalImg()


let ImgParent = document.querySelector(".img-parent")

Sekil.addEventListener("input", (e) => {
  if (e.target.value == "") {
    ImgParent.innerHTML = ""
  }
  else {
    ImgParent.innerHTML = ` <img class="checkImg" style="width: 100px;height: 100px;border-radius: 12px;" src="${e.target.value}" alt="sekil sefdir">`
  }
})


function removeCom(ComId) {
  Computer = Computer.filter(function (com) {
    return com.id != ComId
  })
  localStorage.setItem("Computer", JSON.stringify(Computer))
  alert("silmek isteyirsiz mi")
   const row = event.target.closest("tr")
  table.row(row).remove().draw()
  location.reload()
 
}


///Edit///

let editModal = new bootstrap.Modal(document.querySelector("#exampleModal2"))

let editKategoriya = document.querySelector("#EditKategoriya")

let editAd = document.querySelector("#EditAd")

let editQiymet = document.querySelector("#EditQiymet")

let editTesvir = document.querySelector("#EditTesvir")

let editYeni = document.querySelector("#EditYeni")

let editSekil = document.querySelector("#EditSekil")

let editEmeliYadas = document.querySelector("#EditEmeliYadas")

let editProsesor = document.querySelector("#EditProsesor")

let editDaimiYadas = document.querySelector("#EditDaimiYadas")

let editDaimiYadasTipi = document.querySelector("#EditDaimiYadasTipi")

let editEmeliyatSistemi = document.querySelector("#EditEmeliyatSistemi")

let editVideoCart = document.querySelector("#EditVideoCart")


let selectedComId

function editCom(ComId) {
  selectedComId = ComId



  editModal.show()
  let selectedCom = Computer.find(function (com) {
    return com.id == ComId
  })

  editKategoriya.value = selectedCom.Kategoriya
  editAd.value = selectedCom.Ad
  editQiymet.value = selectedCom.Qiymet
  editTesvir.value = selectedCom.Tesvir
  editYeni.value = selectedCom.Yeni
  editSekil.value = selectedCom.sekil
  editEmeliYadas.value = selectedCom.EmeliYadas
  editProsesor.value = selectedCom.Prosesor
  editDaimiYadas.value = selectedCom.DaimiYadas
  editDaimiYadasTipi.value = selectedCom.DaimiYadasTipi
  editEmeliyatSistemi.value = selectedCom.EmeliyatSistemi
  editVideoCart.value = selectedCom.VideoCart

  console.log(selectedCom);

}
let editForm = document.querySelector(".editForm")


editForm.addEventListener("submit", (e) => {
  e.preventDefault()
  if (editForm.checkValidity()) {

    Computer = Computer.map(function (Com) {
      if (Com.id == selectedComId) {
        return {
          ...Com,
          Kategoriya: editKategoriya.value,
          Ad: editAd.value,
          Qiymet: editQiymet.value,
          Tesvir: editTesvir.value,
          Yeni: editYeni.value,
          sekil: editSekil.value,
          EmeliYadas: editEmeliYadas.value,
          Prosesor: editProsesor.value,
          DaimiYadas: editDaimiYadas.value,
          DaimiYadasTipi: editDaimiYadasTipi.value,
          EmeliyatSistemi: editEmeliyatSistemi.value,
          VideoCart: editVideoCart.value
        }



      }
      return Com
    })
    console.log(Computer);
    localStorage.setItem("Computer", JSON.stringify(Computer))

    location.reload()

  }
else{
alert("bos input olmaz")
}

})

let Sifirla=document.querySelector(".Sifirla")


Sifirla.addEventListener("click",()=>{
  editAd.value = ""
  editQiymet.value = ""
  editTesvir.value = ""
  editSekil.value = ""
  editEmeliYadas.value =""
  editProsesor.value = ""
  editDaimiYadas.value = ""
  editEmeliyatSistemi.value = ""
  editVideoCart.value = ""

})







































