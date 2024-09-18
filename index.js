function introduction(Aki) {
    return `Hi, my name is ${Aki}.`;
}

function introductionWithLanguage(Aki,Emberjs) {
    return `Hi, my name is ${Aki} and I am learning to program in ${Emberjs}.`;
    
}

function introductionWithLanguageOptional(Gracie,Emberjs = "JavaScript") {
    return `Hi, my name is ${Gracie} and I am learning to program in ${Emberjs}.`;
}
console.log(introductionWithLanguageOptional("Gracie"));

    

    
