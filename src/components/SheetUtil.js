// Based on https://blog.416serg.me/building-an-app-using-google-sheets-api-react-d69681d22ce1

export var SHEET_INFO = {
  apiKey: "AIzaSyBIe-MGvrJ2560PsAgDJhbou_ggIa3Ys6A",
  discoveryDocs: 
    ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
  spreadsheetId: "1h-UJlgXtuydbPonqGLyPRx3FG8hp9XANk_TxjoQ46uw"
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

          const workshops = data.map(workshop => ({
            category: workshop[0],
            instructor: workshop[1],
            title: workshop[2],
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