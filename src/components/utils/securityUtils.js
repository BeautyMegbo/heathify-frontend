export const generateRandomToken = () => {
    return crypto.randomBytes(16).toString('hex');
};

export const hashPassword = (password) => {
    return crypto.createHash('sha256').update(password).digest('hex');
};
