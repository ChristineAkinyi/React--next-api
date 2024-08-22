const url = '/api/login';

export const userLogin = async ({
    username, password
}: {username: string, password: string}): Promise<any> => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });
        return response.json();
    } catch (error) {
        return error;
    }
};
