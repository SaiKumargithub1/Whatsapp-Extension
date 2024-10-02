document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("translator-options");

  chrome.storage.sync.get(["userLanguage", "contactLanguage"], function (data) {
    document.getElementById("userLanguage").value = data.userLanguage || "en";
    document.getElementById("contactLanguage").value =
      data.contactLanguage || "en";
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const userLanguage = document.getElementById("userLanguage").value;
    const contactLanguage = document.getElementById("contactLanguage").value;

    chrome.storage.sync.set(
      {
        userLanguage: userLanguage,
        contactLanguage: contactLanguage,
      },
      function () {
        document.getElementById("status").innerText = "Settings saved!";
        setTimeout(
          () => (document.getElementById("status").innerText = ""),
          2000
        );
      }
    );
  });
});
