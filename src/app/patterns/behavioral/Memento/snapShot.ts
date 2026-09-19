class Shapshot 

private field editor L editor
private field text , curx ,cury, selectionwidth

constructor Snapshot(editor, text ,curx ,cury, selecttionwidth){
  this.editor = editor
  this.text = text
  this.curx = curx
  this.cury = cury
  this.selectwidth = selectionwidth
}

methode restore () {
   editeor.setText(text)
   editor.setcursor(curx,cury)
   editor.setselectioneidth(selctionwidth)
}