class Form{
    constructor(){
    
    }
    display(){var title=createElement('h2')
title.html("car racing")
title.position(130,0)
var input=createInput("ENTER YOUR NAME")
input.position(130,150)
var button=createButton("start")
button.position(100,170)
var greeting=createElement('h3')
button.mousePressed(function(){
    input.hide()
    button.hide()
    var name=input.value()
    playerCount+=1
    player.updateCount(playerCount)
    player.playerinfo(name)
    greeting.html("let's start" + name)
    greeting.position(130,150)
})}
}