
function format(date) {
	var diff = Date.now() - date.getTime();

	var future = diff < 0;
	diff = Math.abs(diff);

	if (!future && diff < 10000) return 'gerade eben';
	if (future && diff < 5000) return 'jede Sekunde';

	var prefix = future ? 'in ' : 'vor ';

	for (var i = 0; i < units.length; i++) {
		var unit = units[i];

		if (diff <= unit.max * unit.value) {
			var t = Math.round(diff / unit.value);
			return t === 1 ? prefix + unit.single : prefix + t + unit.name;
		}
	}
}

var units = [
	{ name: ' Sekunden', value: 1000, max: 50, single: 'einer Sekunde' },
	{ name: ' Minuten', value: 60000, max: 50, single: 'einer Minute' },
	{ name: ' Stunden', value: 3600000, max: 22, single: 'einer Stunde' },
	{ name: ' Tagen', value: 86400000, max: 6, single: 'einem Tag' },
	{ name: ' Wochen', value: 604800000, max: 3.5, single: 'einer Woche' },
	{ name: ' Monaten', value: 2592000000, max: 11, single: 'einem Monat' },
	{ name: ' Jahren', value: 31536000000, max: Infinity, single: 'einem Jahr' }
];

module.exports = format;
