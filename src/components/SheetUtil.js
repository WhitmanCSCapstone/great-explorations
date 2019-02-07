// Based on https://blog.416serg.me/building-an-app-using-google-sheets-api-react-d69681d22ce1

export var SHEET_INFO = {
  apiKey: "AIzaSyBIe-MGvrJ2560PsAgDJhbou_ggIa3Ys6A",
// Switch to apiKey below eventually. For some reason it's not working now... (1/30/2019 7PM)
//  apiKey: "AIzaSyDb5ZXM6uhamvy-SZ80g7gME_oebjO_IZs",
  discoveryDocs: 
    ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
  spreadsheetId: "1yZWPh8McX-D2mZ9roKmCz56e9Te2P4w4TsVA5JdHO8g",
  textsheetId: "1f9T3uKqF24H3wOBKweVgFqViDA5dvBOhXsf25zFLXek"
};

export var WEBTEXT = [];

var CALLBACKS = [];

export function WEBTEXT_ADD_CALLBACK(callback) {
    CALLBACKS.push(callback);
}

var LANGUAGES = {
  english: 0,
  spanish: 1
};

var LANGUAGE = LANGUAGES.english;

export function SWITCH_LANGUAGE() {
  if (LANGUAGE === LANGUAGES.english) {
      LANGUAGE = LANGUAGES.spanish;
  } else {
      LANGUAGE = LANGUAGES.english;
  }
};

export function SHEET_LOAD(callback) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: SHEET_INFO.spreadsheetId,
        range: "Sheet1!A2:D"
      })
      .then(
        raw => {
          const data = raw.result.values;

          var n = 1;
          const workshops = data.map(workshop => ({
            category: workshop[0],
            instructor: workshop[1],
            title: '('+(n++)+') '+workshop[2],
            description: workshop[3]
          })) || [];

          callback({
            workshops
          });
        },
        raw => {
          callback(false, raw.result.error);
        }
      );
  });
};

// English: 0, Spanish: 1
export function WEBTEXT_LOAD() {
  var langLetter = "B"
  langLetter = langLetter.substring(0, langLetter.length - 1) + String.fromCharCode(langLetter.charCodeAt(langLetter.length - 1) + LANGUAGE)
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: SHEET_INFO.textsheetId,
        range: "Sheet1!"+langLetter+"2:"+langLetter
      })
      .then(
        raw => {
          WEBTEXT = raw.result.values;
          console.log(CALLBACKS);
          for (var i=0; i<CALLBACKS.length; i++) {
            console.log(i);
            CALLBACKS[i]();
          }
        },
        raw => {
        }
      );
  });
};
