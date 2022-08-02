function introduction(name){
    return `Hi, my name is ${name}.`;
}

//Function with 2 parameters
function introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

//Function with optional argument
function introductionWithLanguageOptional(name, language='JavaScript'){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}