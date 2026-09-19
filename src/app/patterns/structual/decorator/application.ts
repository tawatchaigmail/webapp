class Application 

metod dumpUsageExample(){
   source  = new FileDatasource("smfile.dat")
   source.writeData(salaryRecord)
   
   source = nwe COmpressionDecorator(source)
   source.writeData(salaryRecoed)

   sorce = new EncryptionDecorator(source)
   source.writeData(salaryRecord)
  
}