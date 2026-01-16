const attachedTabs = new Set();

chrome.runtime.onMessage.addListener((request) => {
  if (request.action === "setTheme") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (!tabs[0]) return;

      const tabId = tabs[0].id;
      const target = { tabId: tabId };

      if (request.mode === "unset") {
        if (attachedTabs.has(tabId)) {
          chrome.debugger.detach(target, () => {
            if (chrome.runtime.lastError) {
              /* ignore already detached */
            }
            attachedTabs.delete(tabId);
          });
        }
        return;
      }

      // If already attached, just send the command
      if (attachedTabs.has(tabId)) {
        sendEmulationCommand(target, request.mode);
      } else {
        // Attach and wait for the callback before sending the first command
        chrome.debugger.attach(target, "1.3", () => {
          if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError.message);
            return;
          }
          attachedTabs.add(tabId);
          sendEmulationCommand(target, request.mode);
        });
      }
    });
  }
});

function sendEmulationCommand(target, mode) {
  chrome.debugger.sendCommand(
    target,
    "Emulation.setEmulatedMedia",
    {
      features: [{ name: "prefers-color-scheme", value: mode }],
    },
    () => {
      if (chrome.runtime.lastError) {
        // This is where your error was likely happening
        console.warn("Command failed: ", chrome.runtime.lastError.message);
        // If we find we're not actually attached, update our Set
        if (chrome.runtime.lastError.message.includes("not attached")) {
          attachedTabs.delete(target.tabId);
        }
      }
    }
  );
}

// Clean up our Set when tabs are closed or detached manually by user
chrome.debugger.onDetach.addListener((source) => {
  attachedTabs.delete(source.tabId);
});

chrome.tabs.onRemoved.addListener((tabId) => {
  attachedTabs.delete(tabId);
});
