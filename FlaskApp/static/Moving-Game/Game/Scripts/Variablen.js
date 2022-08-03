// 3.2.1 Variablen.js //

//  VARIABLEN //

var direction = "null";                     //Richtung in die sich die Spielfigur bewegt
var startPosition = [65,915];               //Position auf der die Spielfigur anfängt
var playerPosition = [65,915];              //Positionen des Spielers auf dem Canvas, anfangs gleich Startposition
var playerFields = [];                      //Felder die die Spielfigut berührt
var alive = true;                           //ändert sich, wenn man stirbt
var startField = [50,900];                  //um das Startfeld zu malen
var winField = [115,116,133,134];           //Felder auf denen man gewinnt
var winPosition = [];                       //Position an der das Gewinn-Feld gemalt wird
var level = 0;                              //Aktuelles Level
var speed = 1;                              //spieler Geschwindigkeit

//Steine
var brickFields = [1,18];       //Felder an dennen sich Bricks befinden          
var toMoveBricks = [];          //Bewegung der Bricks [Startfeld,Anzahl der Bewegungen, Bewegungsart, Bewegungsrichtung]
var movingBrickFields = [];     //Sich bewegende Bricks
var blueBrickFields = [];       //gibt die Stellen an denen die blauen Bricks sind, 
                                //gehen kaputt, wenn genug colectabels eingesammelt werden  
var breakableBrickFields = [];  //Felder an denen die zerstörbaren Bricks sind, können abgeschossen werden

//Gegner
var enemyFields = [];           //Felder, über die der Gegner läuft
var xEnemy;                     //dient der Positionierung des Gegners
var yEnemy;
var enemyPointer;               //gibt die Stelle im Gegner-Array an
var moveType;                   //dient der Bewegung des Gegners
var activeEnemyField;           //aktives Feld aus enemyFields

//Collectables
var colectableFields = [];      //Felder auf denen sich die Colectables befinden
var colectableScore = 0;        //Gibt an, wie viele Colectables der Spieler schon eingesammelt hat
var maxColectables = [];        //gibt an, wie viele Colectables eingesammelt werden müssen

//Bälle
var ballCount = 3;              //Anzahl der verfügbaren Bälle
var balls = [[true],[true],[true]];                 
//jeder Ball hat einen status (true/false) 
//und wenn sie abgeschossen wurden:
//eine Richtung (up/down/right/left), eine Position (x,y)
//und ein field, welches der Kollisionsabfrage dient

// BILDER //
            
var brick = new Image();                //Super-Mario-Stein-Block
brick.src = "Assets/brick.png";         //gibt den Pfad an 

var blueBrick = new Image();            //Blauer stein, verschwindet, wenn collectables eingesammelt 
blueBrick.src = "Assets/blueBrick.png";

var enemy = new Image();                // Bild vom Gegener
enemy.src = "Assets/Gegner.png";

var colectable = new Image();           // collectable Bild, müssen eingesammelt werden
colectable.src = "Assets/blueColectable.png";

var breakableBrick = new Image();       // Bricks, die kaputt geschossen werden könne
breakableBrick.src = "Assets/brokenBrick.png";

var breakableBrick2 = new Image();      // zweiter Status, wenn angeschossen
breakableBrick2.src = "Assets/brokenBrick2.png";


var music = new Audio();
music.src = "Assets/background.mp3";
music.loop = true;