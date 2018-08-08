class Person{
  constructor(characteristics){
    this.characteristics = characteristics
  }

  render () {
    const person = this.characteristics
    const li = document.createElement('li')

    const _name = document.createElement('h4')
    _name.textContent = person.name

    const _eyeColor = document.createElement('h6')
    _eyeColor.textContent = "eyes:" + person.eye_color
    li.appendChild(_name).appendChild(_eyeColor)

    const _hairColor = person.hair_color.split(',').pop().trim()
    li.classList.add(_hairColor)
    return li
  }
}

class Search {
  constructor(searchTerm) {
    this.searchTerm = searchTerm
    this.searchUrl = 'https://swapi.co/api/people/?search=' + searchTerm
  }

  getSearchResults() {
    fetch(this.searchUrl)
      .then(resp => {
        console.log("response = ", resp)
        if (resp.status === 200) {
          return resp.json()
        } else {
          console.log("err", resp)
        }
      }).then(searchResults => {
        console.log("search results = ", searchResults)
        const parent = document.querySelector('.searchResults')
        searchResults.results.forEach(result => {
          const person = new Person(result)
          parent.appendChild(person.render())
        });
      })
  }
}

const searchAPIEvent = () => {
  const userInput = document.querySelector('.input').value
  const apiSearch = new Search(userInput)
  apiSearch.getSearchResults()
}

document.querySelector('.input').addEventListener('blur', searchAPIEvent)