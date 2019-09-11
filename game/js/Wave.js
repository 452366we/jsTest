class Wave{
    constructor(){
        this.x = [];
        this.y = [];
        this.r = [];
        this.alive =[];
    }
    init(){
        for(let i=0;i<10;i++){
            this.alive[i]=false;
            this.r[i]=0;
        }
    }
    draw(ctx1){
        ctx1.save();
        ctx1.lineWidth = 2;
        ctx1.shadowBlur = 10;
        ctx1.shadowColor = "red";

        for(let i=0;i<10;i++){
            if(this.alive[i]){
                this.r[i] += deltaTime * 0.02;  //变大
                if(this.r[i]>100){
                    this.alive[i]=false;
                    break;
                }
                let alpha = 1 - this.r[i]/100;
                ctx1.beginPath();
                ctx1.strokeStyle = "rgba(255,255,255,"+alpha+")";
                ctx1.arc(this.x[i],this.y[i],this.r[i],0,2*Math.PI);
                ctx1.closePath();
                ctx1.stroke();
            }
        }
        ctx1.restore();
    }
    born(x,y){
        for(let i=0;i<10;i++){
            //第一个没出生
            if(!this.alive[i]){
                //draw
                this.alive[i]=true;
                this.r[i]=20;
                this.x[i]=x;
                this.y[i]=y;
                return;
            }
        }
    }
}
export default Wave;