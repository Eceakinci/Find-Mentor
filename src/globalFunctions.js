const globalFunction = {
    async getData() {
        try {
            const response = await fetch(process.env.VUE_APP_MENTOR_URL);

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
};

export default globalFunction;