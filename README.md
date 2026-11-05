# ClipVault : Chrome Extension

A lightweight Chrome extension for saving, organizing, and managing copied text. Built as a hands-on project to learn Chrome extension development.

ClipVault is a hands-on software development project built to explore Learning Chrome Extension Development using JavaScript and Manifest V3.

## Overview

ClipVault aims to make it easier to save useful text while browsing the internet and access it whenever needed.

The goal is to develop a simple, clean, and practical clipboard management experience directly inside Google Chrome.

## Current Features

- Chrome extension successfully loads in the browser.
- Popup interface with a welcome message.
- Basic button interaction.
- Background service worker initialization.
- Manifest V3 configuration.

## Planned Features

- Save selected text from webpages.
- Display clipboard history.
- Copy previously saved text.
- Delete individual entries.
- Clear clipboard history.
- Search saved snippets.
- Organize saved text.
- Persistent local storage.

## Tech Stack

- JavaScript
- HTML
- CSS
- Chrome Extension APIs
- Manifest V3

Future plans may include React, Vite, and additional technologies as the project evolves.

## Project Structure

```text
clip-vault/
│
├── manifest.json
├── popup.html
├── popup.js
├── background.js
└── README.md
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/meenfa/clip-vault-chrome-extension.git
   ```

2. Open the project folder:

   ```bash
   cd clip-vault-chrome-extension
   ```

3. Open Google Chrome and visit:

   ```text
   chrome://extensions
   ```

4. Enable Developer Mode.
5. Click Load unpacked.
6. Select the ClipVault project folder.

The extension should now appear in Chrome.

## Learning Objectives

This project is also a learning journey covering:

- Chrome Extension Architecture
- Manifest V3
- Popup pages
- Background service workers
- Content scripts
- Chrome Storage API
- Extension messaging
- Browser permissions
- Debugging and testing

## Development Status

**Currently:** Initial extension setup completed.

The project is under active development. Features will be implemented incrementally as the extension architecture and Chrome APIs are explored.

## License

MIT License (planned).