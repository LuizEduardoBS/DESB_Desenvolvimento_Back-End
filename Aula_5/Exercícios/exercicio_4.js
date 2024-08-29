clinica = [];

console.log(clinica);

animais = ['Cachorro', 'Tartaruga', 'Jabuti'];

for(i=0;i<animais.length;i++) {
    clinica.push(animais[i])
    console.log(`Fila de animais na clinica: ${clinica}`);
} 

while(clinica.length > 0) {
    clinica.shift();
    console.log(`Fila de animais na clinica: ${clinica}`);
}

console.log('Fila finalizada.');