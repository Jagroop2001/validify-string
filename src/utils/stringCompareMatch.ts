
// check if the string A contains the string B

export const isStringAContainsB =(StringA: string, StringB: string): boolean=>{
    return StringA.indexOf(StringB) != -1;
}

// check if the string A matches the string B

export const isStringAMatchesB =(StringA: string, StringB: string): boolean=>{
    return StringA === StringB;
}

// Returns the left substring of the input string
export const getLeftSubstring = (inputString: string, n: number): string => {
    if (n <= 0) {
        throw new Error("Invalid value of n. Please provide a positive integer.");
    }

    return inputString.slice(0, n);
};