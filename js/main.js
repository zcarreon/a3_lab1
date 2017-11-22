(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
  var carImages = document.querySelectorAll('.data-ref'),
      nameModel = document.querySelector('.modelName'),
      infoPrice = document.querySelector('.priceInfo'),
      detailsModel = document.querySelector('.modelDetails'),
      appliedClass;

  function changeElements(){
      //debugger;
      let objectIndex = carData[this.id];

      nameModel.classList.remove(appliedClass);
      infoPrice.classList.remove(appliedClass);
      detailsModel.classList.remove(appliedClass);

      nameModel.classList.add(this.id);
      infoPrice.classList.add(this.id);
      detailsModel.classList.add(this.id);

      nameModel.firstChild.nodeValue = objectIndex.name;
      infoPrice.firstChild.nodeValue = objectIndex.price;
      detailsModel.firstChild.nodeValue = objectIndex.details;

      appliedClass = this.id;

      element.classList.add(".focusMini");
  };

  carImages.forEach(function(element, index){
    //debugger;
    element.addEventListener('click', changeElements, false);
  });

  //changeElements.call(document.querySelector("#F55"));
})();
