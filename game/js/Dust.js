class Dust{
    constructor(){
        this.x = [];
        this.y = [];
        this.amp = [];
        this.pics = [];
        this.NO = [];
        this.alpha = [];
    }
    init(canWidth,canHeigh){
        for(let i=0;i<30;i++){
            this.x[i] = Math.random()*canWidth;
            this.y[i] = Math.random()*canHeigh;
            this.amp[i] = 20 + Math.random()*50;
            this.NO[i] = Math.floor(Math.random()*7);//归一（0，7）
        }
        this.alpha = 0;
    
    
        for(let i=0;i<7;i++){
            this.pics[i] = new Image();
            this.pics[i].src = "./src/dust"+i+".png";
        }
    }
    draw(ctx1,deltaTime){
        this.alpha += deltaTime * 0.0008;
        let l = Math.sin(this.alpha);
        for(let i=0;i<30;i++){
            let no = this.NO[i];
            ctx1.drawImage(this.pics[no],this.x[i]+this.amp[i]*l,this.y[i]);
        }
    }
}
export default Dust;