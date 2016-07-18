/**
 * Created by robertzzy on 18/07/16.
 */
export function checkStatus(response) {
	if (response.status >= 200 && response.status < 300) {
		return response
	} else {
		var error = new Error(response.statusText);
		error.status = response.status;
		error.response = response;
		throw error
	}
}

export function parseJSON(response) {
	return response.json()
}
