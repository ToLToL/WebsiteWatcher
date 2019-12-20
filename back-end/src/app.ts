/*import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(5000, () => console.log('Server running on port 5000'));
*/

const request = require('request');
const cheerio = require('cheerio');

request('http://service.relaiscolis.com/tracking/suivi_colis.aspx?ens_id=53&num_client=RD25189219&num_colis=3476002201&style=RC&passage=1&exp_id=442903126', (error: any, response: any, html: any) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);

        $('.historique_table_td_normal').each((i: number, element: any) => {
            const item = $(element).text()
            console.log(item);
        })
    } 
});