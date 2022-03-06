import initialState from 'store/initialState';
import { UserActionTypes, UserAction, IUser, ISong } from "ts-types/user";

export const userReducer = (state = initialState.user, action: UserAction): IUser => {
	switch (action.type) {
		case UserActionTypes.SET_USER_PLAYLIST:
			return {
				...state,
				playlist: action.payload,
			};
		case UserActionTypes.TOGGLE_TRACKING_SONG:
			return {
				...state,
				playlist: state.playlist.map((song: ISong): ISong => song.id !== action.payload
					? song
					: {
						...song,
						tracked: !song.tracked,
					}
				),
			};
		default: return state;
	}
}
