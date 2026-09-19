class RemoteControl
protected field device : Device
constructure RemoteControl(device){
   this.device = device
}

method toglePoeer(){
   if device.isEnable() then
      device.disable()
   else 
      device.enable()
}

method volumDown(){
    device.setVolumn(device.getVolume() - 10)
}

method volumneUp(){
    devie.setVolumn(device.getVolume() + 10)
}

method chanelDown() {
    device.setChal(devie.getChanel() - 1 )
}

method chanelUp(){
    device.setChanel(device.getchanel() + 1)
}