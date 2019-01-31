// Based on https://blog.416serg.me/building-an-app-using-google-sheets-api-react-d69681d22ce1

export var SHEET_INFO = {
  apiKey: "AIzaSyBIe-MGvrJ2560PsAgDJhbou_ggIa3Ys6A",
// Switch to apiKey below eventually. For some reason it's not working now... (1/24/2019 12AM)
//  apiKey: "AIzaSyDQD6bkeo-BpLKpL3IVlQotsbJ1uKP6_XE",
  discoveryDocs: 
    ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
  spreadsheetId: "12zh88Vmnqh5L2xKJySklLD2ZkIlr0vv9OepqLMp4rT0",
  textsheetId: "1wJ5Bfu0MV9ZXWkrJOv0ltSBCQgRPGFARALKmfPG7uaM"
};

export var LANGUAGES = {
  english: 0,
  spanish: 1
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
export function WEBTEXT_LOAD(callback, langID) {
  var langLetter = "B"
  langLetter = langLetter.substring(0, langLetter.length - 1) + String.fromCharCode(langLetter.charCodeAt(langLetter.length - 1) + langID)
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: SHEET_INFO.textsheetId,
        range: "Sheet1!"+langLetter+"2:"+langLetter
      })
      .then(
        raw => {
          const data = raw.result.values
          callback(data);
        },
        raw => {
          callback(false, raw.result.error);
        }
      );
  });
};
