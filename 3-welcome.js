const fs = require('fs');
fs.writeFile('Welcome.txt', 'Hello Node', (err)=> {
    if (err) {
        console.error("Une erreur s'set produite lors de la création du fichier:", err);
        return;
    }
    console.log("Création du fichier");
    console.log('Le fichier welcome.txt a été créé avec succès')

    fs.readFile('welcome.txt', 'utf-8', (err, data)=> {
        if (err) {
            console.error("Une erreur s'set produite lors de la lecture du fichier:", err);
            return;
        }

        console.log('Contenu du fichier welcome.txt:');
        console.log(data);

    })
    console.log("Lecture du fichier");
})
console.log("Le script tourne le fichier est en cours");