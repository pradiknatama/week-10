const express = require('express')
const app = express()
const port = 3000
const router = require("./routes");
const path = require("path")

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use(express.json());
app.use(express.urlencoded({extended:true}));
router.use("/upload", express.static(path.join(__dirname, "/upload"))) // the key

app.use(router);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


