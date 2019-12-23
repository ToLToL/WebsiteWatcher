const request = require('request');
const cheerio = require('cheerio');
const nodemailer = require('nodemailer');
const webshot = require('webshot');
const fs = require('fs');
const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');
const express = require('express');
import { Request, Response } from 'express';
import { Server } from 'http';

require('dotenv/config');

const app = express();
const router = express.Router();

// express
router.get('/:url1', (req: Request, res: Response) => {
    res.send(req.params);
});

app.use(router);

app.listen('4000', () => {
    console.log('Server is running on port 4000');
})


// webshot('facebook.com', 'screenshots/facebookEN.png', function(err: any) {
//     if (!err) {
//         console.log("Screenshot saved!");
//     }
// });

// const img1 = PNG.sync.read(fs.readFileSync('screenshots/facebookEN.png'));
// const img2 = PNG.sync.read(fs.readFileSync('screenshots/facebookFR.png'));
// const {width, height} = img1;
// const diff = new PNG({width, height});
 
// pixelmatch(img1.data, img2.data, diff.data, width, height, {threshold: 0.1});
 
// fs.writeFileSync('screenshots/diff.png', PNG.sync.write(diff));

// // Step 1
// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.NODEMAILER_USER,
//         pass: process.env.NODEMAILER_PASSWORD
//     },
//     tls: {
//         ciphers:'SSLv3'
//     }
// });

// // Step 2
// let mailOptions = {
//     from: 'treqh@outlook.com',
//     to: 'hyok1014@hotmail.com',
//     subject: 'Testing',
//     text: 'Hello'
// }

// const url = 'http://service.relaiscolis.com/tracking/suivi_colis.aspx?ens_id=53&num_client=RD25189219&num_colis=3476002201&style=RC&passage=1&exp_id=442903126';
// const interval = 5000; // 5 seconds
// var steps = 1;

// setInterval(() => {
//     request(url, (error: any, response: any, html: any) => {
//         if (!error && response.statusCode == 200) {
//             const $ = cheerio.load(html);

//            $('.historique_table_td_normal').each((i: number, element: any) => {
//                const item = $(element)
//                    .text();
//                console.log(item);
//                console.log(i);
//                if (steps != i) {
//                    console.log('New step!');
//                    steps = i;
//                    transporter.sendMail(mailOptions, (error: any, data: any) => {
//                         if (error)
//                             console.log(error)
//                         else
//                             console.log('Email sent');
//                    });
//                }
//          })
//         } 
//     });
// }, interval);