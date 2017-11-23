(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
  var carImages = document.querySelectorAll('.data-ref'),
      nameModel = document.querySelector('.modelName'),
      infoPrice = document.querySelector('.priceInfo'),
      detailsModel = document.querySelector('.modelDetails'),
      activeCar = document.querySelectorAll('.focusMini'),
      appliedClass;

  function changeElements(e){
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

      activeCar.classList.remove('.focusMini');
      activeCar.classList.add('.nonActive');

      e.target.classList.remove('.nonActive');
      e.target.classList.add('.focusMini');

      appliedClass = this.id;
  };

  carImages.forEach(function(element, index){
    //debugger;
    element.addEventListener('click', changeElements, false);
  });

  changeElements.call(document.querySelector("#F55"));
})();
