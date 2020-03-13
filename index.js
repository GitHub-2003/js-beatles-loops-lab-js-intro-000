// take 2 arrays of strings (musicians and instruments) and
// returns an array of strings containing what instruments each musician plays
function theBeatlesPlay(musicians, instruments) {
  var newStrings = new Array()
  for (let i = 0; i < musicians.length; i++) {
    newStrings.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newStrings
}

// takes in any array of strings  (facts) and
// returns a new array with exclamation points added to each element
function johnLennonFacts(facts) {
  var index = facts.length
  while (index-- > 0) {
    facts[i] = `${facts[i]}!!!`
    console.log(facts[i])
  }
  return facts
}

function iLoveTheBeatles(number) {
  var returnStr = new Array()
  do {
    returnStr.push("I love the Beatles!")
  } while (number++ < 15)
  return returnStr
}
