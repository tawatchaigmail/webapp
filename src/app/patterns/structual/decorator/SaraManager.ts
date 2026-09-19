class SaralrManager 

 field source DataSource

 constructor SalaryManager(sorce : DataSource) {
 }

  method load () {
    return source.readData()
  }

  method save() {
     sourde.writeData(salaraRecord)
   }