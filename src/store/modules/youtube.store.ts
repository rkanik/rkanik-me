import { YTVideos } from "@/apis/types"
import youtube from "@/apis/youtube"

const initialState = {
	videos: [],
	channels: [],
	nextPageToken: null
}

const getters = {
	$ytVideos: ({ videos }: typeof initialState) => videos
}

const mutations = {
	setYTState(state: any, payload: any) {
		Object.keys(payload).forEach((key: string) => {
			state[key] = payload[key]
		})
	},
	pushYTVideos(state: any, payload: any) {
		const videos = Array.isArray(payload) ? payload : [payload]
		state.videos.push(...videos)
	},
	pushYTChannels(state: any, payload: any) {
		const channels = Array.isArray(payload) ? payload : [payload]
		state.channels.push(...channels)
	}
}

const actions = {
	async fetchVideos({ commit, state: { nextPageToken, channels } }: any) {
		let params: YTVideos = {
			maxResults: 8,
			chart: "mostPopular",
			part: "snippet,player,contentDetails,statistics",
		}
		if (nextPageToken) params.pageToken = nextPageToken
		let { error, data, message } = await youtube.videos(params)
		if (error) {
			console.log(error)
			return { error, message }
		}
		let newChannels = []
		let newChannelIds = data.items
			.map((i: any) => i.snippet.channelId)
			.filter((c: any) => !channels.some((ch: any) => ch.id === c))
		if (newChannelIds.length) {
			let { error, data } = await youtube.channels({
				part: 'snippet', id: newChannelIds.toString()
			})
			if (!error) {
				newChannels = data.items.map(
					(a: any) => youtube.formatChannel(a)
				)
			}
		}
		newChannels.length && commit('pushYTChannels', newChannels)
		let videos = await Promise.all(data.items.map(async (item: any) => {
			let channel = channels.find(
				(c: any) => c.id === item.snippet.channelId
			)
			return youtube.formatVideo(item, channel)
		}))
		commit('setYTState', { nextPageToken: data.nextPageToken })
		nextPageToken
			? commit('pushYTVideos', videos)
			: commit('setYTState', { videos })
		return { error }
	}
}

export default {
	namespaced: true,
	state: { ...initialState },
	getters, mutations, actions
}
