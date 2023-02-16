//Prática guiada
/*
const estudante = {
    nome: 'Buda',
    sobrenome: 'Peste',
    numeroDeMatricula: 8974398764,
    notasDoSemestre: [7, 6, 8.5, 10, 9,],
}

estudante.modulo = 3

const nomeEstudante = estudante.nome
console.log(nomeEstudante)
const segundaNotaSemestre = estudante.notasDoSemestre[1]
console.log(segundaNotaSemestre)
const moduloDoEstudante = estudante.modulo
console.log(moduloDoEstudante)
*/
//fazer uma cópia do primeiro Objeto
//alterar o nome para Astrodev;
//adicionar a nota 9 às notas do semestre;
//alterar o módulo para o próximo módulo;
//imprimir o objeto com as atualizações.
/*
const copiaEstudante = {
    ...estudante
}

copiaEstudante.nome = 'Astrodev'
copiaEstudante.notasDoSemestre.push(9)
copiaEstudante.modulo = 4
console.log(copiaEstudante)
*/
/*
const copiaEstudante = {
    ...estudante,
    nome: 'Astrodev',
    modulo: 4,
    notasDoSemestre: [...estudante.notasDoSemestre,9],
}

console.log(copiaEstudante)

//Criando Array de estudantes da Labenu

const estudantesLabenu = []

estudantesLabenu.push(estudante, copiaEstudante)

console.log(`Array de estudantes da Labenu`, estudantesLabenu)
*/
//Exercício de fixação
//1
const carrinho = {
    nome: 'Matheus',
    formaDePagamento: 'Cartao de crédito',
    endereco: 'Rua Clementino Luiz Vieira, nº 428, apto 204'

}

console.log(carrinho)

//2
    carrinho.compras= [
         {
            produto:'arroz',
            preco:15.00,
            quantidade:2
        },
         {
            produto:'feijão',
            preco:17.00,
            quantidade:3
        },
         {
            produto:'kinder ovo',
            preco:1499.99,
            quantidade:1
        }
    ]

    const tipoDeProdutosDiferentes = carrinho.compras.length
    console.log(`Quantos são os tipos de produtos?: ${tipoDeProdutosDiferentes}`)

    const carrinhoPresente = {
        ...carrinho,
        nome:'Débora',
        formaDePagamento:'PIX'
    }
    console.log(carrinhoPresente)

    const unidadesTerceiroProduto = carrinho.compras[2].quantidade

    console.log(unidadesTerceiroProduto)

