$(document).ready(function () {
    $("h3").each(function () {
        const nextDiv = $(this).next("div");

        if (nextDiv.length > 0) {
            $(this).before(nextDiv);
        }
    });
});
