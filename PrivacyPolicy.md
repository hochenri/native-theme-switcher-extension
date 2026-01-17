# Privacy Policy for DevTheme Tester

**Last Updated: January 17, 2026**

This Privacy Policy describes how **DevTheme Tester** ("the Extension") handles user information. As a developer-focused utility, the Extension is built on the principle of **Zero Data Collection**.

## 1. Data Collection and Usage

**DevTheme Tester does not collect, store, process, or transmit any user data.** Specifically:

- **No Personally Identifiable Information (PII):** We do not collect names, email addresses, IP addresses, or unique device identifiers.
- **No Browsing History:** The Extension does not track, record, or upload the URLs of the websites you visit.
- **No Usage Analytics:** We do not use telemetry, Google Analytics, or any third-party tracking scripts.
- **No Cookies or Local Storage:** The Extension does not set cookies and does not use `chrome.storage` to track user behavior or preferences.

## 2. Permission Justification (Manifest V3)

To provide its core functionality, the Extension requires specific technical permissions. These are used strictly for local browser emulation and never for data harvesting.

- **`debugger`:** Required to access the **Chrome DevTools Protocol (CDP)**. This allows the Extension to trigger the `Emulation.setEmulatedMedia` command, which is the only way to accurately spoof native CSS media queries (`prefers-color-scheme`) while bypassing site-level Content Security Policies (CSP).
- **`activeTab`:** Used only to identify the specific tab where the user manually requests a theme change.

## 3. Data Transmission and Third Parties

Because no data is collected, no data is ever transmitted to external servers.

- **Third-Party Sharing:** We do not sell, trade, or share any information with third parties.
- **Cloud Processing:** All logic is executed locally within the user's browser environment.

## 4. Regulatory Compliance

- **GDPR (General Data Protection Regulation):** The Extension is compliant with the GDPR by virtue of "Data Minimization." Since no personal data is processed, there is no risk to the rights and freedoms of data subjects.
- **CCPA/CPRA (California Consumer Privacy Act):** The Extension does not "sell" or "share" personal information as defined by California law, as no such information is ever acquired.
- **COPPA (Children’s Online Privacy Protection Act):** The Extension does not target children under 13 and does not collect any information from them.

## 5. Security

The Extension utilizes a **Strict Content Security Policy (CSP)** to prevent Cross-Site Scripting (XSS) and ensure that no remote code can be executed within the extension's context. By using the `debugger` API, the Extension maintains a transparent execution model where the user is notified by the browser (via the "Debugging" bar) whenever the API is active.

## 6. Open Source Transparency

The full source code of DevTheme Tester is available for public audit to verify the claims made in this policy:
**GitHub Repository:** [https://github.com/hochenri/native-theme-switcher-extension](https://www.google.com/search?q=https://github.com/hochenri/native-theme-switcher-extension)

## 7. Changes to This Policy

As the Extension does not collect data, future updates will focus only on technical compatibility. Should any data-collecting feature ever be proposed (which is not planned), this policy will be updated, and the Extension will require a manual permission re-approval from the user.

## 8. Contact

For any legal or technical inquiries regarding this policy, please open an "Issue" on the official GitHub repository.
