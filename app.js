const express = require('express');
const request = require('request');
const app = express();

let options = 'https://api.myip.com';

function GetPublicIP() {
    return new Promise(function (resolve,reject) {
        request(options, function (res,body) {
            resolve(body.body);
        })
    });
}

async function returnIP() {
    let res = await GetPublicIP();
    return res;
}

//Routes
app.get('/', (req,res) => {
    returnIP().then(function(result){
        res.write(result);
        res.end();
    })
})

//Listening to server port
app.listen(5000);
