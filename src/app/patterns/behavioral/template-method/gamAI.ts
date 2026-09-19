class gameSI

method turn() {
    collectonRedource()
    builerStructores()
    builderints()
    attack()
}


 method collectonRedource() {
    foreach (a in  this.builerStructures) do 
       a.collect()
 }

 abstract method builerStructores() 
 abstract method builderints()

  method attack(){
   eneny = closeetEnemy()
   if (enemy == null)
       sendScouts(map.center)
   else 
       sendwarieo(enemy.position)
  }

 abstract method seneCouts(position)
 abstract method sewarraioors(position)