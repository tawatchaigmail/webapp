class rectangle extend shap

field with : int
field height :int

constructore ractanger ( source : ractangel) {
  super(source)
  this.with = source.with
  this.height = source.height
  
}

method clone() : shap {
   return new rectangle(this)
}