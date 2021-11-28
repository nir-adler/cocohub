const express = require('express')
const cors = require('cors')
const axios = require('axios')

const app = express()
app.use(cors())
app.use(express.json())

app.get('/graphql', async (req, res) => {
    try {
        const response = await axios.post('https://cocohub.ai/graphql', {
            query: "{bot(id:113){firstName}}"
        }, {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJ1c2VyX2lkIjoyNjYzLCJhdWQiOiJwb3N0Z3JhcGhpbGUifQ.31R0Fg-3XWlJtmEn66tR3A_T86XgjlAEdbE0WKj5p80'
            }
        })
        // console.log('here')

        res.send(response.data.data)
    } catch (e) {
        // console.log('error')
        // console.log(e)
        // console.log(e.code)
        // console.log(e.name)
        // console.log(e.message)

        res.status(500).send(e.message)
    }
})



app.listen(8081, () => {
    console.log('Server up on port 8081')
})