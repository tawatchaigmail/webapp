clss command 
private backup

method makdBackup(){
  backup = editor.craateShnapshot()
}

method undo(){
   if (back != null)
       backup.restore()
}