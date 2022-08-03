// 3.2.6 TutorialLevel.js //

function setLevel(){
    
    if(level == 0){
        window.brickFields = [1,18];
        window.winPosition = [];
    }
    
    else if(level == 1){
        window.winField = [305,306,323,324];
        window.winPosition = [850,850,100,100];
    }
    
    else if(level == 3){
        window.brickFields = 
        [
        66,84,102,120,138,156,174,192,210,228,246,264,282,300,318  
        ];
        window.winPosition = [650,800,300,150];
        window.winField = [283,284,285,286,287,288];
    }
    
    else if(level == 5){
        window.brickFields = 
        [
        55, 56, 57, 58, 59, 60,                 67, 68, 69, 70, 71, 72      
        ];
        window.winPosition = [850,50,100,150];
        window.winField = [17,18,35,36,53,54];
        window.maxColectables = 6;
        window.blueBrickFields = [[61,true],[62,true],[63,true],[64,true],[65,true],[66,true]];
        
        window.colectableFields = [[283,true],[93,true],[98,true],[102,true],[106,true],[277,true]];
    }
    
    else if(level == 7){
        window.brickFields =
        [109,110,111,112,113,114,115,116,117,118,119,120,120,
        138,156,174,192,300,318];
        window.breakableBrickFields = [[210,2],[228,2],[246,2],[264,2],[282,2],[121,2],[122,2],[123,2],[124,2],[125,2],[126,2]];
        window.winField = [20,21,38,39,56,57];
        window.winPosition = [100,100,100,150];
    }   
}