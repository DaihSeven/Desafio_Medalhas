const paises = {};

function calcularMedalhas() {
  console.log("=== Contador de Medalhas Olímpicas ===");
  console.log("Digite 'sair' a qualquer momento para encerrar\n");
  
  while (true) {
    const nome = prompt("Nome do país:");
    if (nome.toLowerCase() === 'sair') break;
   
    const ouro = parseInt(prompt("Medalhas de ouro:")) || 0;
    const prata = parseInt(prompt("Medalhas de prata:")) || 0;
    const bronze = parseInt(prompt("Medalhas de bronze:")) || 0;
    
    const total = ouro + prata + bronze;
    
    paises[nome] = { ouro, prata, bronze, total };
    
    console.log(`\n${nome} adicionado com sucesso!`);
    console.log(`Resumo: Ouro: ${ouro}, Prata: ${prata}, Bronze: ${bronze} (Total: ${total})\n`);
  }
  
  console.log("\n=== RELATÓRIO FINAL ===");
  for (const pais in paises) {
    const m = paises[pais];
    console.log(
      `${pais}:`.padEnd(15) + 
      `Ouro: ${m.ouro}`.padEnd(10) + 
      `Prata: ${m.prata}`.padEnd(10) + 
      `Bronze: ${m.bronze}`.padEnd(12) + 
      `Total: ${m.total}`
    );
  }
 
  console.log("\n=== RANKING DE MEDALHAS ===");
  
  const ranking = Object.entries(paises)
    .map(([nome, dados]) => ({ nome, total: dados.total }))
    .sort((a, b) => b.total - a.total);
 
  ranking.forEach((pais, index) => {
    console.log(`${index + 1}. ${pais.nome}: ${pais.total} medalhas`);
  });
}

const prompt = require('prompt-sync')({ sigint: true });
calcularMedalhas();