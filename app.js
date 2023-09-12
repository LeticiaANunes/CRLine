
import express from "express"
/* INSTACIAMENTO DO EXPRESS */
const app = express()
/* LEVANTE DE SERVIDOR  */
const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`Servidor online na porta ${port}`)

})