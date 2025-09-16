class exSajlApplicaton 
 method main(){
   create cpmtext object

   read first number,
   read last nuber 
   read the desird acton from usr input 

    if (action == addition) 
         context.setStategy(new ConcretegyAdd())
    if (action == substract)
         contect.setStrategy(new concretesrategySubstract())
    if (action == multiplicatin)
         context.setStategy(new contrateStategyMulti;;e)

   result = context.executeStrategy(fiest number , secon number)

   print result
 }