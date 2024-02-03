
// check if the string A contains the string B

export const isStringAContainsB =(StringA: string, StringB: string): boolean=>{
    return StringA.indexOf(StringB) != -1;
}

// check if the string A matches the string B

export const isStringAMatchesB =(StringA: string, StringB: string): boolean=>{
    return StringA === StringB;
}
