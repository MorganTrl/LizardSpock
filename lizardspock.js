const weaponList =  ['Pierre', 'Papier', 'Ciseaux', 'Lézard', 'Spock'];
let player1 = 0;
let player2 = 0;

function startGame() {
    /* récupération des boutons et déclenchement évenement*/
    const pierre = document.getElementById('pierre');
    const papier = document.getElementById('papier');
    const ciseaux = document.getElementById('ciseaux');
    const lezard = document.getElementById('lezard');
    const spock = document.getElementById('spock');

    const infos = document.getElementById('infos');
    const points = document.getElementById('points');
    pierre.onclick = function(){
        playerWeaponChoice('Pierre');
    }    
    papier.onclick = function(){
        playerWeaponChoice('Papier');
    }    
    ciseaux.onclick = function(){
        playerWeaponChoice('Ciseaux');
    }    
    lezard.onclick = function(){
        playerWeaponChoice('Lézard');
    }
    spock.onclick = function(){
        playerWeaponChoice('Spock');
    }
}

/* Le joueur choisit son arme*/
function playerWeaponChoice(weaponChoice) {
    playerWeapon = weaponChoice;
    contest(playerWeapon, randomSelect());
}


/*Selectionne l'arme du joueur virtuel*/
function randomSelect() {
    let randomNb = Math.floor((Math.random() * (weaponList.length - 1)));
    const randomWeapon = weaponList[randomNb];
    return randomWeapon;
}

/*Fonction qui détermine gagnant et perdant*/
function contest(weapon1, weapon2) {

    switch (weapon1) {

        case ('Pierre') :

            switch (weapon2) {
                case 'Ciseaux' :
                case 'Lézard':    
                    infoWin(weapon1, weapon2);
                    break;
                case 'Spock':
                case 'Papier':
                    infoLose(weapon1,weapon2);
                    break;
                case 'Pierre':
                    infoEqual(weapon1,weapon2);
                    break;
                default:
                    console.log('Erreur');
                    break;
            }
            break;
         
        case ('Papier') :
            switch (weapon2) {
                case 'Pierre' :
                case 'Spock':    
                    infoWin(weapon1, weapon2);
                    break;
                case 'Lézard':
                case 'Ciseaux':
                    infoLose(weapon1,weapon2);
                    break;
                case 'Papier':
                    infoEqual(weapon1,weapon2);
                    break;
                default:
                    console.log('Erreur');
                    break;
            }
            break;

        case ('Ciseaux') :
            switch (weapon2) {
                case 'Papier' :
                case 'Lézard':    
                    infoWin(weapon1, weapon2);
                    break;
                case 'Spock':
                case 'Pierre':
                    infoLose(weapon1,weapon2);
                    break;
                case 'Ciseaux':
                    infoEqual(weapon1,weapon2);
                    break;
                default:
                    console.log('Erreur');
                    break;
            }
            break;

        case ('Lézard') :
            switch (weapon2) {
                case 'Papier' :
                case 'Spock':    
                    infoWin(weapon1, weapon2);
                    break;
                case 'Pierre':
                case 'Ciseaux':
                    infoLose(weapon1,weapon2);
                    break;
                case 'Lézard':
                    infoEqual(weapon1,weapon2);
                    break;
                default:
                    console.log('Erreur');
                    break;
            }
            break;
        
        case ('Spock') :
            switch (weapon2) {
                case 'Ciseaux' :
                case 'Pierre':    
                    infoWin(weapon1, weapon2);
                    break;
                case 'Lézard':
                case 'Papier':
                    infoLose(weapon1,weapon2);
                    break;
                case 'Spock':
                    infoEqual(weapon1,weapon2);
                    break;
                default:
                    console.log('Erreur');
                    break;
            }
            break;
    }    
    
    /* fonction d'info résultats*/
    function infoWin(weapon1, weapon2) {
        player1 = player1 + 1;
        console.log("player 1 : "+ player1);
        points.innerHTML = "Joueur : " + player1+ "<br>Ordinateur : " + player2;
        infos.innerHTML = "Joueur joue : " +weapon1+ ". <br> Ordinateur joue : "+weapon2+".<br> Bravo ! Vous remportez cette manche !<br>";
    }
    function infoLose(weapon1, weapon2) {
        player2 = player2 + 1;
        console.log('player 2 : ' + player2);
        points.innerHTML = "Joueur : " + player1 + "<br>Ordinateur : " + player2;        
        infos.innerHTML = "Joueur joue : " +weapon1+ ". <br> Ordinateur joue : "+weapon2+".<br> Perdu ! Retentez votre chance !<br>";
    }
    function infoEqual(weapon1, weapon2) {
        infos.innerHTML = "Joueur joue : " +weapon1+ ". <br> Ordinateur joue : "+weapon2+".<br>  Égalité !<br>";
    }
}


document.onload = startGame();
