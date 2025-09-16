class Appliction 
 field Dialog dialog ;
method initial() {
     
     config = readapplicatinConfig();
 
   if config.os = 'window'
      dialog = new WindowDialog()
   elsif condig.os = 'macos' 
     dialg = new webDialog()
   ele 
         throw new Exceptio ('error ! unknow operationsystem')
]

methiod main () {
     this.initlal()
     dialog.render()
}