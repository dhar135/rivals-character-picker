import './style.css'
import { characters, Character } from "./characters.ts";

// Get the app container
const app = document.querySelector<HTMLDivElement>('#app')!

// Function to get a random character, optionally filtered by role
function getRandomCharacter(role?: string): Character {
  // If no role is specified or role is "All", return a random character from all characters
  if (!role || role === "All") {
    const randomIndex = Math.floor(Math.random() * characters.length)
    return characters[randomIndex]
  }

  // Filter characters by the specified role
  const filteredCharacters = characters.filter(character => character.role === role)

  // If no characters match the role, return a random character from all characters
  if (filteredCharacters.length === 0) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    return characters[randomIndex]
  }

  // Return a random character from the filtered list
  const randomIndex = Math.floor(Math.random() * filteredCharacters.length)
  return filteredCharacters[randomIndex]
}

// Get unique roles for the dropdown
function getUniqueRoles(): string[] {
  const roles = characters.map(character => character.role)
  const uniqueSortedRoles = Array.from(new Set(roles)).sort()
  return ["All", ...uniqueSortedRoles]
}

// Function to display character
function displayCharacter(character: Character): void {
  const roles = getUniqueRoles()
  const roleOptions = roles
    .map(role => `<option value="${role}">${role}</option>`)
    .join('')

  // Store the current filter value before modifying the DOM
  const currentFilter = document.querySelector<HTMLSelectElement>('#role-filter')?.value || "All"

  app.innerHTML = `
  <h1>Marvel Rivals Random Character Generator</h1>
  <div class="character-card">
    <div class="card-content">
      <div class="character-info">
        <h2>Your Random Character:</h2>
        <div class="character">
          <h3>${character.name}</h3>
          <p>Role: ${character.role}</p>
        </div>
        <button id='generate-btn'>Generate Another Character</button>
        <div class="filter-controls">
          <label for="role-filter">Filter by Role:</label>
          <select id="role-filter">
            ${roleOptions}
          </select>
        </div>
      </div>
      <div class="character-image">
        ${character.image ? `<img src="${character.image}">` : '<div class="no-image">No image available</div>'}
      </div>
    </div>
  </div>
`
  // add event listener to the generate button
  document.querySelector<HTMLButtonElement>('#generate-btn')!.addEventListener('click', () => {
    const roleFilter = document.querySelector<HTMLSelectElement>('#role-filter')!.value
    displayCharacter(getRandomCharacter(roleFilter))
  })

  // Restore the previously selected filter value
  const roleFilter = document.querySelector<HTMLSelectElement>('#role-filter')
  if (roleFilter) {
    roleFilter.value = currentFilter
  }
}

displayCharacter(getRandomCharacter())

