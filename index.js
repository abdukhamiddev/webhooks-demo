const dotenv = require("dotenv");
let express = require("express");
const cors = require("cors");
const http = require("http");

const headersInit = new Headers();
headersInit.append(
  "Authorization",
  "Bearer patwI1yOnv2nlWULt.2d3d51fcb8653f64bac88467c64e063ae1eafbfdfd67823f60a9a0d3be13183c"
);
headersInit.append("Content-Type", "application/json");

const raw = JSON.stringify({
  notificationUrl: "https://d449-84-54-66-71.ngrok-free.app/notif-ping",
  specification: {
    options: {
      filters: {
        dataTypes: ["tableData"],
      },
    },
  },
});



const requestOptions = {
  method: "POST",
  headers: headersInit,
  body: raw,
  
};
fetch(
  `https://api.airtable.com/v0/bases/appff8HJFMBuoXgwd/webhooks/`,
  requestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
// const notifHeaders = new Headers();
// notifHeaders.append("Authorization", `Bearer  patwI1yOnv2nlWULt.2d3d51fcb8653f64bac88467c64e063ae1eafbfdfd67823f60a9a0d3be13183c`);
// notifHeaders.append("Content-Type", "application/json");

// const rawNotifBody = JSON.stringify({
//   enable: true,
// });

// const requestOptionsNotif = {
//   method: "POST",
//   headers: notifHeaders,
//   body: rawNotifBody,
//   redirect: "follow",
// };

let app = express();
const server = http.Server(app);

dotenv.config();

app.use(
  cors({
    origin: "*", 
  })
);

app.post("/notif-ping", (req, res) => {
  console.log(req);
  res.sendStatus(200).end();
});

server.listen(3000, () => {
  console.log("listening on 3000");
});
