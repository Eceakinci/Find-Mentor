const globalFunction = {
    async getData() {
        try {
            const response = await fetch(import.meta.env.VITE_APP_MENTOR_URL);

            if (response.ok) {
                return await response.json();
            } else {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        } catch (error) {
            // TODO: General error function goes here
            console.log(error)
        }
    },
    async getCityData() {
        try {
            const headers = new Headers();
            headers.append("X-CSCAPI-KEY", import.meta.env.VITE_APP_CITY_API_KEY);
            const requestOptions = {
                method: 'GET',
                headers: headers,
                redirect: 'follow'
            }
            const response = await fetch(import.meta.env.VITE_APP_CITY_API, requestOptions)
            return await response.json()
        } catch (error) {
            // TODO: General error function goes here
            console.log(error)
        }
    }
};

export default globalFunction;