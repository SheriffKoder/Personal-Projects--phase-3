


function rgb2hsv (r, g, b) {
    let rabs, gabs, babs, rr, gg, bb, h, s, v, diff, diffc, percentRoundFn;
    rabs = r / 255;
    gabs = g / 255;
    babs = b / 255;
    v = Math.max(rabs, gabs, babs),
    diff = v - Math.min(rabs, gabs, babs);
    diffc = c => (v - c) / 6 / diff + 1 / 2;
    percentRoundFn = num => Math.round(num * 100) / 100;
    if (diff == 0) {
        h = s = 0;
    } else {
        s = diff / v;
        rr = diffc(rabs);
        gg = diffc(gabs);
        bb = diffc(babs);

        if (rabs === v) {
            h = bb - gg;
        } else if (gabs === v) {
            h = (1 / 3) + rr - bb;
        } else if (babs === v) {
            h = (2 / 3) + gg - rr;
        }
        if (h < 0) {
            h += 1;
        }else if (h > 1) {
            h -= 1;
        }
    }
    return {
        h: Math.round(h * 360),
        s: percentRoundFn(s * 100),
        v: percentRoundFn(v * 100)
    };
}


//// Trying to apply an animation when clicking on a button

// button
// take a recorded animation and clean its x/y 
// to have starting positions of 0/0
// to add on it later the needed screen position in buttonAnim function
const cleanTrack = (objs) => {
    let pox = 0;
    let poy = 0;
    let total = 0;

    let newObj = [];

    for (let i=0; i<objs.length-1; i++) {
        let temp = {pox: objs[i].pox-objs[0].pox,
        poy: objs[i].poy-objs[0].poy,
        total: objs[i].total
        }
        newObj.push(temp);
    }

    console.log(newObj);

}


// button
  // the simulate function in script.js file not imported when repeating button animation
  // so import here in the component function
let simulate = (incomingObject, location) => {

    setTimeout(()=> {
        let coordX = 0; // Moving from the left side of the screen
        // let coordY = 500; // Moving in the center
        location === "end" ? coordX = incomingObject.length-1: coordX = 0;

        function move() {
            console.log("moving");

            // Move step = 1 array element
            // coordX += 1;
            location === "end" ? coordX -= 1 : coordX += 1;

            console.log("moving1");
            console.log("coordX", coordX);
            // Create new mouse event
            let ev = new MouseEvent("mousemove", {
                view: window,
                bubbles: true,
                cancelable: true,
                clientX: incomingObject[coordX].pox,
                clientY: incomingObject[coordX].poy
            });

            console.log("moving2");

        
            // Send event
            document.querySelector('#mainContent').dispatchEvent(ev);

            //make the animation smoother by repeating it again (slight movement)
            let factor
            location === "end" ? factor = -0.3 : factor = 0.3;
            setTimeout(() => {
                let ev2 = new MouseEvent("mousemove", {
                    view: window,
                    bubbles: true,
                    cancelable: true,
                    clientX: incomingObject[coordX].pox+factor,
                    clientY: incomingObject[coordX].poy+factor
                });
            
                // Send event
                    document.querySelector('#mainContent').dispatchEvent(ev2);
            }, incomingObject[coordX].total/3000);

            console.log("moving3");



            // If the current position of the fake "mouse" is less than the width of the screen - let's move
            // if (coordX < window.innerWidth) {
            // repeat the function again and move to next position
            // with a delay factor from the record simulating user mouse speed delay

            let animaionEnd = false;
            location === "end" ? animaionEnd = (coordX === 0) : animaionEnd = (coordX >= incomingObject.length-1);

            console.log("moving4", animaionEnd);


            if (!animaionEnd) {
                setTimeout(() => {
                    move();
                    //the more speed the faster and less pressure
                }, incomingObject[coordX].total/3000);
            }
        
        }
        
        // Starting to move
        move();
        }, 1000);    
}


