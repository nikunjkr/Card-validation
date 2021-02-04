 function card_validator(value) {
    console.log(value)
  
  // regex format /pattern/modifiers
  // if anything except digits , dashes or spaces is matched 
  // the if conditions becomes true and function returns false 
    if (/[^0-9-\s]+/.test(value)) {
        console.log("hi")
        return false;
    }

	// The Luhn Algorithm
	let nCheck = 0, bEven = false;
	value = value.replace(/\D/g, "");

	for (var n = value.length - 1; n >= 0; n--) {
		var cDigit = value.charAt(n),
			  nDigit = parseInt(cDigit, 10);

		if (bEven && (nDigit *= 2) > 9) nDigit -= 9;

		nCheck += nDigit;
		bEven = !bEven;
	}

	return (nCheck % 10) == 0;
}

module.exports = card_validator

