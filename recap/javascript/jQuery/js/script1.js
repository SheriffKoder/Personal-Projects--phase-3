
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














});