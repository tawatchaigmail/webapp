abstract class command

protected files app : Application
protected field editor:editro
protected field backup : text

 constractor Command(app : Application, editoer : Editor){
    this.app = app
    this.editor = editor
 }

 method saveBackup() {
    backup = editor.text
 }

method unfo() {
    editor.text = backup
}

abstract methoe execute()