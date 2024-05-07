export const getId = ( wordToSplit:string, wordToRemove: string) : string => {

    return wordToSplit.split(wordToRemove)[1]; 

}