class treeFactory 
  
  static field tranTypes :collection of rreeType

  static method getTreeType(name.color,texture) {
     type = new treeType(name,color,texture)
     if(type = null)
       type  = new treeTpe(name ,color,texture)
       treeType.add(type)
     return type
  }