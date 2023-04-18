// 3.2.3 Check.js //

//Funktionen für Checks
        
//löscht die blauen Blöcke, wenn man genügend colectables gesammelt hat
function checkColectables(){
    if(colectableScore >= maxColectables){
        for(var i = 0; i <= (blueBrickFields.length - 1); i++){
            window.blueBrickFields[i][1] = false;
        }
    }
}

//überprüft, ob der Spieler gewonnen hat und erhöht dann das Level
function checkForWin(){
    for(var i = 0; i <= 4; i++){
        if(winField.includes(playerFields[i])){
            window.movingBrickFields = [];
            window.toMoveBricks = [];
            window.brickFields = [];
            window.enemyFields = [];
            window.playerFields = [];
            window.winPosition = [];
            window.playerPosition[0] = startPosition[0];
            window.playerPosition[1] = startPosition[1];
            window.colectableFields = [];
            window.breakableBrickFields = [];
            window.direction = "null";
            window.level += 1;

        }
    }   
}