import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  //Note: For now, pets initial state is an empty array.
  //Alternatively, could use useEffect to fetch all pets on page load and set state
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

//Callback inside <Filters /> 
//Changes filters state when type is selected from filter drop down
function onChangeType(e) {
  console.log('onChangeType fired')
  let selectedType = e.target.value
  setFilters({type: selectedType})
}

//Callback inside <Filters />
//changes pets state when "Find pets" button is clicked (fetches object of pets from API)
function onFindPetsClick() {
  const allURL = "http://localhost:3001/pets"
  
  console.log('onFindPetsClick fired')
      if (filters.type === "all") {
          fetch(allURL)
          .then(r => r.json())
          .then(data => {
            console.log(data)
            setPets(data)
          })
      } else {
          fetch(`http://localhost:3001/pets?type=${filters.type}`)
          .then(r => r.json())
          .then(data => {
            console.log(data)
            setPets(data)
            })
        }
}

console.log(filters)

//Callback passed down to through <PetBrowser/> to <Pet /> 

function onAdoptPet(ID) {
  console.log('onAdoptPet fired')
  console.log('id of pet selected: ' + ID)

  const newPetArr = pets.map((pet) => {
      if (pet.id === ID) {
        return {...pet, isAdopted: true}
      } else return pet
      }
      )
    setPets(newPetArr)

  // const updatedPetObj = {...clickedPetArr[0], isAdopted: true}



  // const upDatedPetArr = [
  //       ...clickedPet[0], 
  //       isAdopted: true
  //     ]

  console.log(newPetArr)
  // console.log(upDatedPetArr)
}

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType = {onChangeType} 
                    onFindPetsClick = {onFindPetsClick}
            />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets = {pets}
                        onAdoptPet = {onAdoptPet}
             />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
