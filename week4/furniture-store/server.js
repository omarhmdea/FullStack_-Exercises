const express = require("express")
const path = require("path")
const urllib = require("urllib");


const app = express()
app.use(express.static(path.join(__dirname,"dist")))
app.use(express.static(path.join(__dirname, 'node_modules')))

const teamToIDs = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}

app.get('/teams/:teamName', function (request, response) {
    urllib.request('http://data.nba.net/10s/prod/v1/2018/players.json/', function (err, data, res) {
        const data_parsed = JSON.parse(data)
        console.log(data_parsed.league.standard);

      });
})

const port = 4000
app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})
