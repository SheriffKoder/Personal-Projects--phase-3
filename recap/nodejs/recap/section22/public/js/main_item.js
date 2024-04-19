




let slider_buttons = document.querySelectorAll(".content__item__image--slider--button");
let image = document.querySelector("#img");


//on slider button click,
//animate the image off-screen, change image, animate back the image, 
//change button background to active, change previously active button background to inactive
slider_buttons.forEach(button => {
    button.addEventListener("click", () => {

        if (!image.classList.contains("animate1")) {

            let index = button.getAttribute("id").split("_")[1];




            //change button background
            button.classList.remove("slider--inactive");
            button.classList.add("slider--active");


            //change the already active button to in-active background
            let other_button = Array.from(slider_buttons).filter((other_button) => {
                // return other_button.getAttribute("id").split("_")[1] !== index;
                return (
                    other_button.classList.contains("slider--active")
                    &&
                    other_button.getAttribute("id").split("_")[1] !== index
                );
            });
            other_button[0].classList.remove("slider--active");
            other_button[0].classList.add("slider--inactive");


            //animate image on click
            image.classList.add("animate1");

            //wait for image to go off-screen to change the background
            setTimeout(()=> {
                image.style["background-image"] = `url('/img/product_images/product_image_${index}.png')`;
            }, 450);


            //remove the animation to allow another animation to occur
            setTimeout(()=> {
                image.classList.remove("animate1");
            }, 1500);
        }





    })
})



// $(function(){


//     const slider_button = $(".content__item__image--slider--button");
//     const image = $(".content__item__image--container #img");

//     slider_button.on("click", function() {
//         console.log($(this).attr("id").split("_")[1]);
//         let index = $(this).attr("id").split("_")[1];


//         let classes = image.attr("class").split(" ");

//         console.log(classes);
//         if (image.classList("animate1")) {

//         } else {

        
//             image.addClass("animate1");

//             setTimeout(()=> {
//                 image.css("background-image", `url('./img/product_images/product_image_${index}.png')`)
    
//             }, 1000);
    
    
//             setTimeout(()=> {
//                 image.removeClass("animate1");
    
//             }, 2000);
    
//         }
 

//         // setTimeout(()=> {
//         //     image.css("background-image", `url('./img/product_images/product_image_${index}.png')`)
//         //     image.addClass("animate2")

//         // }, 500);

//         // setTimeout(() => {
//         //     image.removeClass("animate1 animate2");

//         // }, 2000);


//         // .attr("src", `./img/product_images/product_image_${index}.png`)
//         // .delay(3000).css("background-image", `url('./img/product_images/product_image_${index}.png')`)
//         // .delay(3000).css("animation-name", "animation2");
//         // image.css("background-position", "left -500px");
//         // image.css("backgroundPosition", "-10px 0px").animate({
//         //     "backgroundPosition": "0px -500px"
//         // },1000,"linear");

//         // image.delay(3000);
//         // image.css("margin-right", "100px");

//         // image.delay(3000).css("animation-name", "animation2");


//         // image.animate({
//         //     "position": "relative",
//         //     "margin": "0",
//         // },1000,"linear");


//     });

    













// })