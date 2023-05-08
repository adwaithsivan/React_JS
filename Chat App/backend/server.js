// const express = require('express')
// const cors = require('cors')
// const axios = require('axios')

// const app = express()
// app.use(express.json)
// app.use(cors({origin: true}))

// app.get('/', (req,res) => {
//     res.send('Hello , This is Home Page')
// })

//  app.post('/authenticate', async(req,res) => {
//      const {username} = req.body
//      try {
//          const r = await axios.put(
//              "http://api.chatengine.io/users/",
//              { username: username, secret: username, first_name: username},
//              { headers: {"Private-Key": "301d0370-dca4-41ff-a91c-82879b5ee375"}}
//          )
//          return res.status(r.status).json(r.data)
//      } catch (error) {
//          return res.status(e.response.status).json(e.response.data)

//      }
//  })

// app.listen(3001,() => {
//     console.log("App Running on Port 3001")
// })

const express = require('express')
const cors = require('cors')
const axios = require('axios')
const e = require('express')
const app = express()
const port = 5000

app.use(express.json())
app.use(cors({origin: true}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/authenticate', async(req, res) => {
    const { username } = req.body
    try {
        const r = await axios.put(
            "https://api.chatengine.io/users/",
            {username: username, secret: username, first_name: username},
            { headers: { "Private-Key": "fcf63206-b63e-4364-a43d-9b9ed7d8485c " } }
        )
        return res.status(r.status).json(r.data)
    } catch (e) {    

        return res.status(e.response.status).json(e.response.data)
    }   
  })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})