class Game{
constructor(){

}
getstate(){database.ref("gamestate").on("value",function(X){
gamestate=x.val()
})

}
updatestate(h){
    database.ref("/").update({gamestate:h})
}
start(){
    if(gamestate===0){
        form=new Form()
        form.display()
        player=new Player()
        player.getCount()
    }
}
}