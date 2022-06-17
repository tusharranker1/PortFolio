document.getElementById("btn1").addEventListener("click",function()
{
    document.getElementById("navigation").style.opacity="1";
    document.getElementById("navigation").classList.add("nav-animation")
    document.getElementById("btn1").classList.add("my-self-btn-animate")
    document.getElementById("myName").classList.add("myNameClass");
    document.getElementById("myDesignation").classList.add("myDesignationClass");
    document.getElementById("ll0").style.backgroundColor="black"
    document.getElementById("ll0").style.color="white"
    document.getElementById("ll0").addEventListener("click",function(){
        document.getElementById("navigation").style.boxShadow = "0px 0px 30px 10px black"
        document.getElementById("home").style.zIndex="1";
        document.getElementById("skills").style.zIndex="0";
        document.getElementById("projects").style.zIndex="0";
        document.getElementById("contact-me").style.zIndex="0";
        document.getElementById("ll0").style.backgroundColor="black"
        document.getElementById("ll1").style.backgroundColor="white"
        document.getElementById("ll2").style.backgroundColor="white"
        document.getElementById("ll3").style.backgroundColor="white"
        document.getElementById("ll0").style.color="white"
        
    })
    document.getElementById("ll1").addEventListener("click",function(){
        document.getElementById("navigation").style.boxShadow = "0px 0px 30px 10px #FFD300"
        document.getElementById("home").style.zIndex="0";
        document.getElementById("skills").style.zIndex="1";
        document.getElementById("projects").style.zIndex="0";
        document.getElementById("contact-me").style.zIndex="0";
        document.getElementById("ll0").style.backgroundColor="white"
        document.getElementById("ll1").style.backgroundColor="#FFD300"
        document.getElementById("ll2").style.backgroundColor="white"
        document.getElementById("ll3").style.backgroundColor="white"
        document.getElementById("ll0").style.color="black"
    })
    document.getElementById("ll2").addEventListener("click",function(){
        projectsAnimation1();
        projectsAnimation2();
        document.getElementById("navigation").style.boxShadow = "0px 0px 32px 10px #FF2281"
        document.getElementById("home").style.zIndex="0";
        document.getElementById("skills").style.zIndex="0";
        document.getElementById("projects").style.zIndex="1";
        document.getElementById("contact-me").style.zIndex="0";
        document.getElementById("ll0").style.backgroundColor="white"
        document.getElementById("ll1").style.backgroundColor="white"
        document.getElementById("ll2").style.backgroundColor="#FF2281"
        document.getElementById("ll3").style.backgroundColor="white"
        document.getElementById("ll0").style.color="black"
    })
    document.getElementById("ll3").addEventListener("click",function(){
        document.getElementById("navigation").style.boxShadow = "0px 0px 40px 10px #FF9472"
        document.getElementById("home").style.zIndex="0";
        document.getElementById("skills").style.zIndex="0";
        document.getElementById("projects").style.zIndex="0";
        document.getElementById("contact-me").style.zIndex="1";
        document.getElementById("ll0").style.backgroundColor="white"
        document.getElementById("ll1").style.backgroundColor="white"
        document.getElementById("ll2").style.backgroundColor="white"
        document.getElementById("ll3").style.backgroundColor="#FF9472"
        document.getElementById("ll0").style.color="black"
    })
})

