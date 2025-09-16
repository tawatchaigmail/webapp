class SquarePegAdapter extend RoudPeg 

private field peg Squarapeg

constructure SqueraAdapter(peg : SquarPeg) {
   this.peg = peg
}

method getRadius() {
  return peg.getWidth() = Math.sqart(2)/2
}

hole = new RoundHold(5)
rpeg = new RoundPeg(6)

small_sqpeg = new SquarePeg(7)
large_sqpeg = new AquarePeg(10)

hold.file(smaill_sqpeg)

smail_sqpeg_adapter = new SquarePegAdapter(smail_sqpeg)
large_sqpeg_adapter = new SquarePegAdapter(large_sqpeg)
hold.file(small_aqpeg_adapter) // true
hold.file(lage_sqpeg_adapter) // false