var navMain = document.querySelector('.nav-main');
var navToggle = document.querySelector('.nav-main__toggle');

navMain.classList.remove('nav-main--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('nav-main--closed')) {
    navMain.classList.remove('nav-main--closed');
    navMain.classList.add('nav-main--opened');
  } else {
    navMain.classList.add('nav-main--closed');
    navMain.classList.remove('nav-main--opened');
  }
});

var btnOrder = document.querySelector(".btn--js");
var overlay = document.querySelector(".modal-form__overlay");

btnOrder.addEventListener("click", function (event) {
  event.preventDefault();
  overlay.classList.toggle("modal-form__overlay--show");
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode == 27) {
    if (overlay.classList.contains("modal-form__overlay--show")) {
      overlay.classList.remove("modal-form__overlay--show"); }
  }
});

overlay.addEventListener("click", function (event) {
  if (event.target === this) {
    if (overlay.classList.contains("modal-form__overlay--show")) {
      overlay.classList.remove("modal-form__overlay--show");
    }
  }
});

function initMap() {
  var mapDiv = document.querySelector('.map');
  var myLatLng = {lat: 59.938796, lng: 30.323070};
  var map = new google.maps.Map(mapDiv, {
    center: myLatLng,
    zoom: 16
  });
  var image = "../img/icon-map-pin.svg";
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}
