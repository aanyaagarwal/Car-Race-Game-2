class Player{
    constructor(){}
    getCount(){
     var playerCountref = database.ref('playerCount');
     playerCountref.on("value", function(data){
         playerCount = data.val();
     });
    }
    UpdateCount(count){
        database.ref('/').update({
            playerCount : count
        });
    }
    Update(name){
        var playerIndex = "player" + playerCount
        database.ref(playerIndex).set({
            Name : name
        })
    }

}