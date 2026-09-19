class PlayingState extend State 

 methdod click LodkState(){

     player.changeState(new LockStat(player))
 }

 method clickPlay() {
     player.stopPlayBack()
     player.changeState(new ResdyState(player))
 }

 method clickNext() {
     if (event.doublick)
       player.netSong()
     else 
       player.fastFordord(5)
 }

 method clickPrevious() {
     if (event.dobulcik)
       player.previoud()
      else
       player.rewind(5)
 }

