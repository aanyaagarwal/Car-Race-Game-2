class Game{
    constructor(){}
    getState(){
     var gameStateref = database.ref('gameState');
     gameStateref.on("value", function(data){
         gameState = data.val();
     });
    }
    Update(state){
        database.ref('/').update({
            gameState : state
        });
    }
    Start(){
        if(gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }
}