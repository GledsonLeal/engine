const express = require("express")
const app = express()
const port = 8085

//template engine
app.set('view engine', 'ejs')
app.use(express.static("public"))

//body-parser
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//rotas
app.get("/", function(req, res){
    res.render("index")
})
app.get("/cadastro",(req, res)=>{
    res.render("cadastro")
})
app.post("/listar_cadastro", (req, res)=>{
    res.send(`Nome completo: ${req.body.nome} ${req.body.sobreNome} <br> E-mail ${req.body.email}`)
})


//abertura do servidor
app.listen(port, ()=>{
    console.log("servidor rodando...")
})