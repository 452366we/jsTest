class Halo{
    constructor(){
        this.x = [];
        this.y = [];
        this.alive = [];
        this.r = [];   
    }
    init(){
        for(let i=0;i<5;i++){
            this.x[i] = 0;
            this.y[i] = 0;
            this.alive[i] = false;
            this.r[i] = 0;
        }  
    }
    draw(ctx1,deltaTime){
        ctx1.save();
        ctx1.lineWidth = 10;
        ctx1.shadowBlur = 10;
        ctx1.shadowColor = "rgba(255,215,0,1)";

        for(let i=0;i<5;i++){
            if(this.alive[i]){
                //console.log(222);
                this.r[i] += deltaTime * 0.05;
                if(this.r[i]>50){
                    this.alive[i] = false;
                    break;
                }
                //console.log(this.r[i]);
                var alpha = 1 - this.r[i] / 50;
                ctx1.beginPath();
                ctx1.arc(this.x[i],this.y[i],this.r[i],0,Math.PI*2);
                ctx1.closePath();
                ctx1.strokeStyle = "rgba(255,215,0,"+alpha+")";
                ctx1.stroke();
            }
        }
        ctx1.restore();
    }
    born(x,y){
        for(let i=0;i<5;i++){
            if(!this.alive[i]){
                this.x[i] = x;
                this.y[i] = y;
                this.alive[i] = true;
                this.r[i] = 10;
                return;        
            }
        }
    }
}
export default Halo;