// task 2
const checkAge = () => {
    try {
        const name = prompt("Enter your name");
        const ageInput = prompt("Enter your age");
        const status = prompt("Enter your status");

        if (!ageInput || !name || !status) {
            throw new Error("The field is empty! Please enter your age");
        }

        const age = parseInt(ageInput);

        if (isNaN(age)) {
            throw new EvalError("Age must be a numeric value.");
        }

        if (age > 70 || age < 18) {
            throw new RangeError("Age must be between 18 and 70.");
        }

        if (
            !(status === "owner" || status === "moderator" || status === "user")
        ) {
            throw new EvalError(
                "Invalid status. Please enter owner, moderator, or user."
            );
        }
    } catch (error) {
        alert(`Error: ${error.name} - ${error.message}`);
    }
};

checkAge();
