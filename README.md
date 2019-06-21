<table width="100%">
    <tr>
        <td align="left" width="100%" colspan="2">
            <strong>WPAutoPot</strong><br />
            Auto Generate WordPress .POT (Portable Objects Template) files via NPM Scripts or Gulp.
        </td>
    </tr>
    <tr>
        <td>
            A FOSS (Free & Open Source Software) project. Maintained by <a href="https://github.com/ahmadawais">@AhmadAwais</a>.
        </td>
        <td align="center">
            <a href="https://AhmadAwais.com/">
                <img src="https://i.imgur.com/Asg4d3k.png" width="100" />
            </a>
        </td>
    </tr>
</table>

Auto Generate WordPress .POT (Portable Objects Template) files via NPM Scripts or Gulp.

![WPAutoPot](https://i.imgur.com/WmVaebP.png)

# 🎗 WPAutoPot — Getting Set up

Make sure you have node installed. If not [download and install node](https://nodejs.org/en/download/).

## → STEP #1: Install NodeJS & NPM
After installing NodeJS you can verify the install of both NodeJS and Node Package Manager by typing the following commands. This step needs to be followed only once i.e. if you don't have NodeJS installed. No need to repeat it ever again.

```bash
node -v
# v7.10.0

npm -v
# 4.2.0
```

## → Step #2. Download `package.json`

Download [`package.json`](https://git.io/WPAutoPotFile) file inside the root folder of your WordPress plugin or WordPress theme
If you have cURL installed then you can run the following command to download it in one go (just make sure you open the root folder of your WordPress plugin or WordPress theme and download [`package.json`](https://git.io/WPAutoPotFile) file in it).

```bash
curl -L 'https://git.io/WPAutoPot' -o package.json
```

## → STEP #3: Configure NPM Scripts & Install WP-POT-CLI

Now, if you want to use NPM Scripts then you need to do the following:
- **Install** the WP POT CLI — just run `npm install --global wp-pot-cli` in your terminal.
- **Configure** the NPM script called pot — If you open the [`package.json`](https://git.io/WPAutoPotFile) file you can find it under `scripts`.

```json
"scripts": {
    "pot": "wp-pot --src '**/*.php' --dest-file 'languages/WPAutoPot.pot' --package 'WPAutoPot' --domain 'WPAutoPot' --last-translator 'Ahmad Awais <your_email@email.com>' --team 'Team <team@example.com>' --bug-report 'https://your-domain.com/contact'"
}
```

In the `pot` script, you need to change
- --src '**/*.php'  (Source files)
- --dest-file 'languages/WPAutoPot.pot' (Destination file)
- --package 'WPAutoPot' (Package name)
- --domain 'WPAutoPot' (Domain to retrieve the translated text)
- --last-translator 'Ahmad Awais <your_email@email.com>' (Name and email address of the last translator E.g. John Doe <me@example.com>)
- --team 'Team <team@example.com>' (Name and email address of the translation team E.g. Team <team@example.com>)
- --bug-report 'https://your-domain.com/contact' (Header with URL for reporting translation bugs)

> NOTE: That currently this little WP plugin has following file structure
```bash
    ├── languages
    |  └── WPAutoPot.pot
    ├── package.json
    ├── gulpfile.js
    └── plugin.php
```


## → STEP #4: Run NPM Scripts

All that's left now is for you to run the NPM script in the root folder of your WP project — where you downloaded the [`package.json`](https://git.io/WPAutoPotFile) file.

> NOTE: Before you run, make sure there is a `languages` directory. Otherwise running the script will display an error.

```bash
# Compile POT file.
npm run pot
```

<!-- ![Run](https://i.imgur.com/tIelJwy.gif) -->

## → STEP #5: Compile via Gulp — Installing Node Dependencies

If you want to use Gulp to compile the pot files. then follow the following steps otherwise jump to the last step. 

We are in the root folder of our WordPress plugin or WordPress theme at the moment, let's install the Node Dependencies. In the terminal run this command and wait for it to download all the NodeJS dependencies. It's a one time process and can take about a minute depending on the internet speed of your connection.

```bash
# For MAC OS X run the following command with super user
sudo npm install

# For Linux run the following command
npm install
```

## → STEP #6: Download, Configure & Run Gulp

First of all, download the [`gulpfile.js`](https://git.io/WPAutoPotGulpFile) file in the root folder .

```bash
curl -L 'https://git.io/WPAutoPotGulp' -o gulpfile.js
```


Now that you have [`gulpfile.js`](https://git.io/WPAutoPotGulpFile#L18-L32) downloaded in the root, you can open it up and configure the info at the top where it says `//— START Editing Project Variables. —//.` till it says `//— STOP Editing Project Variables. —//.` ([these lines](https://git.io/WPAutoPotGulpFile#L18-L32))These are the similar project variables described in the Step #3.


All you have to do now is run `gulp` in your command line terminal and your translated POT file will get generated.

```bash
# Run gulp to compile .pot file.
gulp
```

![GIF](https://i.imgur.com/wYKBZLp.gif)

## → STEP #7: Share!

Yup, there are no more steps. Just share it with your friends. Or [Click to Tweet about it](https://twitter.com/home?status=%F0%9F%94%A5%20WPAutoPot%3A%20Awesome%20pkg%20by%20%40MrAhmadAwais%20to%20auto%20generate%20pot%20files%20for%20i18n%20%26%20l10n%20in%20%23WordPress%20%E2%80%94%20star%20it%20%E2%86%92%20ahmda.ws/WPAutoPot).

## Contribute
Feel free to contribute. PR's are welcomed.

## Changelog

### Version 1.0.0 
- First version
- Compile: POT files via NPM Scripts
- Compile: POT files via Gulp


## License
Released under MIT License.
Copyright [Ahmad Awais](https://AhmadAwais.com/)

---

🙌 — If 500 people [signup here](http://eepurl.com/cLwjeH), I will build a video series for this.

---

### 🙌 [THEDEVCOUPLE PARTNERS](https://TheDevCouple.com/partners)

This open source project is maintained by the help of awesome businesses listed below. What? [Read more about it →](https://TheDevCouple.com/partners)

<table width='100%'>
	<tr>
		<td width='500'><a target='_blank' href='https://kinsta.com/?kaid=WMDAKYHJLNJX&utm_source=TheDevCouple&utm_medium=Partner'><img src='https://on.ahmda.ws/73cedc/c' /></a></td>
		<td width='500'><a target='_blank' href='https://ahmda.ws/USES_WPE?utm_source=TheDevCouple&utm_medium=Partner'><img src='https://on.ahmda.ws/ff40fe/c' /></a></td>
	</tr>
	<tr>
		<td width='500'><a target='_blank' href='https://mythemeshop.com/?utm_source=TheDevCouple&utm_medium=Partner'><img src='https://on.ahmda.ws/3166d9/c' /></a></td>
		<td width='500'><a target='_blank' href='https://ipapi.co/?utm_source=TheDevCouple&utm_medium=Partner'><img src='https://d2ddoduugvun08.cloudfront.net/items/1R190r2U0p3N3L0U0b2u/ip-api.png'/></a></td>
	</tr>
</table>


<br />
<br />
<p align="center">
<strong>For anything else, tweet at <a href="https://twitter.com/MrAhmadAwais/" target="_blank" rel="noopener noreferrer">@MrAhmadAwais</a></strong>
</p>

<div align="center">
	<p>I have released a video course to help you become a better developer — <a href="https://VSCode.pro/?utm_source=GitHubFOSS" target="_blank">Become a VSCode Power User →</a></p>
    <br />
  <a href="https://VSCode.pro/?utm_source=GitHubFOSS" target="_blank">
  <img src="https://raw.githubusercontent.com/ahmadawais/shades-of-purple-vscode/master/images/vscodeproPlay.jpg" /><br>VSCode</a>

  _<small><a href="https://VSCode.pro/?utm_source=GitHubFOSS" target="_blank">VSCode Power User Course →</a></small>_
</div>


