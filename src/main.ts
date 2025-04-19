import './style.css'
import { characters, Character } from "./characters.ts";

// Get the app container
const app = document.querySelector<HTMLDivElement>('#app')!

// Function to get a random character
function getRandomCharacter(): Character {
  const randomIndex = Math.floor(Math.random() * characters.length)
  return characters[randomIndex]
}

// Function to display character
function displayCharacter(character: Character): void {

  app.innerHTML = `
  <h1>Marvel Rivals Random Character Generator</h1>
  <div class="character-card">
    <h2>Your Random Character:</h2>
    <div class="character">
      <h3>${character.name}</h3>
      <p>Role: ${character.role}</p>
    </div>
    <button id='generate-btn'>Generate Another Character </button>
  </div>
`
  // add event listener to the generate button
  document.querySelector<HTMLButtonElement>('#generate-btn')!.addEventListener('click', () => displayCharacter(getRandomCharacter()))



}

displayCharacter(getRandomCharacter())

