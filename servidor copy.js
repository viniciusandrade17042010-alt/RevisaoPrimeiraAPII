const express = require("express");

const app = express();
app.use(express.json());

let ALUNOS = [
    { id: 1, nome: "Bernardo", curso: "Desenvolvimento de sistemas" },
    { id: 2, nome: "Camily", curso: "Redes de computadores" },
    { id: 3, nome: "Kaue", curso: "Desenvolvimento de sistemas" },
    { id: 4, nome: "Maria", curso: "Banco de dados" },
    { id: 5, nome: "Marjory", curso: "Desenvolvimento de sistemas" },
];

app.get("/", (req, res) => {
    return res.json({
        mensagem: "API Alunos funcionando"
    });
});

app.get("/alunos", (req, res) => {
    return res.json(ALUNOS);
});

app.post("/alunos/cadastrar", (req, res) => {
    const { nome, curso } = req.body;

    if (!nome || !curso) {
        return res.status(400).json({ msg: "Nome e curso são obrigatórios" });
    }

    const id = ALUNOS.length > 0 ? ALUNOS[ALUNOS.length - 1].id + 1 : 1;

    const novoAluno = {
        id,
        nome,
        curso,
    };

    ALUNOS.push(novoAluno);

    return res.status(201).json({
        msg: "Aluno cadastrado com sucesso.",
        aluno: novoAluno
    });
});

app.get("/alunos/:valor", (req, res) => {
    const valor = Number(req.params.valor);
    const aluno = ALUNOS.find(aluno => aluno.id === valor);

    if (!aluno) {
        return res.status(404).json({ msg: "Aluno não encontrado" });
    }

    return res.status(200).json(aluno);
});

app.put("/alunos/:valor", (req, res) => {
    const valor = Number(req.params.valor);
    const { nome, curso } = req.body;

    if (!nome || !curso) {
        return res.status(400).json({ msg: "Nome e curso são obrigatórios" });
    }

    const indice = ALUNOS.findIndex(aluno => aluno.id === valor);

    if (indice === -1) {
        return res.status(404).json({ msg: "Aluno não encontrado" });
    }

    ALUNOS[indice] = {
        ...ALUNOS[indice],
        nome,
        curso
    };

    return res.status(200).json({
        msg: "Aluno atualizado com sucesso",
        aluno: ALUNOS[indice]
    });
});

app.delete("/alunos/:valor", (req, res) => {
    const valor = Number(req.params.valor);
    const indice = ALUNOS.findIndex(aluno => aluno.id === valor);

    if (indice === -1) {
        return res.status(404).json({ msg: "Aluno não encontrado" });
    }

    const [alunoRemovido] = ALUNOS.splice(indice, 1);

    return res.status(200).json({
        msg: "Aluno removido com sucesso",
        aluno: alunoRemovido
    });
});

const PORTA = 3000;
app.listen(PORTA, () => {
    console.log("Servidor iniciado com sucesso");
    console.log(`http://localhost:${PORTA}`);
});