# ClipVault — Chrome Extension

A lightweight Chrome extension for saving, storing, and managing text snippets directly in your browser.

Built as a hands-on project to learn Chrome extension development using JavaScript and Manifest V3.

## Overview

ClipVault aims to make it easier to save useful information while browsing the internet and access it whenever needed.

The project focuses on building a simple, practical clipboard manager while exploring Chrome extension architecture, browser APIs, and JavaScript development.

## Current Features

- Chrome extension successfully loads in Google Chrome.
- Manifest V3 configuration.
- Popup interface built with HTML, CSS, and JavaScript.
- Background service worker initialization.
- Popup-to-background message passing.
- Save text snippets manually through the popup.
- Store multiple clips using Chrome Storage API.
- Retrieve and display previously saved clips.
- Persistent local storage using `chrome.storage.local`.
- Delete individual saved clips.
- Custom popup styling with a green color theme.

## Planned Features

- Save selected text directly from webpages.
- Right-click context menu integration (Save to ClipVault).
- Copy previously saved text.
- Clear all saved clips.
- Search saved snippets.
- Organize and manage saved text.
- Improve the popup interface and user experience.

## Tech Stack

- JavaScript
- HTML5
- CSS3
- Chrome Extension APIs
- Chrome Storage API
- Chrome Runtime Messaging API
- Manifest V3

Future development may introduce React and Vite for a more advanced user interface.

## Project Structure

```text
clip-vault/
│
├── manifest.json
├── popup.html
├── popup.css
├── popup.js
├── background.js
└── README.md
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/meenfa/clip-vault-chrome-extension.git
   ```

2. Navigate to the project directory:

   ```bash
   cd clip-vault-chrome-extension
   ```

3. Open Google Chrome and visit:

   ```text
   chrome://extensions
   ```

4. Enable Developer Mode.
5. Click **Load unpacked**.
6. Select the ClipVault project folder.

The extension should now appear in your Chrome extensions list.

## Learning Objectives

This project is also a learning journey covering:

- Chrome Extension Architecture
- Manifest V3
- Popup pages and UI development
- Background service workers
- Extension message passing
- Chrome Storage API
- JavaScript asynchronous programming
- Browser permissions
- Debugging and testing Chrome extensions

## Development Status

**Status: In Development**

The initial extension setup, popup interface, message passing, and basic clipboard management functionality have been implemented.

The next development phase focuses on capturing selected text directly from webpages using content scripts and Chrome's Context Menus API.

Features are being implemented incrementally as part of the learning and development process.

## License

MIT License (planned).
