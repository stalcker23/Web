function editLine() {
    var originalLine = document.getElementById("textLine").value,
    digits = /(\d+\.\d+)|(\d+)/g,
        symbols = /\+|\-|\/|\*|=/g,
        symbol = "+-",
        counter = 0,
        line = '',
        foundDigits = originalLine.match(digits),
        foundSymbols = originalLine.match(symbols);

    if (foundDigits === null || foundSymbols === null) {
        return document.getElementById("textLine").value = "Expression error";
    }
    if (symbol.indexOf(originalLine[0]) === -1) {
        var result = parseFloat(foundDigits[0]);
    }
    else {
        var result = foundSymbols[0] + foundDigits[0];
        result = parseFloat(result);
        counter++;
    }
    alert(counter);
    for (var i = 1; i < foundDigits.length; i++) {
        if (foundSymbols[i - counter] === '+') {
            result += parseFloat(foundDigits[i]);
        }
        if (foundSymbols[i - counter] == '-') {
            result -= parseFloat(foundDigits[i]);
        }
        if (foundSymbols[i - counter] === '/') {

            result /= parseFloat(foundDigits[i]);
        }
        if (foundSymbols[i - counter] === '*') {
            result *= parseFloat(foundDigits[i]);
        }
        if (foundSymbols[i - counter] === '=') {
            break;
        }
    }



    document.getElementById("textLine").value = result.toFixed(2);

}
