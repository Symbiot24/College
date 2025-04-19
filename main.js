gsap.from(".course-col",{
    opacity : 0,
    scale : 0,
    scrollTrigger : {
        trigger : ".course-col",
        scroller : "body",
        // markers : true,  // Use to show start and end point 
        start : "top 70%", // use to adjust start point   
        end : "top 30%",
    }
})
gsap.from(".text-box" , {
    scale : 0,
    duration : 2,
    opacity : 0
})