// ====================================================================
document.getElementsByClassName("skills-class")[0].addEventListener("mouseover",function(){
    document.getElementById("lc").style.boxShadow="0px 0px 4px 1px white,0px 0px 10px 2px rgb(255, 102, 0)"
})
document.getElementsByClassName("skills-class")[1].addEventListener("mouseover",function(){
    document.getElementById("lc").style.boxShadow="0px 0px 4px 1px white,0px 0px 10px 2px rgb(0, 122, 210)"
})
document.getElementsByClassName("skills-class")[2].addEventListener("mouseover",function(){
    document.getElementById("lc").style.boxShadow="0px 0px 4px 1px white,0px 0px 10px 2px yellow"
})
document.getElementsByClassName("skills-class")[0].addEventListener("mouseout",function(){
    document.getElementById("lc").style.boxShadow="0px 0px 0px 0px black"
})
document.getElementsByClassName("skills-class")[1].addEventListener("mouseout",function(){
    document.getElementById("lc").style.boxShadow="0px 0px 0px 0px black"
})
document.getElementsByClassName("skills-class")[2].addEventListener("mouseout",function(){
    document.getElementById("lc").style.boxShadow="0px 0px 0px 0px black"
})
// =====================================================================================
document.getElementById("la1").addEventListener("mouseover",function(){
    // document.getElementById("w1").style.animationDuration="2s"
    document.getElementsByClassName("slides")[0].classList.add("slide-shadow")
    document.getElementsByClassName("slides")[1].classList.add("slide-shadow")
    document.getElementsByClassName("slides")[2].classList.add("slide-shadow")
    document.getElementsByClassName("slides")[3].classList.add("slide-shadow")
    document.getElementsByClassName("slides")[4].classList.add("slide-shadow")
    document.getElementsByClassName("slides")[5].classList.add("slide-shadow")
})
document.getElementById("la1").addEventListener("mouseout",function(){
    // document.getElementById("w1").style.animationDuration="5s"
    document.getElementsByClassName("slides")[0].classList.remove("slide-shadow")
    document.getElementsByClassName("slides")[1].classList.remove("slide-shadow")
    document.getElementsByClassName("slides")[2].classList.remove("slide-shadow")
    document.getElementsByClassName("slides")[3].classList.remove("slide-shadow")
    document.getElementsByClassName("slides")[4].classList.remove("slide-shadow")
    document.getElementsByClassName("slides")[5].classList.remove("slide-shadow")
})
document.getElementById("la2").addEventListener("mouseover",function(){
    document.getElementsByClassName("slides3")[0].classList.add("slide-shadow3")
    document.getElementsByClassName("slides3")[1].classList.add("slide-shadow3")
    document.getElementsByClassName("slides3")[2].classList.add("slide-shadow3")
    document.getElementsByClassName("slides3")[3].classList.add("slide-shadow3")
    document.getElementsByClassName("slides3")[4].classList.add("slide-shadow3")
    document.getElementsByClassName("slides3")[5].classList.add("slide-shadow3")
})
document.getElementById("la2").addEventListener("mouseout",function(){
    document.getElementsByClassName("slides3")[0].classList.remove("slide-shadow3")
    document.getElementsByClassName("slides3")[1].classList.remove("slide-shadow3")
    document.getElementsByClassName("slides3")[2].classList.remove("slide-shadow3")
    document.getElementsByClassName("slides3")[3].classList.remove("slide-shadow3")
    document.getElementsByClassName("slides3")[4].classList.remove("slide-shadow3")
    document.getElementsByClassName("slides3")[5].classList.remove("slide-shadow3")
})
document.getElementById("la3").addEventListener("mouseover",function(){
    document.getElementsByClassName("slides2")[0].classList.add("slide-shadow2")
    document.getElementsByClassName("slides2")[1].classList.add("slide-shadow2")
    document.getElementsByClassName("slides2")[2].classList.add("slide-shadow2")
    document.getElementsByClassName("slides2")[3].classList.add("slide-shadow2")
    document.getElementsByClassName("slides2")[4].classList.add("slide-shadow2")
    document.getElementsByClassName("slides2")[5].classList.add("slide-shadow2")
})
document.getElementById("la3").addEventListener("mouseout",function(){
    document.getElementsByClassName("slides2")[0].classList.remove("slide-shadow2")
    document.getElementsByClassName("slides2")[1].classList.remove("slide-shadow2")
    document.getElementsByClassName("slides2")[2].classList.remove("slide-shadow2")
    document.getElementsByClassName("slides2")[3].classList.remove("slide-shadow2")
    document.getElementsByClassName("slides2")[4].classList.remove("slide-shadow2")
    document.getElementsByClassName("slides2")[5].classList.remove("slide-shadow2")
})
document.getElementById("la4").addEventListener("mouseover",function(){
    document.getElementsByClassName("slides4")[0].classList.add("slide-shadow4")
    document.getElementsByClassName("slides4")[1].classList.add("slide-shadow4")
    document.getElementsByClassName("slides4")[2].classList.add("slide-shadow4")
    document.getElementsByClassName("slides4")[3].classList.add("slide-shadow4")
    document.getElementsByClassName("slides4")[4].classList.add("slide-shadow4")
    document.getElementsByClassName("slides4")[5].classList.add("slide-shadow4")
})
document.getElementById("la4").addEventListener("mouseout",function(){
    document.getElementsByClassName("slides4")[0].classList.remove("slide-shadow4")
    document.getElementsByClassName("slides4")[1].classList.remove("slide-shadow4")
    document.getElementsByClassName("slides4")[2].classList.remove("slide-shadow4")
    document.getElementsByClassName("slides4")[3].classList.remove("slide-shadow4")
    document.getElementsByClassName("slides4")[4].classList.remove("slide-shadow4")
    document.getElementsByClassName("slides4")[5].classList.remove("slide-shadow4")
})

function projectsAnimation1()
{
    setTimeout(function()
    {
        var add="project/project1Img/img2.jpeg";
        document.getElementById("p1Img").style.background="url("+add+")"
    },6000)
    setTimeout(function()
    {
        var add="project/project1Img/img3.jpeg";
        document.getElementById("p1Img").style.background="url("+add+")"
    },12000)
    setTimeout(function()
    {
        var add="project/project1Img/img4.jpeg";
        document.getElementById("p1Img").style.background="url("+add+")"
    },18000)
    setTimeout(function()
    {
        var add="project/project1Img/img5.jpeg";
        document.getElementById("p1Img").style.background="url("+add+")"
    },24000)
    setTimeout(function()
    {
        var add="project/project1Img/img6.jpeg";
        document.getElementById("p1Img").style.background="url("+add+")"
    },30000)
}
function projectsAnimation2()
{
    setTimeout(function()
    {
        var add="project/project2Img/img1.jpeg";
        document.getElementById("p2Img").style.background="url("+add+")"
    },0)
    setTimeout(function()
    {
        var add="project/project2Img/img2.jpeg";
        document.getElementById("p2Img").style.background="url("+add+")"
    },6000)
}