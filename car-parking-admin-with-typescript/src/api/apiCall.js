import {
    checkAccessToken,
    checkRefreshToken,
    getAccessToken,
    refreshAuthToken
} from '../components/Login/Auth';
const baseUrl = process.env.REACT_APP_BASE_URL + '/super';
const loginCheck = async () => {
    const isAccess = await checkAccessToken();
    const isRefresh = await checkRefreshToken();
    if (isAccess && isRefresh) {
        return true;
    } else {
        const isRefreshed = await refreshAuthToken();
        if (isRefreshed) return true;
        else return false;
    }
};

const apiCall = async (endPoint, method = 'GET', data = []) => {
    try {
        await loginCheck();
        const token = getAccessToken();
        const response = await fetch(`${baseUrl}${endPoint}`, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            },
            body: method === 'GET' ? null : JSON.stringify(data)
        });
        const responseData = await response.json();

        if (response.ok) {
            return {
                ok: true,
                data: responseData.data,
                msg: responseData.message
            };
        } else {
            // if (responseData.message === 'Invalid Token') {
            //     await refreshAuthToken();
            //     await apiCall(endPoint, method, data);
            // }
            return {
                ok: false,
                msg: responseData.message
            };
        }
    } catch (err) {
        return {
            ok: false,
            message: err.message
        };
    }
};

export default apiCall;
