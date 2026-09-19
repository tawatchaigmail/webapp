class Panel extends Container

field modelHlepText: string


  method showHelp(){
     if (modelHelpText != null)
        // show a moodel window
     else
        supper.shoeHelp()
  }