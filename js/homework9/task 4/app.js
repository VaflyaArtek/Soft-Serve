$(document).ready(function () {
    const checkboxes = $(":checkbox");

    checkboxes.on("change", function () {
        const checkedCheckboxes = checkboxes.filter(":checked");

        if (checkedCheckboxes.length >= 3) {
            checkboxes.attr("disabled", true);
        }
    });
});
