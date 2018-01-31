//canvas resize na to valw se mia function init

    var canvas=document.querySelector('canvas');
//console.log(canvas)
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var c= canvas.getContext('2d');




//obj
function Circle(x,y,radius){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.draw = function(){
        c.beginPath()
        c.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
        c.stroke()
        c.closePath()
    }
}
function Lines(x,y,z,w){
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
    this.update=function(){
        this.z=Math.floor(Math.random()*790)
        this.w=Math.floor(Math.random()*790)
        this.draw()
    }
    this.draw =function(){
        c.beginPath()
        c.moveTo(this.x,this.y) //start point to line
        c.lineTo(this.z,this.w) //end point  line
        c.stroke()
        c.closePath()
    }

}

//edw ti 8elw na kanw 8elw na ftiaksw ena loop k na kalw thn draw gia na m
//emfanisei tis grammes

function MoreLines(x,y,z,w){
 var lines=[]

    for(var i=0; i<50; i ++){
        lines.push(new Lines(x,y,z,w))
         console.log(lines[i])
    }
    lines.forEach(function (lines) {
        lines.update()
        console.log()
    })

}

//8eloume mia function opou 8a dinei kinhsh ston kuklo k 8a kaloume to moreLines
//logika 8a prepei na mas gemisei ton kuklo me grammes


var circle=new Circle(500,500,250)
circle.draw()
MoreLines(500,500)

