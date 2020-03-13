const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];


function theBeatlesPlay(musicians, instruments) {
  newStrings = new Array()
  for (let i = 0; i < musicians.length; i++) {
    newStrings.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  console.log(newStrings)
}
