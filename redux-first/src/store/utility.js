export const updateObject = ( curentObject, updatedValues ) => {
    return {
        ...curentObject,
        ...updatedValues //we expect updatedValues be an object
    }
};