import axios from 'axios'
import { count } from '@/consts'
import { YTVideos } from '../types'
import { howAgo } from '@/helpers'

const youtube = axios.create({ baseURL: process.env.VUE_APP_YT_DATA_API_BASE_URL })
const suggest = axios.create({
	baseURL:
		process.env.VUE_APP_CORS_PROXY +
		process.env.VUE_APP_SUGGEST_QUERIES
})

youtube.interceptors.request.use(config => ({
	...config, params: {
		...config.params,
		key: process.env.VUE_APP_YT_DATA_API_API_KEY
	}
}));

suggest.interceptors.request.use(config => ({
	...config, params: {
		...config.params,
		ds: 'yt', client: 'chrome',
	}
}));

// Make a GET to the API
const get = async (endpoint: string, params = {}) => {
	const data = (await youtube.get(endpoint, { params })).data;
	return { error: false, data };
};
const getSuggest = async (endpoint: string, params = {}) => {
	const data = (await suggest.get(endpoint, { params })).data;
	return { error: false, data };
};

// Handle a request
const handle = async (request: any, endpoint: string, body: {}) => {
	try { return await request(endpoint, body) }
	catch (error) {
		console.log(error)
		return {
			error: true,
			message: error.message
		}
	}
}

const thumbnail = (thumbnails: any) => {
	const resulations = ['standard', 'medium', 'high', 'maxres', 'default']
	const resulation = resulations.find(key => thumbnails[key])
	return resulation ? thumbnails[resulation].url : ''
}

//PT2M25S
const duration = (d: String) => {
	return d.replace(/PT|S/g, '').replace(/\M/g, ":")
}

const views = (v: number) => {
	return v >= count.billion
		? (v / count.billion).toFixed(2) + 'B'
		: v >= count.million
			? (v / count.million).toFixed(2) + 'M'
			: v > count.thousand
				? (v / count.thousand).toFixed(1) + "K"
				: v
}

export default {
	async suggestions(queries: { q: String }) {
		return await handle(getSuggest, '/complete/search', queries)
	},
	async videos(queries: YTVideos) {
		return await handle(get, '/videos', queries)
	},
	async channels(queries: YTVideos) {
		return await handle(get, '/channels', queries)
	},
	formatChannel(channel: any) {
		return {
			id: channel.id,
			verified: true,
			name: channel.snippet.title,
			thumbnail: thumbnail(channel.snippet.thumbnails)
		}
	},
	formatVideo(video: any, channel: any) {
		return {
			channel,
			id: video.id,
			title: video.snippet.title,
			frame: video.player.embedHtml,
			thumbnail: thumbnail(video.snippet.thumbnails),
			duration: duration(video.contentDetails.duration),
			views: views(video.statistics.viewCount),
			publishedAt: howAgo(video.snippet.publishedAt),
		}
	}
}