// a record for hovering over a button
let objClick = [
{
    "pox": 0,
    "poy": 0,
    "total": 68582.5
},
{
    "pox": 0,
    "poy": -3,
    "total": 68590.5
},
{
    "pox": 0,
    "poy": -6,
    "total": 68598.40000000037
},
{
    "pox": 0,
    "poy": -5,
    "total": 68607.19999999925
},
{
    "pox": 0,
    "poy": -7,
    "total": 68614.80000000075
},
{
    "pox": 0,
    "poy": -8,
    "total": 68622.80000000075
},
{
    "pox": 0,
    "poy": -10,
    "total": 68630.80000000075
},
{
    "pox": 0,
    "poy": -11,
    "total": 68639.09999999963
},
{
    "pox": 0,
    "poy": -13,
    "total": 68647.19999999925
},
{
    "pox": 0,
    "poy": -14,
    "total": 68654.19999999925
},
{
    "pox": 0,
    "poy": -16,
    "total": 68663.19999999925
},
{
    "pox": 0,
    "poy": -18,
    "total": 68670.30000000075
},
{
    "pox": 0,
    "poy": -19,
    "total": 68678.30000000075
},
{
    "pox": 0,
    "poy": -20,
    "total": 68687.90000000037
},
{
    "pox": 0,
    "poy": -21,
    "total": 68696
},
{
    "pox": 0,
    "poy": -23,
    "total": 68702.80000000075
},
{
    "pox": 0,
    "poy": -25,
    "total": 68710.09999999963
},
{
    "pox": 0,
    "poy": -26,
    "total": 68718.69999999925
},
{
    "pox": 0,
    "poy": -28,
    "total": 68727.40000000037
},
{
    "pox": 0,
    "poy": -30,
    "total": 68738.90000000037
},
{
    "pox": 0,
    "poy": -31,
    "total": 68744.19999999925
},
{
    "pox": 0,
    "poy": -32,
    "total": 68750.69999999925
},
{
    "pox": 0,
    "poy": -34,
    "total": 68759.40000000037
},
{
    "pox": 0,
    "poy": -36,
    "total": 68766.59999999963
},
{
    "pox": 0,
    "poy": -37,
    "total": 68775.40000000037
},
{
    "pox": 1,
    "poy": -39,
    "total": 68782.80000000075
},
{
    "pox": 1,
    "poy": -42,
    "total": 68790.90000000037
},
{
    "pox": 2,
    "poy": -44,
    "total": 68798.40000000037
},
{
    "pox": 2,
    "poy": -46,
    "total": 68807.90000000037
},
{
    "pox": 3,
    "poy": -48,
    "total": 68814.09999999963
},
{
    "pox": 3,
    "poy": -50,
    "total": 68822.40000000037
},
{
    "pox": 3,
    "poy": -51,
    "total": 68830.5
},
{
    "pox": 3,
    "poy": -53,
    "total": 68838.30000000075
},
{
    "pox": 3,
    "poy": -55,
    "total": 68879.69999999925
},
{
    "pox": 3,
    "poy": -56,
    "total": 68888
},
{
    "pox": 4,
    "poy": -56,
    "total": 72509.90000000037
},
{
    "pox": 5,
    "poy": -56,
    "total": 72525.5
},
{
    "pox": 6,
    "poy": -57,
    "total": 72532.80000000075
},
{
    "pox": 7,
    "poy": -57,
    "total": 72545.5
},
{
    "pox": 8,
    "poy": -57,
    "total": 72556.69999999925
},
{
    "pox": 10,
    "poy": -58,
    "total": 72564.09999999963
},
{
    "pox": 12,
    "poy": -59,
    "total": 72580.40000000037
},
{
    "pox": 15,
    "poy": -59,
    "total": 72589.5
},
{
    "pox": 17,
    "poy": -60,
    "total": 72596.59999999963
},
{
    "pox": 22,
    "poy": -61,
    "total": 72605.80000000075
},
{
    "pox": 26,
    "poy": -62,
    "total": 72612.19999999925
},
{
    "pox": 31,
    "poy": -63,
    "total": 72621.69999999925
},
{
    "pox": 37,
    "poy": -64,
    "total": 72628.5
},
{
    "pox": 43,
    "poy": -65,
    "total": 72636.30000000075
},
{
    "pox": 50,
    "poy": -66,
    "total": 72644.80000000075
},
{
    "pox": 59,
    "poy": -67,
    "total": 72653.19999999925
},
{
    "pox": 68,
    "poy": -69,
    "total": 72660.59999999963
},
{
    "pox": 80,
    "poy": -70,
    "total": 72670.69999999925
},
{
    "pox": 94,
    "poy": -71,
    "total": 72676.69999999925
},
{
    "pox": 109,
    "poy": -72,
    "total": 72688.19999999925
},
{
    "pox": 126,
    "poy": -73,
    "total": 72692.90000000037
},
{
    "pox": 146,
    "poy": -74,
    "total": 72700.90000000037
}
]

// render again to cause the button animation to be able to repeat
// add it as a dependency for the useEffect that calls simulate()
//  const [render, setRender] = useState(false);


// take a button cleared animation record object and add the viewport to x/y
// to display on screen 
const buttonAnim = (e, myObj, id) => {
console.log(e);

const element = document.getElementById(`${id}`);

let width = element.offsetWidth;
let height = element.offsetHeight;

let screenwidth = e.clientX;
let screenheight = e.clientY;

for(let i=0; i<myObj.length-1; i=i+2) {
    myObj[i].pox = myObj[i].pox+(width/2)+screenwidth;
    myObj[i].poy = ((myObj[i].poy)+screenheight);
    myObj[i].total = myObj[i].total / 2000;
}

let newObj = [...myObj]

simulate(newObj, "start");

console.log(newObj);

}