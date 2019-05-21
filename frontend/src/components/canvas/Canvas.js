import React from 'react';

class Canvas extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            default: false,
        }
    }
    componentDidMount() {
        this.updateCanvas();
    }




    updateCanvas() {
        var c = document.getElementById("myCanvas");
        var $ = c.getContext("2d");

        var WindowW = document.body.clientWidth;
        var WindowH = window.innerHeight;

        console.log(WindowW + ' ' + WindowH);

        c.width = WindowW;
        c.height = WindowH;


        var parts = [],
            color = 0;


        function createParts(){
            var x = Math.floor(Math.random()*WindowW) + 1;
            var y = 0;
            var s = Math.floor(Math.random()*5) + 1;
            parts.push({"x":x,"y":y,"s":s});
        }



        function draw(){

            createParts();

            for (var i = 0; i < parts.length; i++) {
                var p = parts[i];
                $.globalCompositeOperation = "lighter";
                color += .01;
                $.fillStyle="hsla("+color+",64%, 50%,0.9)";
                $.beginPath();
                $.arc(p.x, p.y+=p.s/4,p.s*.6,0,Math.PI*2,true);
                $.fill();
                if(p.y>WindowH){
                    parts.splice(i,1);
                }
                if(color >= 360){
                    color = 0;
                }
            }
        }
        var mousemove = function (e) {
            var Mx = e.clientX;
            var  My = e.clientY;
            for (var i = 0; i < parts.length; i++) {
                var p = parts[i];
                for(var pos = 0; pos < 10; pos++){
                    if(Mx <= p.x-pos ){
                        p.x -= .7;
                    }
                    if(Mx >= p.x+pos ){
                        p.x += .7;
                    }
                    if(My <= p.y-pos ){
                        p.y -= .7;
                    }
                    if(My >= p.y+pos ){
                        p.y += .7;
                    }
                }
                p.s += .1;


            }
        };
        document.addEventListener("mousemove",mousemove);
        function animate () {
            $.clearRect(0,0,WindowW,WindowH);
            draw()
        }
        setInterval(animate,20);

    }

    render() {


        return (
            <canvas id="myCanvas" className="canvas" ref="canvas" width={300} height={300}/>
        )
    }
}


export default Canvas;