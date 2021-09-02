const fs = require("fs");

function modificarUsuario(nome, curso, categoria){
    fs.readFile("./usuario.json", {encoding: "utf-8"}, (err, dados) => {
        if(err){
            console.log("Um erro aconteceu!!");
        }else{
            let conteudo = JSON.parse(dados);
    
            conteudo.nome = nome;
            conteudo.curso = curso;
            conteudo.categoria = categoria;
            
            fs.writeFile("./usuario.json", JSON.stringify(conteudo), err => {
                if(err){
                    console.log("Um erro aconteceu durante a escrita");
                };
            });
        };
    });
};

modificarUsuario("Jose", "PHP do jeito certo", "php")


// fs.writeFile("./wendel.campos", "Novo Conteudo do arquivo2", err => {
//     if(err){
//         console.log("Erro na escrita!!")
//     }
// })

// fs.readFile("./wendel.campos", {encoding: 'utf-8'}, (erro, dados) => {
    
//     if(erro){
//         console.log("Ocorreu uma falha durante a leitua do arquivo")
//     }else{
//         console.log(dados)
//     }
// });