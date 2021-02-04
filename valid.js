const luhn= require('./Luhn_algorithm');

const assert = require('assert');


function unit_test() {
    
    var tests =[
        ["0000000000000000", true],
		["4111111111111111", true],
		["5500000000000004", true],
		["6250941006528599", true],
		["5425233430109903", true],
		["6034883265619896", true],
		["4242424242424249", false]
    ];
    
    for(let i=0; i<tests.length; i++) {
        
        
        assert(luhn(tests[i][0])==tests[i][1])
    }
}

unit_test();