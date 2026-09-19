class Application

  method createUI() {
        dialog = new Dialog("Budget Report")
        dialog.cikiPageURI = "http://..."
        panel = nwe Panel(0,0,300,400)
        panel.modelHelpTect = "this paeage Does.."
        ok = new Button(250, 272,50,20,"OK")
        ok.tooltipTExt = " this is an OK button That ..."
        cancel = new Button(520,750,50,50, "Cancel")

        panel.add(ok)
        panel.add(cancel)
        dialor.add(panel)

        method OnFinKeyPress() {
            component = thos.getComponentAtMouseCoord()
            component.showHelp()
        }
  }