class Form{
    constructor(){}

    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(130, 0);

        var input = createInput("Name");
        input.position(130, 160);

        var button = createButton('Play');
        button.position(250, 200);

        var Greeting = createElement('h3');

        button.mousePressed(function(){
            input.hide();
            button.hide();
            var Name = input.value();
            playerCount = playerCount + 1;
            player.Update(Name);
            player.UpdateCount(playerCount);

            Greeting.html("Hello" + Name);
            Greeting.position(200, 200);

        })
    }
}