<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>WhatsApp Translator</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h2>WhatsApp Web Translator</h2>
    <form id="translator-options">
      <label for="userLanguage">You speak language:</label>
      <select id="userLanguage">
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="zh">Chinese</option>
        <option value="hi">Hindi</option>
        <option value="ru">Russian</option>
        <option value="ja">Japanese</option>
        <option value="te">Telugu</option>
        <option value="pt">Portuguese</option>
      </select>

      <label for="contactLanguage">Contact speaks language:</label>
      <select id="contactLanguage">
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="zh">Chinese</option>
        <option value="hi">Hindi</option>
        <option value="ru">Russian</option>
        <option value="ja">Japanese</option>
        <option value="te">Telugu</option>
        <option value="pt">Portuguese</option>
      </select>

      <input type="submit" value="Save Settings" />
    </form>

    <div id="status"></div>

    <script src="popup.js"></script>
  </body>
</html>
