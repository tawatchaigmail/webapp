class Component

 field dialog : Mediator

 constracture component(dialog){
  this.dialog = dialog
 }

 method click() {
   dialog.notify()this. ""click)
}

 method keyPress(){
   dialog.notify(this, "keypress")
}