people_info = [
    {
      name: "guido",
      profession: "bungalow builder",
      age: 17,
      country: "canaland",
      city: "sydurn",
      catchphrase: "what a piece of wood!"
    },
    {
      name: "petra",
      profession: "jet plane mechanic",
      age: 31,
      country: "greenmark",
      city: "bostork",
      catchphrase: "that's my engine, bub"
    },
    {
      name: "damian",
      profession: "nursery assistant",
      age: 72,
      country: "zimbia",
      city: "bekyo",
      catchphrase: "with great responsibility comes great power"
    }
]

const getSummary = function(person){
    let summary = ""
    summary += capitalize(person.name)
    summary += ` is ${getAge(person.age)} ` //Yes - you can put a function call inside the tick quotes!
    summary += professionProcess(person.profession)
    // summary += //call function for country + city
    // summary += //call function for catchphrasereturn summary
    console.log(summary);
}

const capitalize = function(str){
    let capitalizedStr = ""
    
    capitalizedStr += str[0].toUpperCase(); //add the first letter of the str , capitalized
    capitalizedStr += str.slice(1) //add the rest of str normallyreturn capitalizedStr
    return capitalizedStr
}

function getAge(age) {
  if (age < 21)
  {
    return 'an underage'
  }
  else {
    return `${age}+`
  }
}

function professionProcess(text) {
  let newText = ''
  for (const word of text.split(' ')) {
    newText += capitalize(word) + ' '
  }
  return newText
}

getSummary(people_info[0])
  