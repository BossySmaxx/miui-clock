const dashedCircle = document.querySelector('.outer-circle svg .dashed-circle');
const outerCircle = document.querySelector('.outer-circle');
const innerCircle = document.querySelector('.inner-circle');
const handWrapper = document.querySelector('.hand-wrapper');
const body = document.querySelector('body');

const outerCircleWidth = outerCircle.clientWidth;
const outerCircleHeight = outerCircle.clientHeight;

// const innerCircleWidth = innerCircle.clientWidth;
// const innerCircleheight = innerCircle.clientHeight;

// const handWrapperWidth;
// const handWrapperHeight;

// console.log(dashedCircle.getAttribute('cx'));

dashedCircle.setAttribute('rx', (outerCircleWidth/2) - dashedCircle.getAttribute('stroke-width') * 2.3);
dashedCircle.setAttribute('ry', (outerCircleWidth/2) - dashedCircle.getAttribute('stroke-width') * 2.3);
dashedCircle.setAttribute('cx', outerCircleWidth/2);
dashedCircle.setAttribute('cy', outerCircleHeight/2);


innerCircle.style.width = outerCircleWidth - 150 + 'px';
innerCircle.style.height = outerCircleWidth - 150 + 'px';

innerCircle.style.width = outerCircleWidth - 150 + 'px';
innerCircle.style.height = outerCircleWidth - 150 + 'px';

window.addEventListener('resize', (e) => {
    const outerCircleWidth = outerCircle.clientWidth;
    const outerCircleHeight = outerCircle.clientHeight;
    dashedCircle.setAttribute('rx', (outerCircleWidth/2) - dashedCircle.getAttribute('stroke-width') * 2.3);
    dashedCircle.setAttribute('ry', (outerCircleWidth/2) - dashedCircle.getAttribute('stroke-width') * 2.3);
    dashedCircle.setAttribute('cx', outerCircleWidth/2);
    dashedCircle.setAttribute('cy', outerCircleHeight/2);
    console.log("resizing");

    // innerCircle configuration
    innerCircle.style.width = outerCircleWidth - 150 + 'px';
    innerCircle.style.height = outerCircleWidth - 150 + 'px';

    // console.log(outerCircle.clientWidth);
    // console.log(innerCircle.clientWidth);
})


// touches and mouse events
const msgBox = document.querySelector('.msg');

if (isAndroid = /mobile/.test(navigator.userAgent.toLowerCase())) {                                      //if device is a mobile 
    // console.log("yes");

    msgBox.classList.add('msg-active');
    // touch Move
    outerCircle.addEventListener('touchmove', (event) => {
        // console.log(event.touches[0].screenX + ":" + event.touches[0].screenY);

        if (event.touches[0].screenX < body.clientWidth/2 && event.touches[0].screenX < body.clientHeight/2 ) {
            outerCircle.style.transform = `rotateX(-10deg) rotateY(-10deg) translateZ(-50px)`;
            innerCircle.style.transform = `rotateX(-9deg) rotateY(-9deg) translate(-50%, -50%) translateZ(50px)`;
        }
        if (event.touches[0].screenX < body.clientWidth/2 && event.touches[0].screenX > body.clientHeight/2 ) {
            outerCircle.style.transform = `rotateX(-10deg) rotateY(10deg) translateZ(-50px)`;
            innerCircle.style.transform = `rotateX(-9deg) rotateY(9deg) translate(-50%, -50%) translateZ(50px)`;
        }
        if (event.touches[0].screenX > body.clientWidth/2 && event.touches[0].screenX < body.clientHeight/2 ) {
            outerCircle.style.transform = `rotateX(10deg) rotateY(-10deg)translateZ(-50px)`;
            innerCircle.style.transform = `rotateX(9deg) rotateY(-9deg) translate(-50%, -50%) translateZ(50px)`;
        }
        if (event.touches[0].screenX > body.clientWidth/2 && event.touches[0].screenX > body.clientHeight/2 ) {
            outerCircle.style.transform = `rotateX(10deg) rotateY(10deg)translateZ(-50px)`;
            innerCircle.style.transform = `rotateX(9deg) rotateY(9deg) translate(-50%, -50%) translateZ(50px)`;
        }

    })

    // touch end
    outerCircle.addEventListener('touchend', (event) => {
        // console.log(event.touches[0].screenX + ":" + event.touches[0].screenY);

        outerCircle.style.transform = `rotate(0)`;
        innerCircle.style.transform = `rotate(0) translate(-50%, -50%)`;
    })


} else {                                                                                                 //if device is a computer (PC or touch)

    msgBox.classList.remove('.msg-active');

    // console.log("not mobile");
    body.addEventListener('mousemove', (pos) => {
        let delta = calcDistance({x: pos.clientX, y: pos.clientY}, {x: body.clientWidth/2, y: body.clientHeight/2});

        // console.log(pos.clientX);
        if (pos.clientX < body.clientWidth/2 && body.clientHeight/2 < pos.clientY) {
            outerCircle.style.transform = `rotateX(-${delta}deg) rotateY(-${delta}deg) translateZ(-50px)`;
            innerCircle.style.transform = `rotateX(-9deg) rotateY(-9deg) translate(-50%, -50%) translateZ(50px)`;
    
        } 
        if (pos.clientX > body.clientWidth/2 && body.clientHeight/2 < pos.clientY) {
            outerCircle.style.transform = `rotateX(-${delta}deg) rotateY(${delta}deg) translateZ(-50px)`;
            innerCircle.style.transform = `rotateX(-9deg) rotateY(9deg) translate(-50%, -50%) translateZ(50px)`;
        }
        if (pos.clientX < body.clientWidth/2 && body.clientHeight/2 > pos.clientY) {
            outerCircle.style.transform = `rotateX(${delta}deg) rotateY(-${delta}deg)translateZ(-50px)`;
            innerCircle.style.transform = `rotateX(9deg) rotateY(-9deg) translate(-50%, -50%) translateZ(50px)`;
        }
        if (pos.clientX > body.clientWidth/2 && body.clientHeight/2 > pos.clientY) {
            outerCircle.style.transform = `rotateX(${delta}deg) rotateY(${delta}deg)translateZ(-50px)`;
            innerCircle.style.transform = `rotateX(9deg) rotateY(9deg) translate(-50%, -50%) translateZ(50px)`;
        }
    })

}

function calcDistance (mouse, target) {
    let d = Math.sqrt(((target.x - mouse.x), (target.x - mouse.x)) + ((target.y - mouse.y) * (target.y - mouse.y)));
    return (Math.abs(d) / 20);
}

// showing Time and animation in clcok #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#
setInterval(() => {
    let seconds = new Date().getSeconds();
    let min = new Date().getMinutes();
    let hour = new Date().getHours();

    if (hour > 12) {
        hour -= 12; 
    }
    // console.log(hour + ":" + min + ":" + seconds);

    document.querySelector('.sec-wrapper').style.transform = `translate(-50%, -50%) rotate(${seconds*6}deg)`;
    document.querySelector('.hr-wrapper').style.transform = `translate(-50%, -50%) rotate(${hour*30}deg)`;
    document.querySelector('.mn-wrapper').style.transform = `translate(-50%, -50%) rotate(${min*6}deg)`;
}, 100);

