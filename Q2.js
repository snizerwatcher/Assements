var _ = require('lodash');
const str = "ababcbacadefegdehijhklij";
const indicator = {};
let str2 = "";



for (let i = 0; i < str.length; i++) {

	if ((str.charCodeAt(i + 1) - str.charCodeAt(i)) === 1 && _.has(indicator, str[i])) {
		indicator[str[i]] = i;
	}


}

console.log(indicator);