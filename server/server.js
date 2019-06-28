const express = require('express');
var bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var sha1 = require('js-sha1');

const port = process.env.PORT || 3002;
const apiUrl = 'http://10.11.15.51/roberto/idok/api/api/v1/entities/289/authentications/user/logins';
// const apiUrl = 'https://idok.acin.pt/idokalfa/api/api/v1/authentications/user/logins';
const privateKey = 'MWeJxv$g(cxtLj~F8SD$Bd@32UJLYN(nE_4WTB9*,3TwBKM+d~~G22,;ra7fy)k?"H8Nnm.c*cnu*\\\^7:u.EZ,,<zKjNB`NqcJPLXj&YzRB$}$`TN/5Wev?FWY6ud!YP';
const publicKey = 'FWY6ud!YP';

// X_TIMESTAMP
var d = new Date();
var time = '151000000';

var stamp = time+':'+privateKey;
// X_TIMESTAMP_AUTH
var timeHashed = sha1(stamp);

// X_NONCE
var nonce = 123456789;/* Math.random() * (9999999999 - 1111111111) + 1111111111 */;// Add a random nounce

//Authorization
var authorization = 'Basic ' + Buffer.from(publicKey+":"+sha1(timeHashed+':'+privateKey+':'+nonce)).toString('base64');

const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic aWRva2RldjIwMTg6MTRiODk5YzhlNmQ0YzNhOGJmNDUxNWJlZjM0YjM4ZGE4OGUwNTFhNw==',
    'X_TIMESTAMP': /* time */'1525873204',
    'X_TIMESTAMP_AUTH': 'ed02e2297c66ea080acf12e7037985ab26af37ba',
    'X_NONCE': 5024343050
};

// console.log(headers);

const sendToApi = (body, method) => {
    return axios({
        // url:`${apiUrl}/${body.endpoint}`,
        url:apiUrl,
        method,
        headers,
        data: body,
    })
    .then(response => {
        console.log("sucesso");
        console.log(response.data);
        return response.data;
    })
    .catch(error => {
        // console.log(error.response.data);
        return error.response.data;
    });
}

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// this is our create methid
// this method adds new data in our database
app.post('/request', (req, res) => {
    // console.log(req.method);
    const { body, method } = req;

    /* console.log(body); */
    /* console.log(headers); */
    /* enviar po api */
    sendToApi(body, method).then(response => {
        console.log(response);
        res.send(response);
    }).catch((e) => {
        // console.log(e);
        res.send(e);
    });
});

// append /api for our http requests

// launch our backend into a port
app.listen(port, () => console.log(`LISTENING ON PORT ${port}`));
