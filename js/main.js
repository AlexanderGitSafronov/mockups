document.addEventListener("DOMContentLoaded", function () {
  // Меню
  const qrBtn = document.querySelectorAll(".qrBtn");
  const mainMenu = document.querySelector(".mainQr");
  const mainWrapperMenu = document.querySelector(".mainMenuWrapper");
  const body = document.querySelector("body");
  const closebtn = document.querySelector(".mainQr_close");

  qrBtn.forEach((item) => {
    item.addEventListener("click", function () {
      mainMenu.classList.add("act");
      body.style.overflow = "hidden";
      mainWrapperMenu.classList.add("active");
      closebtn.classList.add("active");
    });
  });

  closebtn.addEventListener("click", () => {
    mainMenu.classList.remove("act");
    mainWrapperMenu.classList.remove("active");
    body.style.overflow = "visible";
    closebtn.classList.remove("active");
  });

  // Опередяем платформу
  const iosBtn = document.querySelectorAll(".ios");
  const androidBtn = document.querySelectorAll(".android");

  function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      androidBtn.forEach((item) => {
        item.style.display = "none";
      });
    }
    if (/android/i.test(userAgent)) {
      iosBtn.forEach((item) => {
        item.style.display = "none";
      });
    }
    return "unknown";
  }

  function checkScreenWidthAndExecute() {
    if (window.innerWidth < 576) {
      getMobileOperatingSystem();
    }
  }
  checkScreenWidthAndExecute();

  if (document.querySelector(".form_btn")) {
    const formBtn = document.querySelector(".form_btn");
    const wrapperFirstPage = document.querySelector(".main__wrapper_pc");
    const wrappeSecondPage = document.querySelector(".step2");
    const wrapperQr = document.querySelectorAll(".wrapper__qr");
    const lastText = document.querySelector(".mob__text");

    formBtn.addEventListener("click", (e) => {
      e.preventDefault();
      wrapperFirstPage.style.display = "none";
      wrappeSecondPage.style.display = "block";
      lastText.style.display = "none";
    });

    wrapperQr.forEach((item) => {
      item.addEventListener("click", () => {
        if (item.classList.contains("active")) {
          return;
        } else {
          wrapperQr.forEach((el) => {
            el.classList.remove("active");
          });
          item.classList.add("active");
        }
      });
    });
  }
});
