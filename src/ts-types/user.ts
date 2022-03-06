export interface ISong {
	id: number;
	band?: string;
	name?: string;
	tracked?: boolean;
}

export type PlaylistType = ISong[] | null;

export interface IUser {
	id: number;
	playlist: PlaylistType;
}

export enum UserActionTypes {
	SET_USER_PLAYLIST = 'SET_USER_PLAYLIST',
	TOGGLE_TRACKING_SONG = 'TOGGLE_TRACKING_SONG',
}

interface SetUserPlaylistTypes {
	type: UserActionTypes.SET_USER_PLAYLIST;
	payload: ISong[];
}

interface ToggleTrackingSong {
	type: UserActionTypes.TOGGLE_TRACKING_SONG;
	payload: number;
}

export type UserAction = SetUserPlaylistTypes | ToggleTrackingSong;
