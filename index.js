import express from 'express';

const app = express();
const PORT = 8080;

app.use(express.json())


app.get('/', (req, res) => {
    res.status(200).send({
        'Homepage': 'Index.js' 
    })
})

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirtLogo: '|--|',
        size: 'large'
    })
})

app.post('/tshirt/:id', (req, res) => {
    const { id } = req.params;
    const { tshirtLogo } = req.body;

    if(!tshirtLogo){
        res.status(418).send({ 
            message: 'We need a Tshirt Logo'
        })
    }

    res.status(200).send({
        tshirt: `your tshirt logo is ${tshirtLogo} and ID is ${id}`
    })
})
app.listen(
    PORT,
    () => {
        console.log(`It's alive on http://localhost:${PORT}`);
    }
)