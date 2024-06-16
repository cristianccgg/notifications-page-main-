const notifications = document.querySelectorAll(".active");
const number = document.getElementById("number");
const allRead = document.getElementById("all-read");
const dots = document.querySelectorAll(".dot");

function updatedNumber() {
  const updatedNotifications = document.querySelectorAll(".active");
  number.textContent = updatedNotifications.length;
}

updatedNumber();

notifications.forEach((notif) => {
  notif.addEventListener("click", () => {
    notif.classList.remove("active");
    const dot = notif.querySelector(".dot");
    if (dot) {
      dot.classList.remove("dot");
    }
    updatedNumber();
  });
});

allRead.addEventListener("click", () => {
  notifications.forEach((notif) => {
    notif.classList.remove("active");
    dots.forEach((dot) => {
      dot.classList.remove("dot");
    });
  });
  updatedNumber();
});
