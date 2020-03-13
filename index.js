// take 2 arrays of strings (musicians and instruments) and 
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

// takes in any array of strings  (facts) and 
// returns a new array with exclamation points added to each element
function johnLennonFacts(facts) {
  index = facts.length
  while (index -- > 0) {
    facts[i] = `${facts[i]}!!!`
  }
  return facts
}
