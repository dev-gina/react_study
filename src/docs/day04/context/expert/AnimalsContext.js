import { createContext, useState } from "react";

// Context creation and initialization
const AnimalsContext = createContext({
  state: { 
    animals: []
  },
  action: { 
    insert: () => {},
    remove: () => {}
  }
});

// Provider creation
const AnimalsProvider = ({ children }) => {
  const [animals, setAnimals] = useState(["누렁이", "점박이", "치즈"]);

  // Function to add an animal
  const insert = (animal) => { setAnimals(animals.concat(animal));
  };

  // Function to remove an animal
  const remove = (i) => { setAnimals(animals.filter((animal, index) => i !== index))};


  const value = {
    state: { animals: animals },
    action: { insert, remove }
  };

  return (
    <AnimalsContext.Provider value={value}>
      {children}
    </AnimalsContext.Provider>
  );
};

export { AnimalsProvider, AnimalsContext };



