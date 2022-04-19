import { mse, bps } from '@/consts'

const units = [
	['second', 1000],
	['minute', 60000],
	['hour', 3600000],
	['day', 86400000],
	['month', 2592000000],
	['year', 31536000000],
]

export const loadImgAsBase64 = (url: string, callback: (data: string | null) => void) => {
	let canvas = document.createElement('canvas');
	let img = document.createElement('img');
	img.setAttribute('crossorigin', 'anonymous');
	img.src = 'https://cors-anywhere.herokuapp.com/' + url;

	img.onload = () => {
		canvas.height = img.height;
		canvas.width = img.width;
		let context = canvas.getContext('2d');
		if (context) {
			context.drawImage(img, 0, 0);
			let dataURL = canvas.toDataURL('image/png');
			callback(dataURL);
		}
		else callback(null)
	};
}

// export const generatePDF = (el: Element) => {

// 	const rect = el.getBoundingClientRect()

// 	var margin = 15;
// 	var pdfWidth = rect.width + (margin * 2);
// 	var pdfHeight = (pdfWidth * 1.5) + (margin * 2);

// 	var totalPDFPages = Math.ceil(rect.height / pdfHeight) - 1;

// 	html2canvas(this.$refs.mpdf, { allowTaint: true }).then((canvas) => {
// 		canvas.getContext('2d');

// 		var imgData = canvas.toDataURL("image/jpeg", 1.0);
// 		var pdf = new jsPDF('p', 'px', [pdfWidth, pdfHeight]);
// 		pdf.addImage(imgData, 'JPG', margin, margin, rect.width, rect.height);

// 		for (var i = 1; i <= totalPDFPages; i++) {
// 			pdf.addPage([pdfWidth, pdfHeight], 'p');
// 			pdf.addImage(
// 				imgData, 'JPG', margin,
// 				-(pdfHeight * i) + (margin * 4),
// 				rect.width,
// 				rect.height
// 			);
// 		}

// 		pdf.save("survey-answer-details" + Date.now());
// 		this.downloading = false
// 		this.download = false
// 	});
// }

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
	return pair ? bps[pair[0]] : bps[1536]
}

interface RandomType {
	max: number,
	min: number,
	excludeMax: boolean
}
export const random = ({
	max, min = 0,
	excludeMax = true
}: RandomType): number => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(
		Math.random() * (max - min + (excludeMax ? 0 : 1)) + min
	);
}
