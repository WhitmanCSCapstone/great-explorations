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

# Run Locally

Make sure yarn or npm is installed on your system.

```
yarn start
```
or
```
npm start
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

# Changing images

All the images used on the website are in the src/grex_images/ folder. There are 2 ways to change images. 
1. Replace images in the folder with images of the same name, then deploy. This changes the images everywhere.
2. Switch to gh-pages branch and replace images there. This doesn't require deployment, but the images won't be changed in the master branch.

# Algorithm

The algorithm is written within Google Sheets. It can be accessed from the Great Exploration Registration Responses Google Sheet. Click on the the "Tools" tab and select "Script editor" to access the code.

To run algorithm, click on the "Great Explorations" tab and select "Match Girls to Workshops." The matches will go into the Final Workshop Matches Google Sheet.
