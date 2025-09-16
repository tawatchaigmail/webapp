class SocialSpammer

method send(iterator : profileIterator, message: string){
    while(iterator.hasMre()){
       profile = iterator.getNext()
       system.senEmail(profile.getEmail(),message)
    }
}