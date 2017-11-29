(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
  var carImages = document.querySelectorAll('.data-ref'),
      nameModel = document.querySelector('.modelName'),
      infoPrice = document.querySelector('.priceInfo'),
      detailsModel = document.querySelector('.modelDetails'),
      activeCar = document.querySelectorAll('.focusMini'),
      appliedClass;

  const httpRequest = new XMLHttpRequest();

  function getCarData(){
      //1. Make an AJAX call to the database. Handle any errors first.
      if (!httpRequest) {
        alert('Giving up, your browser sucks!');
        return false;
      }

      httpRequest.onreadystatechange = processRequest;
      httpRequest.open('GET','./includes/functions.php?carModel=' + this.id);
      httpRequest.send();
  };

  function processRequest(){
    //Handle the stages of our AJAX call
    let reqIndicator = document.querySelector('.request-state');
    reqIndicator.textContent = httpRequest.readyState;
    //debugger;
    if (httpRequest.readyState == XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) { //Request worked, all is good!
        //debugger;
        let data = JSON.parse(httpRequest.responseTest);
        processResult(data);
      } else {
        alert('There was a problem with the request');
      }
    }
  }

  function processResult(data){
      const {modelName, pricing, modelDetails} = data;

      nameModel.textContent = modelName;
      infoPrice.innerHTML = pricing;
      detailsModel.textContent = modelDetails;

      carImages.forEach(function(element, index) {
        element.classList.add('nonActive');
      })

      document.querySelector(`#${data.model}`).classList.remove('nonActive');
  };

  carImages.forEach(function(element, index){
    //debugger;
    element.addEventListener('click', getCarData, false);
  });

  //changeElements.call(document.querySelector("#F55"));
})();
