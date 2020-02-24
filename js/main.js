var nameError = {
    id: "name",
    message: "Name field required"
  };
  var emailError = {
    id: "email",
    message: "Email field required & valid email adress"
  };
  var commentError = {
    id: "comment",
    message: "Comment field required & the character max limit is 50"
  };
  var passwordError = {
    id: "password",
    message:
      "Password field should have a 6 characters minimum length and contains at least 1 lowercase, 1 uppercase and 1 digit"
  };
  var errors = [];
  
  function showErrors() {
    errors.forEach(error => {
      document
        .getElementById("listErrors")
        .appendChild(listOfElements(error.message));
    });
  }
  
  function listOfElements(message) {
    let liBorn = document.createElement("li");
    liBorn.appendChild(document.createTextNode(message));
    return liBorn;
  }
  
  function removeList() {
    var list = document.getElementById("listErrors");
    var child = list.lastElementChild;
    while (child) {
      list.removeChild(child);
      child = list.lastElementChild;
    }
  }
  
  function removeAndShow() {
    removeList();
    showErrors();
  }
  
  function addError(error) {
    if (!errors.map(x => x.id).includes(error.id)) {
      errors.push(error);
      removeAndShow();
    }
  }
  
  function removeError(id) {
    errors = errors.filter(x => x.id !== id);
    removeAndShow();
  }
  
  function validateName(element) {
    var field = element.value;
    if (field === "") {
      var showError = document.getElementsByClassName("error-list");
      showError[0].classList.remove("hidden");
      addError(nameError);
    } else {
      removeError(nameError.id);
    }
  }
  
  function validateEmail(element1) {
    var field = element1.value;
    if (field == "" || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(field))) {
      var showError = document.getElementsByClassName("error-list");
      showError[0].classList.remove("hidden");
      addError(emailError);
    } else {
      removeError(emailError.id);
    }
  }
  
  function validateComment(element2) {
    var field = element2.value;
    valor = document.getElementById("comments").value;
    if (
      field == "" ||
      field == null ||
      field.length > 50 ||
      /^\s+$/.test(field)
    ) {
      var showError = document.getElementsByClassName("error-list");
      showError[0].classList.remove("hidden");
      addError(commentError);
    } else {
      removeError(commentError.id);
    }
  }
  
  function validatePassword(element3) {
    var field = element3.value;
    valor = document.getElementById("password").value;
    if (!(/(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])/.test(field))) {
      var showError = document.getElementsByClassName("error-list");
      showError[0].classList.remove("hidden");
      addError(passwordError);
    } else {
      removeError(passwordError.id);
    }
  }
  
  
  // VEHICLES
  var car = document.getElementById("car");
  var bike = document.getElementById("bike");
  var motorcycle = document.getElementById("motorcycle");
  
  function validateVehicles(){
    var car = document.getElementById("car"); 
    var bike = document.getElementById("bike");
    var motorcycle = document.getElementById("motorcycle");
    if(car.checked !== true && bike.checked !== true && motorcycle.checked !== true){
      console.log("Debes seleccionar al menos uno");
    }  
  
  }
  function validateRbutton(element)
  {
    console.log(element);
  }
  
  function validateString(element, errorId) {
    var error = document.getElementById(errorId);
    if (element.value == "") {
      error.removeAttribute("hidden");
    } else {
      error.setAttribute("hidden", "true");
    }
  }
  
  function displayCar(){
    let access = document.getElementsByClassName("car-form");
      if(car.checked){   
        let remove = access[0].classList.remove("hiddencar");
        return remove;
      }
      else{
        access[0].classList.add("hiddencar");
      }    
    }
    function displayBike(){
      let access = document.getElementsByClassName("bike-form");
        if(bike.checked){   
          let remove = access[0].classList.remove("hiddenbike");
          return remove;
        }
        else{
          access[0].classList.add("hiddenbike");
        }    
      }
  
      function displayMotorcycle() {
        let access = document.getElementsByClassName("motorcycle-form");
        if (motorcycle.checked) {
          let remove = access[0].classList.remove("hiddenmotorcycle");
          return remove;
        } else {
          access[0].classList.add("hiddenmotorcycle");
        }
      }
      
      function validateColor(){
        let access = document.getElementsByClassName("carColors");
        access.getElementsByTagName("input");
         carColors[0].forEach(element => {
           id.checked
         });  
         
       }
  
  