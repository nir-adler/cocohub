const express = require('express')
const cors = require('cors')
const axios = require('axios')

const app = express()
app.use(cors())
app.use(express.json())

console.log(process.env.COCOHUB_TOKEN)
console.log(process.env.NIR_ADLER)
console.log(process.env)

app.get('/graphql', async (req, res) => {
    try {
        const response = await axios.post('https://cocohub.ai/graphql', {
            query: "{bot(id:113){firstName}}"
        }, {
            headers: {
                'Authorization': process.env.COCOHUB_TOKEN
            }
        })
        res.send(response.data.data)
    } catch (e) {
        res.status(500).send(e.message)
    }
})

app.listen(8081, () => {
    console.log('Server up on port 8081')
})
