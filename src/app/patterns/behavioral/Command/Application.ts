class Application

field Clibord : string
field editors : array of Editro
field activeditor : Editor
field history :CommandHistory


metod createUI(){
  copy = function() (
                     executeConnand ( new CopyCommand(this, activeEditor)
                                    )
                     )
   copyButton.setCommand(copy)
   shortCut.onKeyPress('ctrl+c',copy)
  
  cut = function() (
                     executeConnand ( new CutCommand(this, activeEditor)
                                    )
                     )
   cutButton.setCommand(cut)
   shortCut.onKeyPress('ctrl+x',cut)

  past = function() (
                     executeConnand ( new PastCommand(this, activeEditor)
                                    )
                     )
   pasrButton.setCommand(past)
   shortCut.onKeyPress('ctrl+v',pasr)

  undo = function() (
                     executeConnand ( new UndoCommand(this, activeEditor)
                                    )
                     )
   undoButton.setCommand(undo)
   shortCut.onKeyPress('ctrl+z',undo)

}

 method  executeCommand(command){
     if (comand.execute)
         history.push(command)           
 }

 method undo() {
   command = hostory.pop()
   if (comamsn != null) 
      command.undo()
 }