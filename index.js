import chalk from 'chalk';
import fs from 'fs';

const trataErro = (erro) => {
    throw new Error(chalk.red(erro.code, 'sem arquivo'));
}

async function pegaArquivo (caminhoDoArquivo) {
    const encoding = 'utf-8';
    try {
        const texto = await fs.promises
        .readFile(caminhoDoArquivo, encoding)
        console.log(chalk.green(texto))
    } catch(erro) {
        trataErro(erro)
    } 
}

// const pegaArquivo = (caminhoDoArquivo) => {
//     const encoding = 'utf-8';
//     fs.promises
//     .readFile(caminhoDoArquivo, encoding)
//     .then((texto) => console.log(chalk.green(texto)))                 // significa então
//     .catch((erro => trataErro(erro)))                   //pega erro
// }


// const pegaArquivo = (caminhoDoArquivo) => {
//     const encoding = 'utf-8';
//     fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//         if (erro) {
//             trataErro(erro)
//         }
//         console.log(chalk.green(texto))
//     })
// }

pegaArquivo('./arquivos/texto1.md')