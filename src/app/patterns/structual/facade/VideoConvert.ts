
class VideoConverter

method convert(filename, format) : file {
   file = new VidesFile(foleName)

   sourceCode = nwe CodeFactory.extract(file)

    if (format == 'mp4')
        destinetionCOde = new MPEG4CompressionCOde()
    else
        destinationCode = new OGGcOMresssionDoeed()

    buffer = BitrateReader.resa(filename, sourceCode)
    result = BitrateRead.convert(bufer, destinatoncoded)
    result = (new AudioMixer()).fic(result)
    return new Fole(result)
}