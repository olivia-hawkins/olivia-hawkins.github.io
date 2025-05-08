document.querySelectorAll("button").forEach(button => {
    button.addEventListener("touchstart", () => {
      button.classList.add("pressed");
    });
  
    const removePressed = () => button.classList.remove("pressed");
  
    button.addEventListener("touchend", removePressed);
    button.addEventListener("touchcancel", removePressed);
  });
  