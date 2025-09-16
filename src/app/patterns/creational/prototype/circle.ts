class circle extend shap

field radian : int


constructore circle ( source : circle) {
  super(source)
  this.radian = source.radian

  
}

method clone() : shap {
   return new circke(this)
}