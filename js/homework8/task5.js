// task 5
const checkLogin = (login) => {
    const isValid = /^[a-zA-Z][a-zA-Z0-9.]{1,9}$/.test(login);
    const numbers = login.match(/\d+(\.\d+)?/g) || [];

    return {
        isValid,
        numbers,
    };
};
