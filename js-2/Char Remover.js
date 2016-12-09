var separators = ['.', ' ', '?', '\t', ',', ':', '!', ';'];
var counterOfDeletedSymbols = 0;
function editLine() {
    var originalLine,
        newLine = '';
    originalLine = document.getElementById("textLine").value;
    alert("Линия без повторяющихся символов в слове: " + editLineByEachWord(originalLine));
}

function editLineByEachWord(originalLine) {
    var lastIndexOfSeparator = 0;
    var i = 0;
    var massWords = [];
    var repiteableSymbols = '';

    for (i; i < originalLine.length; i++) {
        if (separators.indexOf(originalLine[i]) > -1) {
            massWords.push(originalLine.slice(lastIndexOfSeparator, i));
            lastIndexOfSeparator = i + 1;
        }
    }
    alert(massWords);
    repiteableSymbols = editLineByCurrentWord(massWords);

    for (i = 0; i < originalLine.length; i++) {
        if (repiteableSymbols.indexOf(originalLine[i]) > -1) {
            originalLine = originalLine.replace(originalLine[i], '');
            i--;
        }
    }
    return originalLine;
}
function editLineByCurrentWord(massWords) {

    var repiteableSymbols = massWords[0];
    
    for (var i = 1; i < massWords.length; i++) {
        if (massWords[i] !== "") {
            var currentWord = massWords[i];
            var counter = repiteableSymbols.length;           
            for (var j = 0; j < currentWord.length; j++) {
                if (repiteableSymbols.indexOf(currentWord[j]) > -1) {
                    repiteableSymbols += currentWord[j];
                }
            }
        }
      
        repiteableSymbols = repiteableSymbols.slice(counter);
        

    }
    return repiteableSymbols;
}

