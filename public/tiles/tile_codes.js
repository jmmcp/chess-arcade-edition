
const codes = {
	"a8": "arrow_n",
	"a9": "arrow_ne",
	"a6": "arrow_e",
	"a3": "arrow_se",
	"a2": "arrow_s",
	"a1": "arrow_sw",
	"a4": "arrow_w",
	"a7": "arrow_nw",
	"||": "line_n_s",
	"==": "line_e_w",
	"\\": "line_nw_se",
	"//": "line_ne_sw"
};

module.exports = Object.keys(codes).map((key, index) => {
	return require(`./${codes[key]}.svg`);
});