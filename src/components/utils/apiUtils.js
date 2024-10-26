export const apiRequest = async (url, method = 'GET', body = null, headers = {}) => {
    const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json', ...headers },
        body: body ? JSON.stringify(body) : null,
    });
    return await response.json();
};
