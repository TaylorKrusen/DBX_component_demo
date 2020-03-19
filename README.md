## Unofficial Dropbox Component Demo app

### There are a few steps needed to run the app.
1. Create a new Dropbox app (or go to an existing one) and copy the "App key"
2. Add your app key and copy following snippet into the `<head>` tag of your index.html file:
```
<script type="text/javascript" src="https://www.dropbox.com/static/api/2/dropins.js" id="dropboxjs" data-app-key="your_app_key"></script>
```
3. In your app settings page, add "localhost" to the Chooser/Saver domain whitelist
4. Go to your app settings page and copy the access token
5. Create a new file named "config.json" and add your access token (please do something safer in production):
```
{
    "DROPBOX_ACCESS_TOKEN": "your_access_token"
}
```
6. Install node modules `npm install`
7. Run server with `node server`
8. Go to https://localhost:8000