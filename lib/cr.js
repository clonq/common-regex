module.exports = {

	email: /[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}/,
	phone: /^(1\s*[-\/\.]?)?(\((\d{3})\)|(\d{3}))\s*[-\/\.]?\s*(\d{3})\s*[-\/\.]?\s*(\d{4})\s*(([xX]|[eE][xX][tT])\.?\s*(\d+))*$/,
	postcode_uk: /(((^[BEGLMNS][1-9]\d?) | (^W[2-9] ) | ( ^( A[BL] | B[ABDHLNRST] | C[ABFHMORTVW] | D[ADEGHLNTY] | E[HNX] | F[KY] | G[LUY] | H[ADGPRSUX] | I[GMPV] | JE | K[ATWY] | L[ADELNSU] | M[EKL] | N[EGNPRW] | O[LX] | P[AEHLOR] | R[GHM] | S[AEGKL-PRSTWY] | T[ADFNQRSW] | UB | W[ADFNRSV] | YO | ZE ) \d\d?) | (^W1[A-HJKSTUW0-9]) | (( (^WC[1-2]) | (^EC[1-4]) | (^SW1) ) [ABEHMNPRVWXY] ) ) (\s*)? ([0-9][ABD-HJLNP-UW-Z]{2})) | (^GIR\s?0AA)/,

	extract: function(re, text){
		var res = open(eval('this.'+re)).exec(text);
		return (res && res.length) ? res[0] : '';
	},
	test: function(re, text){
		return eval('this.'+re).test(text);
	}

}

function open(re) {
	ret = re.toString();;
	if(ret.indexOf('/^') == 0) ret = ret = '/'+ret.slice(2)
	if(ret.indexOf('$/') == ret.length-2) ret = ret.slice(0,ret.length-2)+'/';
	return eval(ret);
}