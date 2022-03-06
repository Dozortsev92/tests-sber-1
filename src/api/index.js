import API_DEV from "api/api-dev";
import { DEVELOPMENT_MODE, USE_TEST_API } from "common/controls";

const API = {
	async GET_USER_PLAYLIST(userId) {
		if (!DEVELOPMENT_MODE || !USE_TEST_API) {
			return await fetch(`/get_user_playlist?id=${userId}`)
		}
		return await new Promise((resolve) => {
			setTimeout(() => resolve(API_DEV.GET_USER_PLAYLIST()), 500);
		})
	},
};

export default API;
