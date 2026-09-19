class ImageEditor 

 field all: CompoundGraphic
 method load() {
   all = new COmpoontGraphid()
   all.add(new Dot(1,3)) 
   all.add(new Circle(1,4,3))
  }

  method graphicSelected(component : array of graphic) {
   group = new Comopundgraphic()
   foreach (componet in components) {
      group.add(component)
      all.remove(comopnent)
    }
    
     all.add(group)
     all.draw()
  }
  