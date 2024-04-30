function randomNum() {
	return Math.floor(Math.random() * 100) + 1;
}

function centrigradeToKelvin(temp, unit) {
	unit = unit.toLowerCase();
	if (unit == "c") {
		return temp + 273;
	} else if (unit == "k") {
		return temp - 273;
	}
}

module.exports = {
	randomNum,
	centrigradeToKelvin,
};
