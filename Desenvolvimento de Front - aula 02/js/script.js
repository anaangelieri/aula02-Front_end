// let nome = prompt("Informe seu nome: ");
// let ident = document.getElementById("id1");
// ident.textContent = nome;
// ident.innerHTML = nome;
// ident.innerText = nome;

// let n1 = Number(prompt ("Digite a primeira nota: "));
// let n2 = Number(prompt ("Digite a segunda nota: "));
// let m = (n1 + n2)/2;

// let nota1 = document.getElementById("nota1");
// let nota2 = document.getElementById("nota2");
// let media = document.getElementById("media");

// nota1.textContent = n1;
// nota2.textContent = n2;
// media.textContent = m;


// Strings e Arrays
a = "Ana";
b = new String("Ana Laura");
console.log(a);
console.log(b);
// nomedavariável.includes ("") procura se há uma letra na string
// nomedavariável.startsWith("") procura se a string começa com aquele caracter
// para saber o índice de elemento é usado nomedavariável.indexOf(""), quando não é encontrado, retorna-se
// para substituir uma letra por outra é usado nomedavariável.replace ("letra que está na string", "letra que você quer que apareça no lugar"). Se quiser substituir mais de uma mesma letra é só adicionar All depois de replace
// Para separar duas palavras é usado o nomedavariável.split("o que está separando-as")
// o replace não altera na origem, altera no momento da execução
// para colocar em maiúsculo, usar nomedavariável.toUpperCase, Lower é ao contrário
// para pegar uma parte da palavra é só usar nomedavariável.substr(indice da primeira letra, indice da ultima letra)
// para repetir a palavra, é só usar nomedavariável.repeat(quantas vezes quer repeti-la)

//no JavaScript podemos usar no Array dados de tipos diferentes
// parece com matriz, vamos usar para pegar um elemento o nome do array [indice da linha][indice da coluna]
// com o nomedoarray.unshift (valor que deseja adicionar)podemos adicionar elementos antes do array, para o final é usado nomedoarray.push (valor que deseja adicionar)
// com o nomedoarray.splice adiciona valores a partir de um indice (indice que quero inserir, quantidade que quero que seja deletado, o que eu quero inserir)
// para pegar algum elemento é usado nomedoarray.indexOF(indice do elemento que eu quero pegar)
// se eu quiser saber  último elemento que estou buscando é só adicionar last antes de IndexOf
// nomedoarray.pop remove o último elemento do array quando não é passada nenhuma instrução (ele não recebe parâmetro)
// para remover o primeiro elemento do array é usado nomedoarray.shift(número do elemento que deseja excluir)
// se fizer nome do array = [], ele esvariará, outra forma é nomedoarray.length = 0
//para unir arrays é let uniao = nomearray1.concat(nomearray2)
// para separar arrays é usado nomedoarrayuniao.slice(indice que começará a ser separado)

//para criar um objeto são usadas {} e dentro delas podem ser separadas por vírgulas, para atribuir valor são usados dois pontos
// para adicionar uma {} dentro do objeto, é só colocar o nomedoobjeto.temaqueeuqueroadicionar = "o que eu quero adicionar"
// para acessar algum obj dentro de um obj, é só colocar um ponto final entre eles
// para copiar o conteúdo de um objeto em outro é usado nomedoobjeto = {...nomedooutroobjeto};