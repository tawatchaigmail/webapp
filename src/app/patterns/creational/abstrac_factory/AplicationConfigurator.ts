clas ApllictionCOnfigurator

     private factory : guiFacrory
 
 metho main() {
   config = readApplicationConfigFile()
   if config.os = 'mac' then
      facrory =  new macFactroy();
      
   elsif config.os = 'window' then
      facrory =  new windowFactroy();
   else 
    
     throw  new exception ('Error! unkonow operatingsystem')   

  Applicatin app = new Application(factory);    
 }