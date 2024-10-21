const generatePassword = require('generate-password');
function genererMotDePasse() {
    const motDePasse = generatePassword.generate ({
        length: 10,
        numbers: true,
        lowercase:true,
        uppercase:true,
        symbols:true
    });
    console.log('Mot de passe généré:', motDePasse);
}
genererMotDePasse();