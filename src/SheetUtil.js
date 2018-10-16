// Based on https://blog.416serg.me/building-an-app-using-google-sheets-api-react-d69681d22ce1

export var SHEET_DATA = {
  apiKey: "AIzaSyAz4MOTnvAKI3NuNDyWD3YEawqH5nd0DPs",
  discoveryDocs: 
    ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
  spreadsheetId: "13ADo7ukhOhJbYvrfMYRgpVIU5W8FiFsU9N9OApTRnfc"
};

export function SHEET_LOAD(callback) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: SHEET_DATA.spreadsheetId,
        range: "Form Responses 1!A2:E"
      })
      .then(
        response => {
          const data = response.result.values;

          const people = data.map(person => ({
            timestamp: person[0],
            email: person[1],
            first: person[2]
          })) || [];

          callback({
            people
          });
        },
        response => {
          callback(false, response.result.error);
        }
      );
  });
};