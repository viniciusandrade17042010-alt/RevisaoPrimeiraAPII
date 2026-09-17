const express = require("express");

const app = express();
app.use(express.json());

let ALUNOS = [
    {id: 1, nome: "Bernardo", curso: "Desenvolvimento de sistemas"},
    {id: 2, nome: "Camily", curso: "Redes de computadores"},
    {id: 3, nome: "Kaue", curso: "Banco de dados"},
    {id: 4, nome: "Maria", curso: "Administração"},
    {id: 5, nome: "Marjory", curso: "Desenvolvimento de sistemas"},
];

app.get("/",(req,res) =>{
    res.json({
        mensagem: "API Alunos funcionando"
    })
});

app.get("/alunos",(req, res) =>{
    res.json(ALUNOS);
});

app.post("/alunos/cadastrar", (req, res)=>{
    // console.log(req.body);
    const {nome, curso} = req.body
    // console.log("Nome:" + nome);
    // console.log(`Curso: ${curso}`);

    if(!nome || !curso){
        return res.status(400).json({msg: "Nome e curso são obrigatorio"})
    }

    const id = ALUNOS.length > 0 ? ALUNOS[ALUNOS.length - 1].id + 1 : 1;                                     
                                                         
    const novoAluno = {            
        id : id,
        nome : nome,
        curso : curso
    };

    ALUNOS.push(novoAluno);

    res.status(201).json({msg: "Aluno cadastrado com sucesso."})

});

app.get("/alunos/:valor", (req,res) =>{
    console.log(req)
    const valor = Number(req.params.valor);

    const aluno = ALUNOS.find(aluno => aluno.id === valor);
    
    if(!aluno){
        return res.status(404).json({msg: "Aluno não encontrado"});
    }
    res.status(200).json(aluno);
});

app.put("/alunos/:valor",(req, res)=>{
    const valor = Number(req.params.valor);
    const {nome, curso} = req.body;

    if(!nome || !curso){
        return res.status(400).json({msg: "Nome e curso são obrigatorio"})
    }

    const indice = ALUNOS.findIndex(aluno => aluno.id === valor);
    // console.log(indice)
    if(indice === -1){
        return res.status(404).json({msg: "Aluno não encontrado"})
    }

    ALUNOS[indice] ={
        id: valor,
        nome : nome,
        curso: curso
    };
    
    res.status(200).json({msg: "Aluno atualizado com sucesso"});

})


const PORTA = 3000;
app.listen(PORTA, ()=>{
    console.log("Servidor iniciado com sucesso");
    console.log(`http://localhost:${PORTA}`);
})
const express = require("express");

const app = express();
app.use(express.json());

let ALUNOS = [
    {id: 1, nome: "Bernardo", curso: "Desenvolvimento de sistemas"},
    {id: 2, nome: "Camily", curso: "Redes de computadores"},
    {id: 3, nome: "Kaue", curso: "Banco de dados"},
    {id: 4, nome: "Maria", curso: "Administração"},
    {id: 5, nome: "Marjory", curso: "Desenvolvimento de sistemas"},
];

app.get("/",(req,res) =>{
    res.json({
        mensagem: "API Alunos funcionando"
    })
});

app.get("/alunos",(req, res) =>{
    res.json(ALUNOS);
});

app.post("/alunos/cadastrar", (req, res)=>{
    // console.log(req.body);
    const {nome, curso} = req.body
    // console.log("Nome:" + nome);
    // console.log(`Curso: ${curso}`);

    if(!nome || !curso){
        return res.status(400).json({msg: "Nome e curso são obrigatorio"})
    }

    const id = ALUNOS.length > 0 ? ALUNOS[ALUNOS.length - 1].id + 1 : 1;                                     
                                                         
    const novoAluno = {            
        id : id,
        nome : nome,
        curso : curso
    };

    ALUNOS.push(novoAluno);

    res.status(201).json({msg: "Aluno cadastrado com sucesso."})

});

app.get("/alunos/:valor", (req,res) =>{
    console.log(req)
    const valor = Number(req.params.valor);

    const aluno = ALUNOS.find(aluno => aluno.id === valor);
    
    if(!aluno){
        return res.status(404).json({msg: "Aluno não encontrado"});
    }
    res.status(200).json(aluno);
});

app.put("/alunos/:valor",(req, res)=>{
    const valor = Number(req.params.valor);
    const {nome, curso} = req.body;

    if(!nome || !curso){
        return res.status(400).json({msg: "Nome e curso são obrigatorio"})
    }

    const indice = ALUNOS.findIndex(aluno => aluno.id === valor);
    // console.log(indice)
    if(indice === -1){
        return res.status(404).json({msg: "Aluno não encontrado"})
    }

    ALUNOS[indice] ={
        id: valor,
        nome : nome,
        curso: curso
    };
    
    res.status(200).json({msg: "Aluno atualizado com sucesso"});

})

app.delete("/aluno/:valor", (req, res)=>{
    const valor = Number(req.params.valor);

    const indice = ALUNOS.findIndex(aluno => aluno.id === valor);

    const alunoEncontrado = ALUNOS(indice);

    ALUNOS.slice(indice, 1);
})

const PORTA = 3000;
app.listen(PORTA, ()=>{
    console.log("Servidor iniciado com sucesso");
    console.log(`http://localhost:${PORTA}`);
})