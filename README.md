# Great Explorations

Registration/planning support software for Great Explorations: A hands-on STEM adventure for 5th - 8th grade girls

# Setup

Make sure NodeJS/NPM is installed on your system, then run `npm install` inside your clone of this repo.

```
sudo apt-get install nodejs
git clone https://github.com/WhitmanCSCapstone/great-explorations.git
cd great-explorations
sudo npm install
```

# Deployment

First time deployment.

```
git clone https://github.com/WhitmanCSCapstone/great-explorations.git
cd great-explorations
sudo npm install
yarn deploy
```

Once master is cloned on your file system, you can deploy directly.

```
cd ./path-to-clone-dir/great-explorations
git pull
yarn deploy
```

After deploying, go to GitHub and make sure custom domain is still set to gewallawalla.com under Settings.

# Google Apps Script

The Google Apps Script (GAS) related code can be viewed [here](https://docs.google.com/spreadsheets/d/1h-UJlgXtuydbPonqGLyPRx3FG8hp9XANk_TxjoQ46uw/edit?usp=sharing) alongside the workshop description spreadsheet.
