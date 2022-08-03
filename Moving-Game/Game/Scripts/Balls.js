// 3.2.7 Balls.js //

//Funktion um zu schießen
function shoot(){
    //wird nur ausgeführt, wen der Spieler auch Bälle zur verfügung hat
    if(ballCount > 0){ 
        //Prüft, welcher Ball noch nicht geschossen wurde, und legt dann für ihn Werte fest
        for(var i = 0; i<=2; i++){
            //wenn der Ball noch nicht geschoßen wurde
            if(balls[i][0]){        
                window.balls[i] = [false,direction,playerPosition[0],playerPosition[1]]; //legt die Werte für den Ball fest
                window.ballCount -= 1;  //verringert den BallCount, damit nicht mehr als 3 Bälle geschossen werden können
                break;  //bricht dann ab, damit nur ein Ball geschossen wird
            }
        }
    }
}

//lädt die Bälle nach
function reload(nr){
    window.balls[nr][0] = true; //true gibt an, ob der Ball noch da ist
    window.ballCount += 1;  //erhöht den BallCount wieder, damit wieder geschossen werden kann
}