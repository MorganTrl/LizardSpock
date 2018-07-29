var weapon = prompt("Choisisez votre armes entre : Pierre, Papier, Ciseaux, Lézard ou Spock");
var weaponList =  ['Pierre', 'Papier', 'Ciseaux', 'Lézard', 'Spock'];

function randomSelect() {
    var randomNb = Math.floor(Math.random(0,(weaponList.length - 1)));
    console.log var randomWeapon = weaponList[randomNb]; 
}

randomSelect();