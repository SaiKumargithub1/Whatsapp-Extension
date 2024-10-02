# WhatsApp Web Translator Chrome Extension

## Overview

The **WhatsApp Web Translator** is a Chrome extension that enhances WhatsApp Web by allowing users to translate both incoming and outgoing messages into their preferred languages. Users can configure the languages they speak and the languages spoken by their contacts, and then translate messages in real-time. The extension supports multiple languages, including Telugu, Spanish, French, and more.

## Features

- **Translate Incoming Messages:** Automatically or manually translate incoming WhatsApp messages into your preferred language.
- **Translate Outgoing Messages:** Type in your preferred language, and send messages that are translated into your contact's language.
- **Supports 10 Languages:** Including Telugu, Hindi, Spanish, French, German, Italian, Russian, Chinese, Arabic, and Portuguese.
- **Customizable Settings:** Save your preferred languages for both incoming and outgoing messages.
- **Free API Integration:** Uses the MyMemory API for real-time translation.

-**Installation**
Setting Up Locally
TO Clone this repository:
bash

- **git clone**  https://github.com/SaiKumargithub1/Whatsapp-Extension.git
  ------Navigate into the project directory:
  bash
  ---cd whatsapp-translator
  ---Loading the Extension in Chrome
  ---Open Chrome and navigate to chrome://extensions/.
  ---Enable Developer mode in the top-right corner of the page.
  ---Click Load unpacked and select the whatsapp-translator project folder.
  ---The extension should now appear in your extensions list with the icon you provided.

-**API Usage**
This extension uses the MyMemory Translation API to translate messages. It doesn't require an API key and works with free access.

-**Usage**
Set Languages:
--Click on the extension icon beside the address bar to open the popup.
--Select the language you speak and the language your contact speaks.
--These settings will be saved and automatically applied whenever you use WhatsApp Web.
--Translate Messages:
--Open WhatsApp Web.
--A translator button (🌐) will appear next to each message.
--Click the button to translate that message into the target language based on your saved settings. -**Customization**
You can customize the supported languages by modifying the popup.js and options.js scripts. Additional languages can be added by adjusting the <select> dropdown options and ensuring the appropriate language codes are passed to the MyMemory API.

---Known Issues---
Translation Accuracy: Since the free MyMemory API is used, translations may sometimes be less accurate compared to paid services.
