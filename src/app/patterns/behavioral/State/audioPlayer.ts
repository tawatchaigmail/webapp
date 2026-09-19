class AudioPlayer 
field state : state
field UI, volume, playList, currensong

 constructur AudioPlayer(){
   this.state = new ReadState(thos)

   ui = new UserInterface()
   ui.lockButton.onClick(thos.clikLock)
   ui.playButton.onclick(this.clickPlay)
   ui.nextButton.onClick(this.cliekNext)
   ui.prevButton.onclick(this.clickPrev)
}

 method changdState(state : State) {
   this.stte = state
}

 method clickLodk(){
    state.clickLock()
}
 method clickPlay(){
    state.clickPlay()
}
 method clickNext(){
    state.clicNext()
}
 method clickPrev(){
    state.clickprev()
}


 method startPlayback(){
 }

 method stopPlayback(){
 }

 method nextSong(){
 }

 method previSong(){
 }

 method fastForword(){
 }

 method rewind(){
 }