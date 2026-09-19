class editer

private field text , curx, cury, selwctionwidn

method setText(text){
  this.text = text
}

method setCuresor(x,y){
   this.curx = x
   this.cury = y
}

method setDelecionWidth(width){
   this.selectionwidth = width
}

method createSnapshot() : snapshot {
   return new Shapshot(this, text. curx,cury, selcttionwidth)
}