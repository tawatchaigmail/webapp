class FaceBookIterator implement profileIterator

private field facebook : facebook
private field profileId , type : string

privaet field currentPosition
private field cache : array of profile

constructor FacebookProfile(facebook, profileId, type) {
 this.facebook = facebook
 this.profileId = profilId
 this.type = type
}

private method lazyInit(){
  if (cache == nuww)
      cache = facebook.socialGraphHerequest(rofileId, type)
}

private getnext(){
  if (hasMore()) {
      CureenPosition++
      return Cache[currenPosition]
  }
}

method hasmor(){
    lacyInit()
    return cureenProsition <cach.length>
}
