
/*

js allows changing content without reloading, animations
jQuery library is light (32kb) so does not slow websites

to start
import the jQuery file in your html script tag
import the url or a local file




*/


//this function will be executed when the page is ready
$(function(){

//time in ms, default 400ms, keywords ("slow") 600ms, ("fast") 200ms


//disappear
//$(".red-box").fadeOut(1000); //this executes //display none
//$(".red-box").delay(2000).fadeIn(1000); //then this
//$(".red-box").fadeTo(500, 0.5); //opacity

//$(".blue-box").fadeOut(1000);
//$(".blue-box").fadeToggle(1000);  //show (if faded out), disappear (if faded in/normal)

//$(".green-box").fadeOut(1000);
//$(".green-box").fadeTo(1000, 0.5);

//Disappear with animation

// $("#content").delay(1000).hide(3000);
// $("#content").delay(1000).show(1000);
// $("#content").delay(1000).toggle(1000);


// $(".blue-box").slideUp(2000);
// $(".blue-box").slideDown(2000);
// $(".blue-box").slideToggle(2000);


//$("#content").hide();
//$("#content").hide().delay(1000).slideDown(1000).slideToggle(1000);
//$("#content").delay(2000).slideToggle(1000);


//custom animations with css properties
//can change anything except colors
//arguments
//1st: object with css properties
//2nd: time
//3rd: linear etc. default "swing"
// $(".blue-box").animate({
//     "margin-left": "+=100px",
//     "opacity": "0.5",
// }, 1000, "linear");
// //using the "-=" allows to decrease from the current margin value
// $(".blue-box").animate({
//     //"margin-left": "-100px",
//     "margin-left": "-=100px",
//     "opacity": "1",
// }, 1000, "linear");


////Delaying / chaining

//delay
//cant separate elements, all different elements work together
//$(".red-box").slideUp(1000).delay(1000).slideDown(1000);
//$(".blue-box").slideUp(1000).delay(1000).slideDown(1000);


//callbacks, to animate only after the previous animation
//and put js code
// $(".red-box").fadeTo(700, 0.5, () => {
//     //alert("Hello");
//     $(".blue-box").fadeTo(700, 0.5, () => {

//         $(".green-box").fadeTo(700, 0.5, () => {

//         })
//     })
// });


//adding css with jQuery
// $(".blue-box").fadeTo(3000, 1, ()=>{
//     $(".blue-box").css("background-color", "rgba(0,50,190,0.8)");

// });




////selecting elements by attribute, order

//attribute selectors
//:checked (radio), :selected(select option tags)
//$("input:text").css("background-color", "rgba(0,50,190,0.8)");
//$("input[type='email']").css("background-color", "rgba(0,50,190,0.8)"); //:email does not work
//$("input[type='email'], input[type='text']").css("background-color", "rgba(0,50,190,0.8)");

// :first, :last, :even, :odd (starting with index 0)
//$("li:last").css("background-color", "rgba(0,50,190,0.8)");
//$("li:odd").css("background-color", "rgba(0,50,190,0.8)");

//select the first/last ul element
//$("ul").first().css("border", "2px solid rgba(180,180,30,0.8")
//$("ul").last().css("border", "2px solid rgba(180,180,30,0.8")


//going through the traversal DOM tree

$("#nestedLi").css("border", "2px solid rgba(0,0,255,0.2");


//// down the hierarchy
//all children that are "li" AND their "li" children also
//$("#list").find("li").css("background-color", "rgba(180,180,30,0.8");

//only direct "li" children of #list, not their "li" children also
//$("#list").children("li").css("background-color", "rgba(180,180,30,0.8");


////up the hierarchy
//all "ul" parents of #nestedLi and their "ul" parents
//$("#nestedLi").parents("ul").css("border", "2px solid rgba(180,180,30,0.8");

//only direct "ul" parents of #nestedLi, not their "ul" parents
//$("#nestedLi").parent("ul").css("border", "2px solid rgba(180,180,30,0.8");


////along the hierarchy
//all direct siblings to #nestedLi, or can specify "l"
//$("#nestedLi").siblings().css("border", "2px solid rgba(180,180,30,0.8");

//selecting all previous or next elements on the same sibiling level in the DOM
// $("#list").prev().css("border", "2px solid rgba(255,0,0,0.8");
// $("#list").next().css("border", "2px solid rgba(0,255,0,0.8");



//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//Part2

////filter in/out your selection

//filter
// :even / :odd / :first / :last / function / more specification
//index start at element 0,1,2
//$("#list").children("li").filter(":even").css("border", "2px solid rgba(180,180,30,0.8");
//$("li").filter(":odd").css("border", "2px solid rgba(180,180,30,0.8")
//$("li").filter(".listItem").css("border", "2px solid rgba(180,180,30,0.8");

//can use a function that returns a value (true)

// $(".listItem").filter((index) => {
//     //return index === 1;
//     //select 0,3,6,9
//     return index % 3 === 0;

// }).css("border", "2px solid rgba(180,180,30,0.8");


//not (filter out)
// $("li").not(".listItem").css("border", "2px solid rgba(180,180,30,0.8");
// $("ul").not(":first").css("border", "2px solid rgba(180,180,30,0.8")


//similar to filter, give index
//pass to eq the number of the index for the element you want, first at 0
//passing -ve numbers, will count back to front, starting -1
//li from the whole page, not last li here and last li there
// $("li").eq(-1).css("border", "2px solid rgba(180,180,30,0.8");



//The DOM "document object model"
//whenever using js or jquery to manipulate the page
//we edit the "document object model tree" not the html code itself

////Add a child
//Add-last: append a new "<li>" after the last ul
// $("ul").filter(":last").append("<li> Last item **** </li>");
//$("<li> Last item **** </li>").appendTo($("ul").filter(":last"));

//Add-first: append a new "<li>" before the last ul
// $("ul").filter(":last").prepend("<li> Last item **** </li>");
// $("<li> Last item **** </li>").prependTo($("ul").filter(":last"));


//Add a sibling
//add a new "<li>" before/after the last "li" element
// $("li").filter(":last").before("<li> Pre-Last item **** </li>");
// $("li").filter(":last").after("<li> Post-Last item **** </li>");

//move blue-box after red-box
//also on second call, it will be re-created
//$(".red-box, .green-box").after($(".blue-box"));

//can pass a function that returns some element/html string
// $("#list").before(()=> {
//     return $(".red-box");
// });

//$(".red-box").after($(".red-box")); //does not clone itself

//////////////////////////////////////////////////////////////////////////


////put element in place of another element

//replace - remove the last li on page and put this html string
// $("li").filter(":last").replaceWith("<li>Replaced</li>")
//$("<li>Replaced</li>").replaceAll($("li").filter(":last"));

//replace - remove red/blue and put green instead (green is deleted)
// $(".red-box, .blue-box").replaceWith($(".green-box"));
//$(".green-box").replaceAll(".red-box, .blue-box");


//removing elements or contents

//the element can still be retrieved after removal if stored in a variable

//remove()
//$(".green-box").remove();
//ex remove all children that are not text-area, input-text, <br>
//$("form").children().not("textarea, input[type=text], br").remove();

//detach()
//data and event handlers that are associated 
//with the removed element will be remembered when retrieved
// var myForm = $("#form1").detach();
// myForm.insertBefore("#list");


//empty()
//only removes inner content(s)
// $(".green-box").empty();            //removes text
// $("ul").filter(":last").empty();    //removes all elements
// $("li").filter(":last").empty();    //removes text


//////////////////////////////////////////////////////////////////////////



//accessing/changing attributes

////attr
// var specialLink = $("#myLink");
//output the attr
// console.log(specialLink.attr("href"));
//change the attr
// specialLink.attr("href", "www.facebook.com");

//ex toggle boolean selectors in html checked/selected/enabled
// var checkBox = $("input[type=checkbox]");
// console.log(checkBox.attr("checked"));  //checked - default
// checkBox.attr("checked", false);
// console.log(checkBox.attr("checked"));  //undefined

////prop - can be used with eventListeners
// var checkBox = $("input[type=checkbox]");
// console.log(checkBox.prop("checked"));  //true - default
// checkBox.prop("checked", false);
// console.log(checkBox.prop("checked"));  //false


////val - the "value" attr
// console.log($("#amount").val());
// $("#amount").val("6");
// console.log($("#amount").val());


//////////////////////////////////////////////////////////////////////////


//jQ will add css with the appropriate browser prefix automatically -moz -webkit
//no need to specify prefix
//jQ will ignore !important in the .css

//can pass functions to .css
// $("#myLink").css("user-select", ()=> {  return "none"; });


// $(".red-box").height("+=100px");


//accessing css properties
// console.log($(".red-box").css("width")); //80px
// console.log($(".red-box").width());      //80 also

// //get all the properties you want into an object
// var properties = $(".red-box").css(["background-color", "width", "height"]);
// console.log(properties);
// console.log(properties["background-color"]);


//////////////////////////////////////////////////////////////////////////


//add css "classes"
// $("a").addClass("fancy-border fancy-text");

//the function passed will receive index and currentClass
//this works if there is "only" one class, "fancy-border"
//adds class beside the currentClass

// $("a").addClass((index, currentClass) => {
//     if (currentClass === "fancy-border") {
//       return "fancy-border2";
//     }
// });
  
//remove / switch classes
//$(".red-box").removeClass("red-box").addClass("blue-box");

  
//////////////////////////////////////////////////////////////////////////


//the "data" storage attribute
//store data in this attribute
//uses capacity from memory

// let gallery = $(".gallery");

// //in html5 we have data attr like data-anyname="some data" (small letters)
// console.log(gallery.data("anyname"));



// let images = [
//   "images/laptop-mobile_small.jpg",
//   "images/laptop-on-table_small.jpg",
//   "images/people-office-group-team_small.jpg"
  
// ];

// gallery.data("availableImages", images);
// gallery.data("name", "awesome gallery");

// //access specific data field
// console.log(gallery.data("availableImages"));
// //or return all data in an object
// console.log(gallery.data());

// //remove associated data from an element
// gallery.removeData("name");

// //or remove all data fields
// gallery.removeData();



//accessing/adding text/html on elements
// let firstP = $("p:first");
// console.log(firstP.text()); //output text with no html tags inside
// console.log(firstP.html()); //output text with the html tags inside like <em>

// firstP.text("<h3> hello world </h3>"); //displays text with the html tags
// firstP.html("<h3> <em> hello world</em> </h3>"); //displays html, html tags used

// //keep the original content and append text to it
// let text1 = firstP.html();  //to keep the tags inside
// firstP.html(text1 + " <button> appended button !!!</button>"); //displays text




//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//Part3
/*
//events and event handlers
//react to events with js

////Click
//reading the event will display data can use like clientX,Y etc.
$(".red-box").click(function (e) {
    $(this).fadeTo(500, 0.5);
});

//auto-click an element
//$(".red-box").click();



////Hover
$(".red-box").hover(function (e) {
    //$(this).fadeTo(500, 0.5);
});

//blueBox.hover((HoverIn) => {}, (HoverOut => {}))
$(".red-box").hover(function (e) {
    //$(this).slideUp(500);
},function (e) {
    //$(this).slideDown(500);
});


////mouse enter/leave
//stop the animation running on the element
$(".red-box").mouseenter(function (e) {
    $(this).stop().fadeTo(500, 0.5);
});

$(".red-box").mouseleave(function (e) {
    $(this).stop().fadeTo(500, 1);
});

//.on for an event or multiple events
$(".red-box").on("click keydown", function () {
   // $(this).css("background-color", "green");
});


////Modularizing;
//defining functions outside and use their variable name

const greenBackground = function () {
    $(this).css("background-color", "green");
};

$(".red-box").on("click keydown", greenBackground);


////Delegated events
//allow dynamically / new added elements to have events
//by assigning the event from a parent

$("body").on("click", ".yellow-box", function () {
    $(this).slideUp();
});

$("#content").append("<div class='yellow-box'> </div>");


//function accesses inputs properties
function greetUser(eventData) {
    username = eventData.user || "anonymous";    // || "default-value"
    email = eventData.email || "example.com";    // || "default-value"
  
    alert("Welcome Back " + username + " your contact is " + email);  
}

//give data to events
$(".green-box").click({ user: "Peter", email: "email@test.com" }, function(event) {
    greetUser(event.data);
});
  
*/  
//////////////////////////////////////////////////////////////////////////


// //which a jQ event property to give the pressed key
// $("html").keydown(function (event) {
//     //console.log(event.which);
// });


// //ex : key pressed changes blue-box margin animation
// const ARROW_RIGHT = "39";
// const ARROW_LEFT = "37";

// $("html").keydown(function(event) {
//   if(event.which == ARROW_RIGHT) {
//     $(".blue-box").stop().animate({
//       marginLeft: "+=10px"
//     }, 1000);
//   }
//   else if(event.which == ARROW_LEFT) {
//     $(".blue-box").stop().animate({
//       marginLeft: "-=10px"
//     }, 1000);
//   }
//   //67=C
//   else if(event.ctrlKey && event.which == 67) {
//       $(".blue-box").stop().animate({
//         marginLeft: "0px"
//       }, 1000);
//   }

// });


//selecting multiple elements
//$(".red-box, .blue-box, .green-box").hide();
//storing multiple elements to use a the same animation
//put $(this) in the function
// const myBoxes = $(".red-box, .blue-box, .green-box");


// ////focus and blur events on inputs
// var inputFields = $("input:text, input:password, textarea");

// inputFields.focus(function(){
//     $(this).css("box-shadow", "0 0 10px yellow");
// });

// //inputFields.blur(function(){
//    $(this).css("box-shadow", "0px 0px 10px red");
// //});

// //ex can be used for input value validation
// let name = $("#name")
// name.blur(function () {
//   if ((name.val().length) < 3) {
//     name.css("color", "red");
//   }
//   else {
//     name.css("color", "black");
//   }
// })



//////////////////////////////////////////////////////////////////////////



//example: image slideshow
//interval loop, fadeout, change src attr, fadeIn, index++
/*
let galleryImage = $(".gallery").find("img").first();

let images = [
    "images/laptop-mobile_small.jpg",
    "images/laptop-on-table_small.jpg",
    "images/people-office-group-team_small.jpg"
];
    

galleryImage.css("width", "80vw");


let i=0;
setInterval(()=> {

    galleryImage.fadeOut(1500, () => {
        galleryImage.attr("src", images[i]);
        galleryImage.fadeIn(1500);
    });

    i++;
    if(i === images.length) {
        i = 0;
    }


}, 3100)
*/



//example: change gallery image on click
//on click, fadeout, src attr, fadeIn, index++

/*
let images = [
    "images/laptop-mobile_small.jpg",
    "images/laptop-on-table_small.jpg",
    "images/people-office-group-team_small.jpg"
];


j = 0;
$(".gallery").on("click", () => {


    $(".gallery img").fadeOut(500, () => {
        $(".gallery img").attr("src", images[j]);
        $(".gallery img").fadeIn(500);


    });

    (j === images.length-1) ? j = 0 : j++;
});
*/


//.add //adds elements to the current selection so check1 becomes "check1 label" ?
//.is.(":checked")
//check.prop("checked")

//on element "change" event
/*
$("#check1").change(function() {
    let isChecked = $(this).is(":checked"); //can use .prop("checked")
    if (isChecked) {
      $(this).add("label[for='check1'").css("box-shadow", "0 0 4px #181");
  
    } else {
      $(this).add("label[for='check1'").css("box-shadow", "0 0 4px #811");
  
    }
})

$("select").change(function() {

    //get the child in select with attr been selected
    let selectedOption = $(this).find(":selected");
    if (selectedOption) {
        alert(selectedOption.text());
    }
})
*/


//on submit event
//useful for providing fast feedback for the user 
//and prevent page reload in case the validation is not right
/*

//example: prevent submit when textarea is empty
//and give border to textarea

$("form").submit(function(event) {

  let textarea = $("#message");
  if (textarea.val().trim() == "") {  //if no content in the textarea
    textarea.css("box-shadow", "0 0 4px #811"); //display red shadow
    
    //prevent the form from submitting
    //will prevent any default actions that will happen 
    //when click that event or it happens
    event.preventDefault();

  } else {

    //form will be submitted

  }
});
*/




//example: prevent "form" submit if any of inputs is not valid
//and give the feedback a text to the html span attached
//function has all input values, where input validation functions preventDefault
/*
var form = $("#form1");

form.submit(function(event) {
    var name = $("#name").val();
    var password = $("#password").val();
    var message = $("#message").val();
    var checkbox = $("#checkbox"); //.is(":checked");
  
    validateNameField(name, event);
    validatePassword(password, event);
    validateMessage(message, event);
    validateCheck(checkbox, event);
  
});

////////////
//the event is for using the preventDefault

function validatePassword (password, event) {
    if(!ValidPassword(password)) {
      $("#password-feedback").text("Please enter at least four characters and a number");
      event.preventDefault();
    } else {
      //remove text if is valid
      $("#password-feedback").text("");
    }
}

  
//function ValidPassword (password) {
    //return password.length >=4 && /.star[0-9].star/.test(password);
//}



function isValidName(name) {
    return name.length >= 2;
}


function ValidMessage (text) {

    return (text.trim() == "" || text.length < 4) ? false : true;
}


function ValidCheck (check) {
    return check.prop("checked");
}
*/
  

//example: form input on blur feedback
//function has all inputs, run validate input on each input blur
/*
var form = $("#form1");
enableFastFeedback(form);

function enableFastFeedback(formElement) {
  var nameInput = formElement.find("#name");
  var passwordInput = formElement.find("#password");
  var messageInput = formElement.find("#message");
  var checkboxInput = formElement.find("#checkbox");


  passwordInput.blur(function (event) {
    var password = $(this).val();
    //validatePassword(password, event);

    if(!ValidPassword(password)) {
      $(this).css({"box-shadow": "0 0 4px #811", "border": "1px solid #600"});
    } else {
      $(this).css({"box-shadow": "0 0 4px #181", "border": "1px solid #060"});
    }
  });



}

function ValidPassword (password) {
    return password.length >=4 && /.star[0-9].star/.test(password);
}
*/



//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

/*
AJAX Requests
asynchronous javascript and xml

allows to dynamically fetch data from the server without page reloading


user interacts with page > request / sent from js > web-server server side script > database
js manipulates page with data returned < data (xml/text) < web-server server side script < database


sending a GET request to a server to retrieve data from a specific url
or POST data

$.get() //GET ajax request
$.post() //POST ajax request
$.ajax()  //advanced, where can set all the basic configurations yourself
$.getJSON() //GET request to retrieve json data


//this can help in making a frontend app and access your backend API ?
$.ajax({
    headers: { "Accept": "application/json"},
    type: 'GET',
    url: './unExistingFile.js',
    crossDomain: true,
    beforeSend: function(xhr){
        xhr.withCredentials = true;
  },
    success: function(data, textStatus, request){
        console.log(data);
    }
});


//starwars: https://pipedream.com/apps/swapi
//free apis: https://github.com/toddmotto/public-apis
//Pokemon: //https://pokeapi.co/



*/



//$.load()
//retrieve file content from your own server (script or html files)
/*
//this does not work
$("#code").load("js/unExistingFile.js", function(response, statusCode) {
    if (statusCode === "error") {
      console.log(statusCode)
      alert("file does not exist");
    }
    console.log(response);  //undefined
});
*/


//example: using the flickr API
//getJSON .then .catch
/*
//to access a server on a different domain will have to
//use the "JSON P" format
//and the "?jsoncallback=?" after the API Url will tell the API to do that


let flickrApiUrl = "https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"


$.getJSON(flickrApiUrl, { 
    //configurations set by the API
    tags: "sun, beach",
    tagmode: "any",   //image should have sun or beach not must both of them otherwise "all"
    format: "json"    //to retrieve json data also can use xml

}).then(function(data) {
    //on success
    console.log(data);

    //$.each
    //jQuery method to iterate over an array with index 0,1,2 or object with key names

    $.each(data.items, function (index, value) {
      console.log(value);
      //console.log(value.media.m);
      $("<img>").attr("src", value.media.m).appendTo("#flickr");

      //output only 3 images  - terminate the each function
      if (index == 2) {
        return false;
      }


    })

}).catch(function () {
    alert("AJAX call failed");
  
}).always(function () {
    //executes in either case done/fail  
});
*/
  

//example: pokemon API

/*
let pokeapiUrl = "https://pokeapi.co/api/v2/generation/1";

$.getJSON(pokeapiUrl)
.then(function (data) {

    console.log(data);

    $.each(data.pokemon_species, function (index, pokemon) {

        var name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
        var par = $("<p>").html("Pokemon species no. " + (index+1) + " is " + name);
        par.appendTo("#pokemonDiv");
  
      //output only 3 images  - terminate the each function
      if (index == 2) {
        return false;
      } 

    })


}).catch(function () {
    alert("AJAX call failed");
  
}).always(function () {
    //executes in either case done/fail  
});
*/





});
