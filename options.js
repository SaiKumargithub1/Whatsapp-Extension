document.addEventListener("DOMContentLoaded", function () {
  chrome.storage.sync.get(["userLanguage", "contactLanguage"], function (data) {
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerText = `You speak: ${
      data.userLanguage || "en"
    }, Contact speaks: ${data.contactLanguage || "en"}`;
  });
});
