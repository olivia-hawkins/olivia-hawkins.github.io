document.querySelectorAll("button").forEach(button => {
    // スマホのタッチ押下時にクラス追加
    button.addEventListener("touchstart", () => {
      button.classList.add("pressed");
    });
  
    // タッチ解除・キャンセル時にクラス削除
    const removePressed = () => button.classList.remove("pressed");
  
    button.addEventListener("touchend", removePressed);
    button.addEventListener("touchcancel", removePressed);
  });
  