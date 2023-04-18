// 3.2.8 Movement.js //

//Funktionen für Bewegung   

//bewegt den Gegner
function moveEnemy(){
    if(enemyFields !=  []){  //wird nur ausgeführt, wenn es auch einen Gegner gibt

        if(enemyPointer >= (enemyFields.length - 1)){
            window.moveType = "backward"
        }else if(enemyPointer <= 0){
            window.moveType = "forward"
        }

        if(moveType == "forward"){
            enemyPointer++;
        }else if(moveType == "backward"){
            enemyPointer--;
        }

        window.activeEnemyField = enemyFields[enemyPointer];

        enemyDraw(enemyFields[enemyPointer]);
    }
}

//bewegt den Spieler
function move(){

    if(direction == "up"){
        playerPosition[1] -= speed;
    }else if(direction == "down"){
        playerPosition[1] += speed;
    }else if(direction == "right"){
        playerPosition[0] += speed;
    }else if(direction == "left"){
        playerPosition[0] -= speed;
    }
}

//sorgt für die Positionsänderung der Bricks
function moveBricks(){
    var count = movingBrickFields.length;

    if(count > 0){

        for(var i = 0; i<=(movingBrickFields.length - 1);i++){

            var direction = toMoveBricks[i][2];

            //bewegt die Bricks horizontal
            if(direction == "h"){

                if(movingBrickFields[i] >= (toMoveBricks[i][0] + toMoveBricks[i][1])){
                    window.toMoveBricks[i][3] = "-";
                }else if(movingBrickFields[i] <= toMoveBricks[i][0]){
                    window.toMoveBricks[i][3] = "+";
                }

                if(toMoveBricks[i][3] == "+"){
                    window.movingBrickFields[i] += 1; 
                }
                else if(toMoveBricks[i][3] == "-"){
                    window.movingBrickFields[i] -= 1; 
                }

            //bewegt die Bricks Vertikal    
            }else if(direction == "v"){

                if(movingBrickFields[i] >= (toMoveBricks[i][0] + (18 * toMoveBricks[i][1]))){
                    window.toMoveBricks[i][3] = "-";
                }else if(movingBrickFields[i] <= toMoveBricks[i][0]){
                    window.toMoveBricks[i][3] = "+";
                }


                if(toMoveBricks[i][3] == "+"){
                    window.movingBrickFields[i] += 18; 
                }else if(toMoveBricks[i][3] == "-"){
                    window.movingBrickFields[i] -= 18; 

                } 
            }  
        }     
    }  
}

//bewegt die Bälle
function moveBalls(){
    for(var i = 0; i<=2; i++){
        if(balls[i][0] == false){
           if(balls[i][1]=="left"){
                window.balls[i][2] -= 1;
            }else if(balls[i][1]=="right"){
                window.balls[i][2] += 1;
            }else if(balls[i][1]=="up"){
                window.balls[i][3] -= 1;
            }else if(balls[i][1]=="down"){
                window.balls[i][3] += 1;
            } 
        }
    }
}