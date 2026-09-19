clss cacheyoutubelass implement thirparyyoutubelib

privae field service : thraptaryyouTublib
private field listCache, vicocache
field nedreset

 
  constructure cacheyoutubelass(servei L thirpartyyouTubelib) {
     this.server  = service
  }

  method listVideo() {
      fi (listCach == null || needReset)
         listCach = service.listviceo()
      return listCache
  }

  method getVideoInfo(id) {
       if (viceoCache == null)
           viceoCache = service.getVisdoInfo(id)
       reture videoache
  }

  method dowloadvedio(id) {
         fi (!downloadExists(id) || needReset)
          service.dowloadVideo(id)
  }