const ms = {
	second: 1000,
	minute: 60000,
	hour: 3600000,
	day: 86400000,
	month: 2592000000,
	year: 31536000000,
};

/**
 *
 * @param {any} time - milliseconds to calcuate how ago
*/
export const howAgo = time => {
	const diff = Date.now() - new Date(time).getTime();
	const pair = [['second', 'minute'], ['minute', 'hour'], ['hour', 'day'], ['day', 'month'], ['month', 'year']]
		.filter(e => diff >= ms[e[0]] && diff < ms[e[1]]).reduce((e, o) => e.concat(o), []);

	if (pair.length) {
		if (diff < 2 * ms[pair[0]]) return `1 ${pair[0]} ago`;
		if (diff < ms[pair[1]]) return `${Math.floor(diff / ms[pair[0]])} ${pair[0]}s ago`;
	}
	return diff < ms.second
		? 'Less than a second ago'
		: diff < 2 * ms.year
			? '1 year ago'
			: `${Math.floor(diff / ms.year)} years ago`;
};
