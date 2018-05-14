var express = require('express');
var router = express.Router();
var pool = require('../modules/message.database');

router.get('/', (req, res) => {
        console.log('GET /messages');
        pool.query(`SELECT * FROM "messages";`)

            .then((results) => {
                console.log(results.rows)
                res.send(results.rows);
    })
        .catch((error) => {
            console.log('error with SQL GET in route', error);
            res.sendStatus(500)
        });
});

// end route GET  

router.post('/', (req, res) => {
    console.log('POST /messages', req.body);
    const messages = req.body;
    const queryText = `INSERT INTO "messages" ("name", "message") VALUES ($1, $2)`;
    pool.query(queryText, [messages.name, messages.message])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log('error making SQL insert query in route', error);
            res.sendStatus(500);
        });
});

// end route POST

router.delete('/:id', (req, res) => {
    console.log('DELETE /messages');
    console.log(req.params);
    const deleteMessageEntries = req.params.id;
    pool.query('DELETE FROM "messages" WHERE "id"=$1;', [deleteMessageEntries])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error making SQL delete in route', error);
            res.sendStatus(500);
        });
});

// end delete

module.exports = router;