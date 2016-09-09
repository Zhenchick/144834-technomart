(function() {
    var links = document.querySelectorAll(".buy");
    var popup = document.querySelector(".modal-content-2");
    var close = popup.querySelector(".modal-content-close");
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function(event) {
            event.preventDefault();
            popup.classList.add("modal-content-show");
        });
    }
    close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("modal-content-show");
    });
    window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
            if (popup.classList.contains("modal-content-show")) {
                popup.classList.remove("modal-content-show");
            }
        }
    });
})();

(function() {
  var link = document.querySelector(".map-place");
  if (link === null) {
    return;
  }
  var popup = document.querySelector(".modal-content");
  var close = popup.querySelector(".modal-content-close");
  var form = popup.querySelector("form");
  var yourName = popup.querySelector("[name=yourName]");
  var mail = popup.querySelector("[name=mail]");
  var storage = localStorage.getItem("yourName");
  link.addEventListener("click", function(event) {
      event.preventDefault();
      popup.classList.add("modal-content-show");
      if (storage) {
          yourName.value = storage;
      } else {
          setTimeout(function() {
              yourName.focus();
          }, 500);
      }
  });
  close.addEventListener("click", function(event) {
      event.preventDefault();
      popup.classList.remove("modal-content-show");
      popup.classList.remove("modal-error");
  });
  form.addEventListener("submit", function(event) {
      if (!yourName.value || !mail.value) {
          event.preventDefault();
          popup.classList.remove("modal-error");
          popup.offsetWidth = popup.offsetWidth;
          popup.classList.add("modal-error");
      } else {
          localStorage.setItem("yourName", yourName.value);
      }
  });
  window.addEventListener("keydown", function(event) {
      if (event.keyCode === 27) {
          if (popup.classList.contains("modal-content-show")) {
              popup.classList.remove("modal-content-show");
              popup.classList.remove("modal-error");
          }
      }
  });
})();
