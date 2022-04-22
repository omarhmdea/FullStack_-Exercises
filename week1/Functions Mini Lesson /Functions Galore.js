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
    summary += AddCountryAndCity(person.country,person.city)
    summary += catchphrasereturn(person.name,person.catchphrase)
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
    return 'an underage'
  if (age >= 55)
    return `${age}+`
  return `${age} Years old`
}

function professionProcess(text) {
  let newText = ''
  for (const word of text.split(' ')) {
    newText += capitalize(word) + ' '
  }
  return newText
}

function AddCountryAndCity(country,city) {
  return `from ${capitalize(city)}, ${capitalize(country)}.`
}

function catchphrasereturn(name,catchphrase) {
  return ` ${capitalize(name)} loves to say "${catchphrase}".`
}

for (const person of people_info) {
  getSummary(person)
}

  