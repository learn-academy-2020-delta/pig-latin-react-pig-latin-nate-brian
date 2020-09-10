import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props){
    super(props)
    // the state object holds information that can be displayed to the user and updated throughout the program
    this.state = {
      // 'phrase' is the text entered by the user - right now there are some test words hard coded to make the process of testing your code a bit faster and easier
      // ACTION ITEM: when you are ready for your full user experience, delete the test words so phrase is assigned an empty string
      phrase: 'every through yummy squeal queen fry',
      // 'phraseTranslated' is what the user will see appear on the page as Pig Latin, it starts as the preset message and updates when your user clicks the 'submit' button
      phraseTranslated: 'This is where your translated sentence will appear.'
    }
  }

  // The 'myPigLatinCodeHere' function is where you will put your logic to convert the sentence entered by the user to Pig Latin

  myPigLatinCodeHere = () => {
    // the variable 'userInput' will contain the text input from the user
    // no need to change this variable
    let userInput = this.state.phrase

    // as you modify and create Pig Latin-ified words, push them into 'translatedWordsArray'
    // no need to change this variable
    let translatedWordsArray = []

    // taking the user input and spliting the text into an array of words
    let splitUserInput = userInput.toLowerCase().split(" ")

    // now that we have an array of words, we can map over the array and access each word
    splitUserInput.map(currentWord => {
      // ACTION ITEM: use 'currentWord' as a starting point for your code


      // your code here!

      //need to know how to split string at vowel
      //if first letter is y it's a consonant
      const translate = (currentWord) => {
        if (currentWord[0] === "y") {
          return currentWord.split("").slice(1).join("") + "-yay"
        }
        //if first letter is a vowel add -way
        else if (currentWord[0] === "a" || currentWord[0] === "e" || currentWord[0] === "i" || currentWord[0] === "o" || currentWord[0] === "u" || currentWord[0] === "y") {
          return currentWord + "-way"
        }
        //u does not count as a vowel if immediately preceded by a q
        // else if (currentWord[i] == "u" && currentWord[i - 1] == "q") {"u" = consonant}
        //everything else bisect word at first vowel word2 + word1 + -ay
        //look for first vowel in word
        //chop word so vowel begins word2
        //then Pig Latin it
        else {
          const firstVowelFinder = (currentWord) => {
            let vowelArray = ["a", "e", "i", "o", "u"]
            let firstVowelIndex = []
            for (var i = 0; i < vowelArray.length; i++) {
              return firstVowelIndex.push(currentWord.indexOf(i))
            }
            console.log(firstVowelIndex);
          }

          let word2Start = firstVowelFinder(currentWord)
          // let word2Start = currentWord.split("").indexOf("a" || "e" || "i" || "o" || "u" || "y")
          return currentWord.split("").slice(word2Start).join("") + "-" + currentWord.split("").slice(0, word2Start).join("") + "ay"
          }
      }
      // Remember: console.log is your friend :)
      let translatedWord = translate(currentWord)

      // ACTION ITEM: change the value of currentWord in the push method to the name of whatever variable you made containing your Pig Latin'd word
      return translatedWordsArray.push(translatedWord)
    })


    // joining the array back to a string of translated words
    // no need to change this variable
    let translatedWords = translatedWordsArray.join(" ")

    // the setState method will take your information from 'translatedWords' and update the state object that is displayed to the user
    // no need to change this method
    this.setState({ phraseTranslated: translatedWords })
    // done!
  }

  setUpPreventDefault = (e) => {
    // this method prevents React from refreshing the page unnecessarily
    // no need to modify this method
    e.preventDefault()
    this.myPigLatinCodeHere()
  }

  handleChange = (e) => {
    // this method takes the input and saves the value in this.state.phrase so we can use the input in our program
    // no need to modify this method
    this.setState({ phrase: e.target.value })
  }

  restartGame = () => {
    // this method restarts the game by setting the original state
    // ACTION ITEM: when you are ready for your full user experience, delete the test words in phrase so that is assigned an empty string
    this.setState({
      phrase: 'through every squeal queen fry',
      phraseTranslated: 'This is where your translated sentence will appear.'
    })
  }

  render() {
    // the render method is where we put information on the page
    // inside the return is all our JSX tags
    return (
      <React.Fragment>
        <h1>Pig Latin Translator</h1>
          <div id="pigImage">
            <img
              src="https://lh3.googleusercontent.com/QvvsRY5ShwDNEouVMK8_z7QCwS3grkgd4mzZOlom23Hurralk54ObvsyEMM8ZSNR5pEFBeBMzltzEEcgi2llYJnhXTuXClN3njmMjtw3vgn8Go5jr40fHMNzfI64eYRrnHbZUutxCA=w2400"
              alt="pig with butcher cut names in pig latin"
              id="butcherPig"
            />
          </div>
          <div className="box">
            <h4>Enter phrase to be translated:</h4>
            <div className="info">
            {/* user input field - every DOM event that happens in the input will call the handleChange method and update state */}
              <input
                type="text"
                id="inputPhrase"
                onChange={ this.handleChange }
                value={ this.state.phrase }
              />
              <br />
              {/* button that called the setUpPreventDefault method */}
              <button onClick={ this.setUpPreventDefault }>Submit</button>
              {/* button that resets the game */}
              <button onClick={ this.restartGame }>Clear</button>
            </div>
            {/* where the translated phrase will display */}
            <p>{ this.state.phraseTranslated }</p>
          </div>
        <footer>Coded by ~your name here~</footer>
      </React.Fragment>
    )
  }
}

export default App
