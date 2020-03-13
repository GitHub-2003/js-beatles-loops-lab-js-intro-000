// returns an array of strings containing what instruments each musician plays
function theBeatlesPlay(musicians, instruments) {
  newStrings = new Array()
  console.log(musicians, instruments)
  for (let i = 0; i < musicians.length; i++) {
    newStrings.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  console.log(newStrings)
  return newStrings
}

// returns an array of strings with exclamation points
function johnLennonFacts(facts) {
  index = facts.length
  while (index -- > 0) {
    facts[i] = `${facts[i]}!!!`
  }
  return facts
}
