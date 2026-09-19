class ReadyState extend State 

 methdod click LodkState(){

     player.changeState(new PLayerStat(player))
 }

 method clickPlay() {
     player.startPlayBack()
     player.changeState(new PlayingState(player))
 }

 method clickNext() {
     player.netSong()
 }

 method clickPrevious() {
     player.previoussong()
 }

