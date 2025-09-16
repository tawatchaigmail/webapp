class Dialog

abstract createButton(): Button

method render() {

  Button okButton = createButton()
  okButton.oncliek(clearDialog)
  okButton.render()
}