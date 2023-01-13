function introduction(name) {
    const politeIntro = `Hi, my name is ${name}.`;
    return politeIntro;
}

function introductionWithLanguage(name, language) {
    const replyNameLang = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    return replyNameLang;
}

function introductionWithLanguageOptional(name, language = "JavaScript") {
    const replyWithJsLang = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    return replyWithJsLang;
}