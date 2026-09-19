class LockState extend State 

 methdod click LodkState(){
  if (player.playing)
     player.changeState(new PLayerStat(player))
  else 
     player.changeState(new ReaderState(player))
 }

 method clickPlay() {
 }

 method clickNext() {
 }

 method clickPrevious() {
 }

