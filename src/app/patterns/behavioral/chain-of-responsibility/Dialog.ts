class Dialog extends Container

   field wikiPageURI : string

   method ShowHelp() {
     if ( wikipageURI != null )
        // Open  wiki help page
     else 
        suppe.showHelp()
   }