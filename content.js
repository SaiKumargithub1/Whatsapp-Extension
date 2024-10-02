function addTranslateButtons() {
  const messages = document.querySelectorAll(".message-in, .message-out");

  messages.forEach((message) => {
    if (!message.querySelector(".translate-button")) {
      const button = document.createElement("button");
      button.innerText = "🌐";
      button.className = "translate-button";
      button.style.position = "absolute";
      button.style.right = "5px";
      button.style.top = "50%";
      button.style.transform = "translateY(-50%)";
      button.style.cursor = "pointer";
      button.style.padding = "5px";
      button.style.border = "none";
      button.style.background = "transparent";

      const messageContainer = message.closest(".message-in, .message-out");
      if (messageContainer) {
        messageContainer.style.position = "relative";
        messageContainer.appendChild(button);
      }

      button.addEventListener("click", function () {
        const messageTextElement = message.querySelector(".selectable-text");
        if (messageTextElement) {
          const messageText = messageTextElement.innerText;
          translateMessage(messageText, message);
        } else {
          console.error("No text content found for translation.");
        }
      });
    }
  });
}

setInterval(addTranslateButtons, 2000);
