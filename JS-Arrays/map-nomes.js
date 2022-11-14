const nomes = ['ana Julia', 'Caio vinicius', ' Bia silva'];

const nomesPadronizados = nomes.map((nome)=>{
    return nome.toLocaleUpperCase();
});

console.log(nomesPadronizados);