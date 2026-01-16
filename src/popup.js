document.querySelectorAll('input[name="theme"]').forEach((radio) => {
  radio.addEventListener("change", (e) => {
    const mode = e.target.value;
    chrome.runtime.sendMessage({ action: "setTheme", mode: mode });
  });
});
