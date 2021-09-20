const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
    const firstName = req.body.firstName;
    const secondName = req.body.secondName;
    const email = req.body.email;

    const data = {
      members: [
        {
          email_address : email,
          status : "subscribed",
          merge_fields: {
            FNAME : firstName,
            LNAME : secondName,
          }
        }
        
      ]
    };

    const jsonData = JSON.stringify(data)

    const url =  "https://us5.api.mailchimp.com/3.0/lists/8f7ebd2d06"

    const options = {
      method: "POST",
      auth: "jaykhans:227197923bd770c32d52f6174fb10fdd-us5"
    }
   
    const request = https.request(url, options, function(response) {
      response.on("data", function(data) {
        console.log(JSON.parse(data));
      })
    })
    
    request.write(jsonData);
    request.end();
})

app.listen(3000, function () {
  console.log("Server is running on port 3000...");
});
