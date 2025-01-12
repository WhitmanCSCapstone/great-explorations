// Based on https://blog.416serg.me/building-an-app-using-google-sheets-api-react-d69681d22ce1

export var SHEET_INFO = {
  apiKey: "AIzaSyCsbdkVxitaZHEvixS73t3ZDkFE2pR6hOg",
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

//changed range to include spanish workshops and SWITCH function to adjust range for get method in SHEET_LOAD
var workshopstart = 0

var LANGUAGE = LANGUAGES.english;

export function SWITCH_LANGUAGE(callback) {
  if (LANGUAGE === LANGUAGES.english) {
      LANGUAGE = LANGUAGES.spanish;
  } else {
      LANGUAGE = LANGUAGES.english;
  }
  localStorage.setItem("currentLanguage", LANGUAGE);

  switch(LANGUAGE) {
    case LANGUAGES.english:
        workshopstart = 0;
        break;
    case LANGUAGES.spanish:
        workshopstart = 7;
        break;
    default:
        workshopstart = 0;
  }  

  // Trigger a reload of the sheet data after switching language
  SHEET_LOAD(callback);
};



export function SHEET_LOAD(callback) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: SHEET_INFO.spreadsheetId,
        range: "Sheet1!A2:K"
      })
      .then(
        raw => {
          const data = raw.result.values;

          var n = 1;
          const workshops = data.map(workshop => ({
            category: workshop[workshopstart],
            instructor: workshop[workshopstart+1],
            title: '('+(n++)+') '+workshop[workshopstart+2],
            description: workshop[workshopstart+3]
          })) || [];

          // LOGGING FOR DEBUG
          // console.log("Workshops loaded:", workshops);
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
