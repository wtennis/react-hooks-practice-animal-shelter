import React from "react";

import Pet from "./Pet";

function PetBrowser({pets, onAdoptPet}) {

  // create a const with pets to display using pets?

  const displayedPets = pets.map((pet) => {
   return (
     <Pet key = {pet.id} 
          pet = {pet}
          onAdoptPet = {onAdoptPet}
     />
   ) 
  })

  return <div className="ui cards">{displayedPets}</div>;
}

export default PetBrowser;
