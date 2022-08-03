// 3.2.2 Positioning.js //

//Wandelt Felder in Koordinaten um
function fieldToCoords(nr){
    var x;  
    var y;
    if((nr % 18) == 0){                 // Fall tritt ein wenn es sich um ein Feld
        x = 18 * 50;                    // der letzten Spalte handelt (18,36,54, ...)
        y = (parseInt(nr / 18)) * 50;
    }else{
        x = (nr % 18) * 50;                 //ermittelt die Spalte und dann mal die Breite der Spalten
        y = (parseInt(nr / 18) + 1) * 50;   //ermittelt die Zeile und rechnet sie mal die Höhe der Zeile
    }
    var coords = [x,y];     //platziert die Koordinaten in einem Array
    return coords;          //gibt die koordinaten zurück
}

//Wandelt Koordinaten in Felder um
function koordsToFields(x,y){

    var fields = [];
    var spalte = parseInt(x/50);
    var restSpalte = (x % 50) / 50;
    var reihe = parseInt(y/50);
    var restReihe = (y % 50) / 50;
    reihe --;
    var field1 = reihe * 18 + spalte;
    fields[0] = field1;

    //bei 0,6 überschreitet der Spieler eine der Linien und ist dann auf mehreren Feldern
    if(restSpalte > 0.6 && restReihe > 0.6){
        fields[1] = field1 + 1;
        fields[2] = field1 + 18;
        fields[3] = fields[2] + 1;
    }else if(restSpalte > 0.6 && restReihe < 0.6){
        fields[1] = field1 + 1;
        fields[2] = 0;
        fields[3] = 0;
    }else if(restSpalte < 0.6 && restReihe > 0.6){
        fields[1] = 0;
        fields[2] = field1 + 18;
        fields[3] = 0;
    }else if(restSpalte < 0.6 && restReihe < 0.6){
        fields[1] = 0;
        fields[2] = 0;
        fields[3] = 0;
    }

    return fields;

}

//legt die Koordinaten für den Gegner fest.
function enemyDraw(nr){   
    if((nr % 18) == 0){                             // Fall tritt ein wenn es sich um ein Feld
        window.xEnemy = 18 * 50;                    // der letzten Spalte handelt (18,36,54, ...)
        window.yEnemy = (parseInt(nr / 18)) * 50;
    }else{
        window.xEnemy = (nr % 18) * 50;
        window.yEnemy = (parseInt(nr / 18) + 1) * 50;
    }
}
