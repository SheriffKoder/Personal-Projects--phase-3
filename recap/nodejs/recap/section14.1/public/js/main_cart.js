
$ (function() {


    $(".row2-tab").on("click", function () {

        console.log($(this).attr("id"))
        let current;
        let other;
        if ($(this).attr("id") === "buy-again") {
            current = "buy-again";
            other = "saved";
        } else {
            other = "buy-again";
            current = "saved";

        }

        $(`#${current}`).removeClass("cart--not-active-tab").addClass("cart--active-tab");
        $(`#${other}`).removeClass("cart--active-tab").addClass("cart--not-active-tab");
        $(`.row2--${current}-items--wrapper`).stop().fadeIn(200);
        // console.log($(`#${current}_content`));
        $(`.row2--${other}-items--wrapper`).stop().fadeOut(200);
        // $(`#${current}_container`).css("background-color", "white");
        // $(`#${other}_container`).css("background-color", "var(--sort-button-grey)");

    }); 






});