class AplocationConfigurator

method configuratorExamole() {
     source = new FoleDataSoource("salary.dat")
     if (enableEncryption) 
          source = new EncryptionCorator(source)
     if (ensbleCompression)
          source = new CompressionDecorator(source)
     logger = nwe SalaryManager(source)
     salary = logger.load()
}