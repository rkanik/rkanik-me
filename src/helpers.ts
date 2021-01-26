import { mse, bps } from '@/consts'

const units = [
	['second', 1000],
	['minute', 60000],
	['hour', 3600000],
	['day', 86400000],
	['month', 2592000000],
	['year', 31536000000],
]

const getPairs = (arr: any[]): any[][] => {
	let start = 0, pairs = []
	while (start < (arr.length - 1)) {
		pairs.push([arr[start], arr[start + 1]])
		start += 1
	}
	return pairs
}

const unitMsPairs = getPairs(units)
const bpPairs = getPairs([0, 640, 768, 1024, 1280, 1536])

export const view = (name: string) => () => import(`@/views/${name}.vue`)
export const layout = (name: string) => () => import(`@/layouts/${name}.vue`)
export const app = (name: string) => () => import(`@/apps/${name}.vue`)


/**
 *
 * @param {any} time - milliseconds to calcuate how ago
*/
export const howAgo = (time: string) => {
	const diff = Date.now() - new Date(time).getTime();
	const pair = unitMsPairs
		.filter((e: [string, number][]) => diff >= e[0][1] && diff < e[1][1])
		.reduce((e: number[], o: number[]) => e.concat(o), []);
	if (pair.length) {
		if (diff < 2 * pair[0][1]) return `1 ${pair[0][0]} ago`;
		if (diff < pair[1][1]) return `${Math.floor(diff / pair[0][1])} ${pair[0][0]}s ago`;
	}
	return diff < mse.second
		? 'Less than a second ago'
		: diff < 2 * mse.year
			? '1 year ago'
			: `${Math.floor(diff / mse.year)} years ago`;
};

/**
 *
 * @param {[number, number]} range
 * @param {number} size
 * @returns {boolean}
 */
export const between = (range: [number, number], size: number) => {
	return size >= range[0] && size < range[1];
}

/**
 *
 * @param {number} width
 * @returns {string}
 */
export const getDevice = (width: number) => {
	let pair = bpPairs.find(
		(pair: number[]) => between([pair[0], pair[1]], width)
	)
	console.log(pair, width)
	return pair ? bps[pair[0]] : bps[1536]

}


