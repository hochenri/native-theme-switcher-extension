# DevTheme Tester

**DevTheme Tester** is a lightweight, open-source developer utility for Chrome and Edge (Manifest V3). It provides a high-speed toggle to force-test how your website handles native CSS media queries (`prefers-color-scheme`) without changing your OS settings or digging through DevTools menus.

## 🛠 Why this exists?

In 2026, many production websites use strict **Content Security Policies (CSP)** that block standard extension script injections. While "Dark Mode" extensions for general users often fail on these sites, **DevTheme Tester** uses the **Chrome DevTools Protocol (CDP)** via the Debugger API.

Because the Debugger operates at the browser level, it bypasses site-level CSPs, providing the most accurate and reliable way to test:

- `@media (prefers-color-scheme: dark)`
- `@media (prefers-color-scheme: light)`

## 🚀 Features

- **CSP Bypass:** Works on all sites, including those with strict security headers (GitHub, banking sites, etc.).
- **Zero Persistence:** No storage used. It resets to "System" when you close the tab or toggle back, ensuring no "leftover" settings mess up your regular browsing.
- **Native Accuracy:** Uses the browser's own rendering engine emulation—exactly what you find in the F12 "Rendering" tab, but accessible in one click.
- **No Malware/No Bloat:** Under 100 lines of code. No external dependencies. No tracking.

## 🔒 Security & Privacy

This is a "Glass Box" project. Since the Debugger API is powerful, transparency is our priority:

- **No Data Collection:** The extension does not have `internet` permissions. It cannot "phone home."
- **Visual Alert:** Chrome/Edge will display a notification bar while the debugger is active. This is a native security feature we intentionally keep to ensure you know when emulation is running.
- **Open Source:** The code is purposefully simple so any developer can audit it in under 60 seconds.

## 💻 Installation (Developer Mode)

1. Clone this repository: `git clone https://github.com/yourusername/devtheme-tester`
2. Open your browser to `chrome://extensions` or `edge://extensions`.
3. Enable **Developer mode**.
4. Click **Load unpacked** and select the project folder.

## 📖 How to Use

1. Navigate to the site you are developing.
2. Click the **DevTheme Tester** icon in your toolbar.
3. Select **Force Dark** or **Force Light**.
4. To stop emulating, select **System** or simply close the tab.

## 📜 License

Distributed under the **MIT License**. Use it, fork it, break it, fix it.

---

### Security Policy

To maintain the integrity of this developer tool:

- All Pull Requests are scanned by **GitHub CodeQL**.
- The `CODEOWNERS` file ensures all logic changes are reviewed by the maintainer.
