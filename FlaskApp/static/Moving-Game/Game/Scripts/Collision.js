// 3.2.4 Collision.js //

function checkCollision(){
    
    //prüft ob der Spieler rechts oder links mit der Wand kollidiert
    if(playerPosition[0] >= 930 || playerPosition[0] <= 50){  
        window.alive = false;
    }
    //prüft ob der Spieler oben oder unten mit der Wand kollidiert
    else if(playerPosition[1] >= 930 || playerPosition[1] <= 50){
        window.alive = false;
    }
    
    //berechnet die Felder des Spielers
    window.playerFields = koordsToFields(playerPosition[0],playerPosition[1]);
    
    //prüft ob der Spieler einen der Bricks berührt.(fixe und bewegende Bricks)
    for(var i = 0; i <= 4; i++){
        if(brickFields.includes(playerFields[i]) || movingBrickFields.includes(playerFields[i])){
            window.alive = false;
        }   
    } 
    
    //prüft, ob der Spieler mit einem der blauen Bricks kolidiert
    for(var i = 0; i <= (blueBrickFields.length - 1); i++){
        if(blueBrickFields[i][1]){
            if(playerFields.includes(blueBrickFields[i][0])){
                window.alive = false;
            }  
        }   
    } 
    
    //prüft ob der Spieler mit einem kaputten Brick kollidiert
    for(var i = 0; i <= (breakableBrickFields.length - 1); i++){
        if(breakableBrickFields[i][1] > 0){
            if(playerFields.includes(breakableBrickFields[i][0])){
                window.alive = false;
            }  
        }   
    } 
    
    //prüft, ob der Spieler mit dem Gegner kollidiert
    if(playerFields.includes(activeEnemyField)){
       window.alive = false;
    }
    
    //prüft, ob der Spieler ein Colectable einsammelt
    for(var i = 0; i<=(colectableFields.length - 1); i++){
        if(colectableFields[i][1]){
            if(playerFields.includes(colectableFields[i][0])){
                console.log("eingesammelt!");
                window.colectableFields[i][1] = false;
                colectableScore ++;
                console.log(colectableScore);
            } 
        } 
    }
    
    for(var i = 0; i<=2; i++){
        balls[i][4] = koordsToFields(balls[i][2],balls[i][2])
    }
    
    //prüft, ob die Bälle aus dem Spielfeld fliegen
    for(var i = 0; i<=2; i++){
        if(balls[i][2] >= 930 || balls[i][2] <= 50 || balls[i][3] >= 930 || balls[i][3] <= 50){
            reload(i);
        }  
    }
    
    //prüft, ob der Ball mit den Steinen Kolidiert
    for(var i = 0; i<=2; i++){
        if(balls[i][0] == false){
            var fields = koordsToFields(balls[i][2],balls[i][3]);
            window.balls[i][4] = fields;
            
            //Überprüft, ob der Ball mit einem Stein kollidiert
            for(var n = 0; n<= 3; n++){
                if(brickFields.includes(fields[n])){
                    reload(i);
                }
            }
            //überprüft, ob der Ball mit einem der blauen Bricks kollidiert
            for(var n = 0; n<= (blueBrickFields.length - 1); n++){
                if(fields.includes(blueBrickFields[n][0])){
                    reload(i);
                }    
            }
            //überprüft, ob der Ball mit einem kaputten Brick kollidiert
            for(var n = 0; n<= (breakableBrickFields.length - 1); n++){
                
                if(fields.includes(breakableBrickFields[n][0])){
                    if(breakableBrickFields[n][1] > 0){
                        reload(i);
                        window.breakableBrickFields[n][1] -= 1;
                        console.log(balls);   
                    }
                }    
            }
            //überprüft ob der Ball einen Gegner trifft
            if(fields.includes(activeEnemyField)){
               window.enemyFields = [];
            }            
        }
    }
    
    //Nachladen der Bälle
    function reload(nr){
        window.balls[nr] = [true];
        window.ballCount += 1;
    } 
}