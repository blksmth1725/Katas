//THIS FUNCTION TAKES AN ARRAY OF NUMBERS (EACH ELEMENT MAY OR MAY NOT BE A STRING) AND ADDS THE TOTAL INTO
//A SINGLE VALUE USING THE REDUCE METHOD

func sumMix(_ arr: [Array]) -> Int {
    var count = 0
    let newArray = arr.reduce(0) {$0 + (Int("\($1)") ?? 0)}
    }
