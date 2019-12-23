const request = require("request");
const cheerio = require("cheerio");
const nodemailer = require("nodemailer");
const webshot = require("webshot");
const fs = require("fs");
const PNG = require("pngjs").PNG;
const pixelmatch = require("pixelmatch");
const express = require("express");
const bodyParser = require("body-parser");
import { Request, Response } from "express";
import { Server } from "http";

require("dotenv/config");

const app = express();
const router = express.Router();

// Middlewares
app.use(function(req: Request, res: Response, next: any) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

// express
router.get('/', (req: Request, res: Response) => {
    console.log(req.query.url1);
  webshot(req.query.url1, "screenshots/file1.png", function(err: any) {
    if (!err) {
      console.log("Screenshot saved!");
      const img1 = PNG.sync.read(fs.readFileSync("screenshots/file1.png"));
      const img2 = PNG.sync.read(fs.readFileSync("screenshots/file2.png"));
      const { width, height } = img1;
    //   const diff = new PNG({ width, height });
    //   console.log(diff);
    
    //   pixelmatch(img1.data, img2.data, diff.data, width, height, {
    //     threshold: 0.1
    //   });
    
    const diff = pixelmatch(img1.data, img2.data, null, width, height, {
        threshold: 0.0
      });
      //fs.writeFileSync("screenshots/diff.png", PNG.sync.write(diff));
      res.send(diff == 0);
    }
    else
        console.log(err);
  });
});

app.listen("4000", () => {
  console.log("Server is running on port 4000");
});

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
