function loco(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

var sound = new Audio("ambient.mp3")


function loader(){
  var loader = document.querySelector("#loader")
var circle = document.querySelector("#circle")
loader.addEventListener("click",function(){
  playeffect();
    sound.play();
    gsap.to(circle,{
        transform:"translate(-50%,-50%) scale(2)"
    })
    gsap.to(circle,{
        transform:"translate(-50%,-50%) scale(0.8)",
        delay:0.3
    })
    gsap.to(loader,{
        opacity:0,
        duration:1,
        delay:0.3
    })
    gsap.to(loader,{
        display:"none",
        delay:0.8
    })
})


var i = 0;
if(i === 0){
  i = 1
  var round = document.querySelector("#loader>svg circle");
  var width = 905;
  var interval = setInterval(function(){
    if(width === 820){
      clearInterval(interval);
      i = 0;
      document.querySelector("#loader h2").style.opacity = 1
    }
    else{
      width--;
      round.style.strokeDashoffset = width + "px";
    }
  },50)
}
  

}
function playeffect(){
  var mutetl = gsap.timeline()
  mutetl.to("#sound .s1",{
    height:"1.2vw",
    yoyo:true,
    repeat:-1,
    duration:0.8,
    ease:Expo.ease

  },'mute')
  mutetl.to("#sound .s2",{
    height:"0.6vw",
    yoyo:true,
    repeat:-1,
    duration:0.6,
    ease:Expo.ease

  })
  mutetl.to("#sound .s3",{
    height:"1.2vw",
    yoyo:true,
    repeat:-1,
    duration:0.6,
    ease:Expo.ease

  },'mute')


}
function canvas(){
    const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  https://www.twinbru.com/img/frames/ring/654/webp/000.webp
  https://www.twinbru.com/img/frames/ring/654/webp/001.webp
  https://www.twinbru.com/img/frames/ring/654/webp/002.webp
  https://www.twinbru.com/img/frames/ring/654/webp/003.webp
  https://www.twinbru.com/img/frames/ring/654/webp/004.webp
  https://www.twinbru.com/img/frames/ring/654/webp/005.webp
  https://www.twinbru.com/img/frames/ring/654/webp/006.webp
  https://www.twinbru.com/img/frames/ring/654/webp/007.webp
  https://www.twinbru.com/img/frames/ring/654/webp/008.webp
  https://www.twinbru.com/img/frames/ring/654/webp/009.webp
  https://www.twinbru.com/img/frames/ring/654/webp/010.webp
  https://www.twinbru.com/img/frames/ring/654/webp/011.webp
  https://www.twinbru.com/img/frames/ring/654/webp/012.webp
  https://www.twinbru.com/img/frames/ring/654/webp/013.webp
  https://www.twinbru.com/img/frames/ring/654/webp/014.webp
  https://www.twinbru.com/img/frames/ring/654/webp/015.webp
  https://www.twinbru.com/img/frames/ring/654/webp/016.webp
  https://www.twinbru.com/img/frames/ring/654/webp/017.webp
  https://www.twinbru.com/img/frames/ring/654/webp/018.webp
  https://www.twinbru.com/img/frames/ring/654/webp/019.webp
  https://www.twinbru.com/img/frames/ring/654/webp/020.webp
  https://www.twinbru.com/img/frames/ring/654/webp/021.webp
  https://www.twinbru.com/img/frames/ring/654/webp/022.webp
  https://www.twinbru.com/img/frames/ring/654/webp/023.webp
  https://www.twinbru.com/img/frames/ring/654/webp/024.webp
  https://www.twinbru.com/img/frames/ring/654/webp/025.webp
  https://www.twinbru.com/img/frames/ring/654/webp/026.webp
  https://www.twinbru.com/img/frames/ring/654/webp/027.webp
  https://www.twinbru.com/img/frames/ring/654/webp/028.webp
  https://www.twinbru.com/img/frames/ring/654/webp/029.webp
  https://www.twinbru.com/img/frames/ring/654/webp/030.webp
  https://www.twinbru.com/img/frames/ring/654/webp/031.webp
  https://www.twinbru.com/img/frames/ring/654/webp/032.webp
  https://www.twinbru.com/img/frames/ring/654/webp/033.webp
  https://www.twinbru.com/img/frames/ring/654/webp/034.webp
  https://www.twinbru.com/img/frames/ring/654/webp/035.webp
  https://www.twinbru.com/img/frames/ring/654/webp/036.webp
  https://www.twinbru.com/img/frames/ring/654/webp/037.webp
  https://www.twinbru.com/img/frames/ring/654/webp/038.webp
  https://www.twinbru.com/img/frames/ring/654/webp/039.webp
  https://www.twinbru.com/img/frames/ring/654/webp/040.webp
  https://www.twinbru.com/img/frames/ring/654/webp/041.webp
  https://www.twinbru.com/img/frames/ring/654/webp/042.webp
  https://www.twinbru.com/img/frames/ring/654/webp/043.webp
  https://www.twinbru.com/img/frames/ring/654/webp/044.webp
  https://www.twinbru.com/img/frames/ring/654/webp/045.webp
  https://www.twinbru.com/img/frames/ring/654/webp/046.webp
  https://www.twinbru.com/img/frames/ring/654/webp/047.webp
  https://www.twinbru.com/img/frames/ring/654/webp/048.webp
  https://www.twinbru.com/img/frames/ring/654/webp/049.webp
  https://www.twinbru.com/img/frames/ring/654/webp/050.webp
  https://www.twinbru.com/img/frames/ring/654/webp/051.webp
  https://www.twinbru.com/img/frames/ring/654/webp/052.webp
  https://www.twinbru.com/img/frames/ring/654/webp/053.webp
  https://www.twinbru.com/img/frames/ring/654/webp/054.webp
  https://www.twinbru.com/img/frames/ring/654/webp/055.webp
  https://www.twinbru.com/img/frames/ring/654/webp/056.webp
  https://www.twinbru.com/img/frames/ring/654/webp/057.webp
  https://www.twinbru.com/img/frames/ring/654/webp/058.webp
  https://www.twinbru.com/img/frames/ring/654/webp/059.webp
  https://www.twinbru.com/img/frames/ring/654/webp/060.webp
  https://www.twinbru.com/img/frames/ring/654/webp/061.webp
  https://www.twinbru.com/img/frames/ring/654/webp/062.webp
  https://www.twinbru.com/img/frames/ring/654/webp/063.webp
  https://www.twinbru.com/img/frames/ring/654/webp/064.webp
  https://www.twinbru.com/img/frames/ring/654/webp/065.webp
  https://www.twinbru.com/img/frames/ring/654/webp/066.webp
  https://www.twinbru.com/img/frames/ring/654/webp/067.webp
  https://www.twinbru.com/img/frames/ring/654/webp/068.webp
  https://www.twinbru.com/img/frames/ring/654/webp/069.webp
  https://www.twinbru.com/img/frames/ring/654/webp/070.webp
  https://www.twinbru.com/img/frames/ring/654/webp/071.webp
  https://www.twinbru.com/img/frames/ring/654/webp/072.webp
  https://www.twinbru.com/img/frames/ring/654/webp/073.webp
  https://www.twinbru.com/img/frames/ring/654/webp/074.webp
  https://www.twinbru.com/img/frames/ring/654/webp/075.webp
  https://www.twinbru.com/img/frames/ring/654/webp/076.webp
  https://www.twinbru.com/img/frames/ring/654/webp/077.webp
  https://www.twinbru.com/img/frames/ring/654/webp/078.webp
  https://www.twinbru.com/img/frames/ring/654/webp/079.webp
  https://www.twinbru.com/img/frames/ring/654/webp/080.webp
  https://www.twinbru.com/img/frames/ring/654/webp/081.webp
  https://www.twinbru.com/img/frames/ring/654/webp/082.webp
  https://www.twinbru.com/img/frames/ring/654/webp/083.webp
  https://www.twinbru.com/img/frames/ring/654/webp/084.webp
  https://www.twinbru.com/img/frames/ring/654/webp/085.webp
  https://www.twinbru.com/img/frames/ring/654/webp/086.webp
  https://www.twinbru.com/img/frames/ring/654/webp/087.webp
  https://www.twinbru.com/img/frames/ring/654/webp/088.webp
  https://www.twinbru.com/img/frames/ring/654/webp/089.webp
  https://www.twinbru.com/img/frames/ring/654/webp/090.webp
  https://www.twinbru.com/img/frames/ring/654/webp/091.webp
  https://www.twinbru.com/img/frames/ring/654/webp/092.webp
  https://www.twinbru.com/img/frames/ring/654/webp/093.webp
  https://www.twinbru.com/img/frames/ring/654/webp/094.webp
  https://www.twinbru.com/img/frames/ring/654/webp/095.webp
  https://www.twinbru.com/img/frames/ring/654/webp/096.webp
  https://www.twinbru.com/img/frames/ring/654/webp/097.webp
  https://www.twinbru.com/img/frames/ring/654/webp/098.webp
  https://www.twinbru.com/img/frames/ring/654/webp/099.webp
  https://www.twinbru.com/img/frames/ring/654/webp/100.webp
  https://www.twinbru.com/img/frames/ring/654/webp/101.webp
  https://www.twinbru.com/img/frames/ring/654/webp/102.webp
  https://www.twinbru.com/img/frames/ring/654/webp/103.webp
  https://www.twinbru.com/img/frames/ring/654/webp/104.webp
  https://www.twinbru.com/img/frames/ring/654/webp/105.webp
  https://www.twinbru.com/img/frames/ring/654/webp/106.webp
  https://www.twinbru.com/img/frames/ring/654/webp/107.webp
  https://www.twinbru.com/img/frames/ring/654/webp/108.webp
  https://www.twinbru.com/img/frames/ring/654/webp/109.webp
  https://www.twinbru.com/img/frames/ring/654/webp/110.webp
  https://www.twinbru.com/img/frames/ring/654/webp/111.webp
  https://www.twinbru.com/img/frames/ring/654/webp/112.webp
  https://www.twinbru.com/img/frames/ring/654/webp/113.webp
  https://www.twinbru.com/img/frames/ring/654/webp/114.webp
  https://www.twinbru.com/img/frames/ring/654/webp/115.webp
  https://www.twinbru.com/img/frames/ring/654/webp/116.webp
  https://www.twinbru.com/img/frames/ring/654/webp/117.webp
  https://www.twinbru.com/img/frames/ring/654/webp/118.webp
  https://www.twinbru.com/img/frames/ring/654/webp/119.webp
  https://www.twinbru.com/img/frames/ring/654/webp/120.webp
  https://www.twinbru.com/img/frames/ring/654/webp/121.webp
  https://www.twinbru.com/img/frames/ring/654/webp/122.webp
  https://www.twinbru.com/img/frames/ring/654/webp/123.webp
  https://www.twinbru.com/img/frames/ring/654/webp/124.webp
  https://www.twinbru.com/img/frames/ring/654/webp/125.webp
  https://www.twinbru.com/img/frames/ring/654/webp/126.webp
  https://www.twinbru.com/img/frames/ring/654/webp/127.webp
  https://www.twinbru.com/img/frames/ring/654/webp/128.webp
  https://www.twinbru.com/img/frames/ring/654/webp/129.webp
  https://www.twinbru.com/img/frames/ring/654/webp/130.webp
  https://www.twinbru.com/img/frames/ring/654/webp/131.webp
  https://www.twinbru.com/img/frames/ring/654/webp/132.webp
  https://www.twinbru.com/img/frames/ring/654/webp/133.webp
  https://www.twinbru.com/img/frames/ring/654/webp/134.webp
  https://www.twinbru.com/img/frames/ring/654/webp/135.webp
  https://www.twinbru.com/img/frames/ring/654/webp/136.webp
  https://www.twinbru.com/img/frames/ring/654/webp/137.webp
  https://www.twinbru.com/img/frames/ring/654/webp/138.webp
  https://www.twinbru.com/img/frames/ring/654/webp/139.webp
  https://www.twinbru.com/img/frames/ring/654/webp/140.webp
  https://www.twinbru.com/img/frames/ring/654/webp/141.webp
  https://www.twinbru.com/img/frames/ring/654/webp/142.webp
  https://www.twinbru.com/img/frames/ring/654/webp/143.webp
  https://www.twinbru.com/img/frames/ring/654/webp/144.webp
  https://www.twinbru.com/img/frames/ring/654/webp/145.webp
  https://www.twinbru.com/img/frames/ring/654/webp/146.webp
  https://www.twinbru.com/img/frames/ring/654/webp/147.webp
  https://www.twinbru.com/img/frames/ring/654/webp/148.webp
  https://www.twinbru.com/img/frames/ring/654/webp/149.webp
  https://www.twinbru.com/img/frames/ring/654/webp/150.webp
  https://www.twinbru.com/img/frames/ring/654/webp/151.webp
  https://www.twinbru.com/img/frames/ring/654/webp/152.webp
  https://www.twinbru.com/img/frames/ring/654/webp/153.webp
  https://www.twinbru.com/img/frames/ring/654/webp/154.webp
  https://www.twinbru.com/img/frames/ring/654/webp/155.webp
  https://www.twinbru.com/img/frames/ring/654/webp/156.webp
  https://www.twinbru.com/img/frames/ring/654/webp/157.webp
  https://www.twinbru.com/img/frames/ring/654/webp/158.webp
  https://www.twinbru.com/img/frames/ring/654/webp/159.webp
  https://www.twinbru.com/img/frames/ring/654/webp/160.webp
  https://www.twinbru.com/img/frames/ring/654/webp/161.webp
  https://www.twinbru.com/img/frames/ring/654/webp/162.webp
  https://www.twinbru.com/img/frames/ring/654/webp/163.webp
  https://www.twinbru.com/img/frames/ring/654/webp/164.webp
  https://www.twinbru.com/img/frames/ring/654/webp/165.webp
  https://www.twinbru.com/img/frames/ring/654/webp/166.webp
  https://www.twinbru.com/img/frames/ring/654/webp/167.webp
  https://www.twinbru.com/img/frames/ring/654/webp/168.webp
  https://www.twinbru.com/img/frames/ring/654/webp/169.webp
  https://www.twinbru.com/img/frames/ring/654/webp/170.webp
  https://www.twinbru.com/img/frames/ring/654/webp/171.webp
  https://www.twinbru.com/img/frames/ring/654/webp/172.webp
  https://www.twinbru.com/img/frames/ring/654/webp/173.webp
  https://www.twinbru.com/img/frames/ring/654/webp/174.webp
  https://www.twinbru.com/img/frames/ring/654/webp/175.webp
  https://www.twinbru.com/img/frames/ring/654/webp/176.webp
  https://www.twinbru.com/img/frames/ring/654/webp/177.webp
  https://www.twinbru.com/img/frames/ring/654/webp/178.webp
  https://www.twinbru.com/img/frames/ring/654/webp/179.webp
  https://www.twinbru.com/img/frames/ring/654/webp/180.webp
  https://www.twinbru.com/img/frames/ring/654/webp/181.webp
  https://www.twinbru.com/img/frames/ring/654/webp/182.webp
  https://www.twinbru.com/img/frames/ring/654/webp/183.webp
  https://www.twinbru.com/img/frames/ring/654/webp/184.webp
  https://www.twinbru.com/img/frames/ring/654/webp/185.webp
  https://www.twinbru.com/img/frames/ring/654/webp/186.webp
  https://www.twinbru.com/img/frames/ring/654/webp/187.webp
  https://www.twinbru.com/img/frames/ring/654/webp/188.webp
  https://www.twinbru.com/img/frames/ring/654/webp/189.webp
  https://www.twinbru.com/img/frames/ring/654/webp/190.webp
  https://www.twinbru.com/img/frames/ring/654/webp/191.webp
  https://www.twinbru.com/img/frames/ring/654/webp/192.webp
  https://www.twinbru.com/img/frames/ring/654/webp/193.webp
  https://www.twinbru.com/img/frames/ring/654/webp/194.webp
  https://www.twinbru.com/img/frames/ring/654/webp/195.webp
  https://www.twinbru.com/img/frames/ring/654/webp/196.webp
  https://www.twinbru.com/img/frames/ring/654/webp/197.webp
  https://www.twinbru.com/img/frames/ring/654/webp/198.webp
  https://www.twinbru.com/img/frames/ring/654/webp/199.webp
  https://www.twinbru.com/img/frames/ring/654/webp/200.webp
  https://www.twinbru.com/img/frames/ring/654/webp/201.webp
  https://www.twinbru.com/img/frames/ring/654/webp/202.webp
  https://www.twinbru.com/img/frames/ring/654/webp/203.webp
  https://www.twinbru.com/img/frames/ring/654/webp/204.webp
  https://www.twinbru.com/img/frames/ring/654/webp/205.webp
  https://www.twinbru.com/img/frames/ring/654/webp/206.webp
  https://www.twinbru.com/img/frames/ring/654/webp/207.webp
  https://www.twinbru.com/img/frames/ring/654/webp/208.webp
  https://www.twinbru.com/img/frames/ring/654/webp/209.webp
  https://www.twinbru.com/img/frames/ring/654/webp/210.webp
  https://www.twinbru.com/img/frames/ring/654/webp/211.webp
  https://www.twinbru.com/img/frames/ring/654/webp/212.webp
  https://www.twinbru.com/img/frames/ring/654/webp/213.webp
  https://www.twinbru.com/img/frames/ring/654/webp/214.webp
  https://www.twinbru.com/img/frames/ring/654/webp/215.webp
  https://www.twinbru.com/img/frames/ring/654/webp/216.webp
  https://www.twinbru.com/img/frames/ring/654/webp/217.webp
  https://www.twinbru.com/img/frames/ring/654/webp/218.webp
  https://www.twinbru.com/img/frames/ring/654/webp/219.webp
  https://www.twinbru.com/img/frames/ring/654/webp/220.webp
  https://www.twinbru.com/img/frames/ring/654/webp/221.webp
  https://www.twinbru.com/img/frames/ring/654/webp/222.webp
  https://www.twinbru.com/img/frames/ring/654/webp/223.webp
  https://www.twinbru.com/img/frames/ring/654/webp/224.webp
  https://www.twinbru.com/img/frames/ring/654/webp/225.webp
  https://www.twinbru.com/img/frames/ring/654/webp/226.webp
  https://www.twinbru.com/img/frames/ring/654/webp/227.webp
  https://www.twinbru.com/img/frames/ring/654/webp/228.webp
  https://www.twinbru.com/img/frames/ring/654/webp/229.webp
  https://www.twinbru.com/img/frames/ring/654/webp/230.webp
  https://www.twinbru.com/img/frames/ring/654/webp/231.webp
  https://www.twinbru.com/img/frames/ring/654/webp/232.webp
  https://www.twinbru.com/img/frames/ring/654/webp/233.webp
  https://www.twinbru.com/img/frames/ring/654/webp/234.webp
  https://www.twinbru.com/img/frames/ring/654/webp/235.webp
  https://www.twinbru.com/img/frames/ring/654/webp/236.webp
  https://www.twinbru.com/img/frames/ring/654/webp/237.webp
  https://www.twinbru.com/img/frames/ring/654/webp/238.webp
  https://www.twinbru.com/img/frames/ring/654/webp/239.webp
  https://www.twinbru.com/img/frames/ring/654/webp/240.webp
  https://www.twinbru.com/img/frames/ring/654/webp/241.webp
  https://www.twinbru.com/img/frames/ring/654/webp/242.webp
  https://www.twinbru.com/img/frames/ring/654/webp/243.webp
  https://www.twinbru.com/img/frames/ring/654/webp/244.webp
  https://www.twinbru.com/img/frames/ring/654/webp/245.webp
  https://www.twinbru.com/img/frames/ring/654/webp/246.webp
  https://www.twinbru.com/img/frames/ring/654/webp/247.webp
  https://www.twinbru.com/img/frames/ring/654/webp/248.webp
  https://www.twinbru.com/img/frames/ring/654/webp/249.webp
  https://www.twinbru.com/img/frames/ring/654/webp/250.webp
 `;
  return data.split("\n")[index];
}

const frameCount = 250;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  duration:10,
  yoyo:true,
  repeat:-1,
//   scrollTrigger: {
//     scrub: 0.15,
//     trigger: `#page>canvas`,
//     //   set start end according to preference
//     start: `top top`,
//     end: `600% top`,
//     scroller: `#main`,
//   },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.min(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
// ScrollTrigger.create({

//   trigger: "// object you want to pin it.",
//   pin: true,
//   // markers:true,
//   scroller: `#main`,
// //   set start end according to preference
//   start: `top top`,
//   end: `600% top`,
// });
}
function hero2effect(){
  gsap.from("#hero2 h1",{
    y:55,
    duration:0.8,
    scrollTrigger:{
      trigger:"#page2",
      scroller:"#main",
      // markers:true,
      start:"15% 50%",
      end:"15% 50%",
      scrub:1
    }
})
gsap.from("#hero2 h3",{
  y:55,
  duration:0.8,
  scrollTrigger:{
    trigger:"#page2",
    scroller:"#main",
    // markers:true,
    start:"15% 50%",
    end:"15% 50%",
    scrub:1
  }
})
gsap.from("#hero2 .a a",{
  y:55,
  duration:0.8,
  scrollTrigger:{
    trigger:"#page2",
    scroller:"#main",
    // markers:true,
    start:"15% 50%",
    end:"15% 50%",
    scrub:1
  }
})
}
function logoup(){
  gsap.from("#logodiv img",{
    scrollTrigger:{
      trigger:"#page2",
      scroller:"#main",
      // markers:true,
      start:"60% 50%",
      end:"60% 50%",
      scrub:1
    },
    y:100,
    opacity:0,
    stagger:1,
    duration:5
  })
}
function canvas2(){
  const canvas = document.querySelector("#page3 canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/000.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/001.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/002.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/003.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/004.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/005.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/006.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/007.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/008.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/009.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/010.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/011.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/012.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/013.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/014.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/015.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/016.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/017.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/018.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/019.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/020.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/021.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/022.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/023.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/024.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/025.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/026.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/027.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/028.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/029.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/030.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/031.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/032.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/033.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/034.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/035.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/036.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/037.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/038.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/039.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/040.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/041.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/042.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/043.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/044.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/045.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/046.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/047.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/048.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/049.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/050.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/051.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/052.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/053.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/054.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/055.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/056.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/057.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/058.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/059.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/060.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/061.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/062.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/063.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/064.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/065.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/066.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/067.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/068.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/069.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/070.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/071.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/072.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/073.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/074.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/075.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/076.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/077.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/078.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/079.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/080.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/081.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/082.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/083.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/084.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/085.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/086.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/087.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/088.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/089.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/090.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/091.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/092.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/093.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/094.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/095.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/096.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/097.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/098.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/099.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/100.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/101.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/102.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/103.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/104.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/105.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/106.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/107.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/108.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/109.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/110.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/111.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/112.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/113.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/114.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/115.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/116.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/117.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/118.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/119.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/120.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/121.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/122.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/123.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/124.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/125.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/126.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/127.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/128.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/129.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/130.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/131.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/132.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/133.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/134.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/135.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/136.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/137.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/138.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/139.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/140.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/141.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/142.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/143.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/144.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/145.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/146.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/147.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/148.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/149.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/150.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/151.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/152.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/153.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/154.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/155.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/156.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/157.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/158.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/159.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/160.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/161.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/162.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/163.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/164.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/165.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/166.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/167.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/168.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/169.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/170.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/171.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/172.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/173.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/174.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/175.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/176.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/177.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/178.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/179.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/180.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/181.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/182.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/183.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/184.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/185.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/186.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/187.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/188.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/189.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/190.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/191.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/192.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/193.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/194.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/195.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/196.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/197.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/198.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/199.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/200.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/201.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/202.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/203.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/204.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/205.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/206.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/207.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/208.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/209.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/210.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/211.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/212.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/213.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/214.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/215.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/216.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/217.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/218.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/219.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/220.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/221.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/222.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/223.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/224.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/225.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/226.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/227.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/228.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/229.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/230.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/231.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/232.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/233.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/234.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/235.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/236.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/237.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/238.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/239.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/240.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/241.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/242.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/243.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/244.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/245.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/246.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/247.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/248.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/249.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/250.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/251.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/252.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/253.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/254.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/255.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/256.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/257.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/258.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/259.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/260.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/261.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/262.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/263.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/264.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/265.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/266.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/267.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/268.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/269.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/270.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/271.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/272.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/273.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/274.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/275.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/276.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/277.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/278.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/279.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/280.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/281.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/282.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/283.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/284.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/285.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/286.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/287.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/288.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/289.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/290.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/291.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/292.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/293.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/294.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/295.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/296.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/297.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/298.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/299.webp
https://www.twinbru.com/img/frames/ribbon/full/1920/webp/300.webp
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page3>canvas`,
    //   set start end according to preference
    start: `top 150%`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.min(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page3",
  pin: true,
  // markers:true,
  scroller: `#main`,
//   set start end according to preference
  start: `top top`,
  end: `600% top`,
});

}
function hero4effect(){
  gsap.from("#hero4 h1",{
    y:55,
    duration:0.8,
    scrollTrigger:{
      trigger:"#page4",
      scroller:"#main",
      // markers:true,
      start:"15% 50%",
      end:"15% 50%",
      scrub:1
    }
  })
  gsap.from("#hero4 h3",{
  y:55,
  duration:0.8,
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
    // markers:true,
    start:"15% 50%",
    end:"15% 50%",
    scrub:1
  }
  })
  gsap.from("#hero4 .t a",{
  y:55,
  duration:0.8,
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
    // markers:true,
    start:"15% 50%",
    end:"15% 50%",
    scrub:1
  }
  })
}
function page4circleeffect(){
  gsap.to("#circ",{
    transform:"scale(1.05)",
    duration:3,
    yoyo:true,
    repeat:-1
  })
  gsap.to("#circ #innercirc",{
    transform:"scale(1.1)",
    duration:3,
    yoyo:true,
    repeat:-1
  })
}
function page5effect(){
  gsap.from("#page5 .y h3",{
    scrollTrigger:{
      trigger:"#page5",
      scroller:"#main",
      scrub:1,
      start:"15% 50%",
      end:"15% 50%",
    },
    y:55,
    duration:0.8,

  })
  gsap.from("#page5 .z h1",{
    scrollTrigger:{
      trigger:"#page5",
      scroller:"#main",
      scrub:1,
      start:"15% 50%",
      end:"15% 50%",
    },
    y:65,
    duration:0.8,

  })
}
function canvas3(){
  const canvas = document.querySelector("#page6>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  https://www.twinbru.com/img/frames/arch/salmon/gradient-overlay-background/000.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/000.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/001.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/002.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/003.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/004.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/005.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/006.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/007.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/008.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/009.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/010.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/011.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/012.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/013.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/014.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/015.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/016.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/017.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/018.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/019.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/020.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/021.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/022.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/023.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/024.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/025.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/026.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/027.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/028.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/029.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/030.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/031.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/032.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/033.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/034.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/035.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/036.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/037.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/038.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/039.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/040.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/041.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/042.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/043.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/044.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/045.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/046.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/047.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/048.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/049.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/050.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/051.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/052.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/053.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/054.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/055.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/056.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/057.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/058.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/059.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/060.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/061.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/062.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/063.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/064.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/065.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/066.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/067.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/068.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/069.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/070.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/071.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/072.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/073.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/074.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/075.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/076.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/077.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/078.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/079.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/080.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/081.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/082.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/083.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/084.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/085.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/086.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/087.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/088.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/089.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/090.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/091.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/092.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/093.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/094.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/095.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/096.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/097.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/098.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/099.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/100.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/101.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/102.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/103.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/104.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/105.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/106.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/107.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/108.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/109.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/110.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/111.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/112.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/113.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/114.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/115.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/116.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/117.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/118.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/119.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/120.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/121.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/122.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/123.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/124.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/125.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/126.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/127.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/128.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/129.webp
  https://www.twinbru.com/img/frames/arch/salmon/1280/webp/130.webp
 `;
  return data.split("\n")[index];
}

const frameCount = 131;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page6>canvas`,
    //   set start end according to preference
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page6",
  pin: true,
  // markers:true,
  scroller: `#main`,
//   set start end according to preference
  start: `top top`,
  end: `600% top`,
});
}
function underlineeffect(){
  document.querySelectorAll("#links .el")
.forEach(function(elem){
  var line = elem.childNodes[3]
  var outerline = line.childNodes[1]
  elem.addEventListener("mouseenter",function(){
    gsap.to(outerline,{
      width:"100%",
      duration:0.7
    })
   
  })
  elem.addEventListener("mouseleave",function(){
    gsap.to(outerline,{
      width:"0%",
      duration:0.7
    })
  })
})
var imgdiv = document.querySelector("#imagediv")
var imgdivheight =  imgdiv.getBoundingClientRect().height
var slider =  document.querySelector("#imageslide")

document.querySelectorAll("#links .el")
.forEach(function(elem,index){
  elem.addEventListener("mouseenter",function(){
    if(index === 0){
      gsap.to(slider,{
        y:0,
        duration:1,

      })
    }
    if(index === 1){
      gsap.to(slider,{
        y:-imgdivheight,
        duration:1,

      })
    }
    if(index === 2){
      gsap.to(slider,{
        y:2*(-imgdivheight),
        duration:1,

      })
    }
    if(index === 3){
      gsap.to(slider,{
        y:3*(-imgdivheight),
        duration:1,

      })
    }
    if(index === 4){
      gsap.to(slider,{
        y:4*(-imgdivheight),
        duration:1,

      })
    }
  })
})
}
var crsr = document.querySelector("#cursor")
function mousefollower(){
  
  document.addEventListener("mousemove",function(dets){
    gsap.to(crsr,{
      top:dets.y,
      left:dets.x,
      ease:Expo.ease
    })
    gsap.to(crsr,{
      scrollTrigger:{
        trigger:"#page6",
        scroller:"#main",
        start:"99% 99%",
        end:"bottom bottom",
        scrub:1
      },
      backgroundColor:"rgba(0, 0, 0, 0.38)"
    })
  })
}
function hoveronlinks(){
  var links = document.querySelectorAll("#main a")
  links.forEach(function(link){
    link.addEventListener("mouseenter",function(){
      gsap.to(crsr,{
        // transform:`scale(1.5)`,
        height:"4vw",
        width:"4vw",
        ease:Expo.ease,
        duration:0.5
      })
    })
    link.addEventListener("mouseleave",function(){
      gsap.to(crsr,{
        height:"1.6vw",
        width:"1.6vw",
        ease:Expo.ease,
        duration:0.5
      })
    })
  })
}
function imagemove(){
  var threeDimage = document.querySelector("#page4>img")
  document.querySelector("#main").addEventListener("mousemove",function(dets){
    gsap.to(threeDimage,{
      x:1-(dets.x-500)*0.05,
      y:1-(dets.y+1000)*0.05,
      ease:Expo.ease
    })
  })
}


loco();
loader();
canvas();
hero2effect();
logoup();
canvas2();
hero4effect();
page4circleeffect();
canvas3();
page5effect();
underlineeffect();
mousefollower();
hoveronlinks();
imagemove();
playeffect();
