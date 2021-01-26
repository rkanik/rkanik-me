export interface Request {
	(
		endpoint: string,
		body: {}
	): {
		error: boolean,
		message?: string,
		data?: {}
	}
}

export interface YTVideos {
	part?: string,
	id?: string,
	chart?: string,
	maxResults?: number,
	pageToken?: string,
	maxWidth?: number,
	maxHeight?: number
}
