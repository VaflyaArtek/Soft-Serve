// task 5
const showUserId = (id) => {
    const object = {
        id: id,
    };

    if (id < 0) {
        throw new Error("Your id is negative");
    }

    return object;
};

const showUsers = (ids) => {
    const array = [];

    for (const id of ids) {
        try {
            const user = showUserId(id);
            array.push(user);
        } catch (error) {
            console.error(error.message);
        }
    }

    return array;
};

const ids = [1, 2, -3, 4, -5];
const users = showUsers(ids);
console.log(users);
