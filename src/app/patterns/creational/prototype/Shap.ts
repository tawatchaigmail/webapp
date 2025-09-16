abstract Shap 

field x : int
field y : int

Color : String

constructor shap()

costructure shap(sourc : Shap) {
  this()
  this.x = source.x
  this.y = source.y
  this.color = source.color;
}

abstract clone() : shap  