
/**
 * Updates an element in an array based on its id, or appends it to the array if not found.
 * @param element The element to insert or update in the array.
 * @param setArray The React state setter function for the array.
 * @param appendIfNotFound Determines whether to append the element to the array if not found. Defaults to true.
 * @returns void
 * @template T The type of the elements in the array, must have an 'id' property.
 */
  export function setElementInArray<T extends { id: any }>(
    element: T,
    setArray: React.Dispatch<React.SetStateAction<T[]>>,
    appendIfNotFound: boolean = true
  )  {
    setArray(prevArray => {
      const newArray = prevArray.map(item => {
        if (item.id === element.id) {
          return element; // Replace the element with the same id
        }
        return item;
      });

      if (!newArray.some(item => item.id === element.id)) {
        if (appendIfNotFound) {
          return [...prevArray, element]; // Append the element if not found
        } else {
          console.error(`Element with id ${element.id} not found in the array.`);
        }
      }

      return newArray;
    });
  }

  export function deleteElementInArray<T extends { id: string }>(identifier: string, array: T[]){
    return  array.filter(x => x.id !== identifier) ;
  }