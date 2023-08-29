





const alertDOM = `
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Uyarı!!!</strong> Hatalı Giriş Yaptınız 
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`

const listcls = `<li>Lorem.

<button class="closebtn">
  <img class="close " src="image/x.svg" alt="">
</button>


</li>`


const yeniVeriDOM = document.querySelector('#yeniVeri');
const ekleDOM = document.querySelector('#ekle');
const listDOM = document.querySelector('#list');
const userFormDOM = document.querySelector('#userForm');
const uyarıDOM = document.querySelector('#uyarı');
const closeBtnDOM = document.querySelectorAll(".closebtn")


userFormDOM.addEventListener('submit', formHandler);



  


function formHandler(event) {
  event.preventDefault();
  let text = yeniVeriDOM.value;
  if (text.trim() !== "") {
    
    let list = document.createElement('li');


    
    
    
    
    list.textContent = text; 
    listDOM.appendChild(list); 
    
    yeniVeriDOM.value = "";
    

    
    
  } else {
    uyarıDOM.innerHTML = alertDOM;
    
  }
};


closeBtnDOM.forEach(function(button) {
  button.addEventListener('click', function() {
    const listItem = button.parentNode;
    
    listDOM.removeChild(listItem);
  });
});



