// 海葵类
class Ane{
    constructor(){
        this.rootx=[]; // 起始点
        this.headx=[]; // 终止点
        this.heady=[]; 
        this.amp=[]; // 浮动
        this.alpha=0; // 正弦函数角度
    };
    init(canHeigh){
        let h = canHeigh; 
        for(let i=0;i<50;i++){
            //每个海葵，生长的位置随机，比较像自然生长
            this.rootx[i] = i * 16 + Math.random()*20;
            this.headx[i] = this.rootx[i];//如果结束点在中心，是一条笔直线段
            this.heady[i] = h - 250 + Math.random()*50;
            this.amp[i] = Math.random() * 50 + 50;
        }
    };
    draw(ctx2,deltaTime){
        this.alpha += deltaTime * 0.0008;
        let l = Math.sin(this.alpha);
        //console.log(l);
        ctx2.save();
        ctx2.strokeStyle = "#3b154e";
        ctx2.globalAlpha = 0.6;
        ctx2.lineCap = "round";
        ctx2.lineWidth = 20;
        
        for(let i=0;i<this.num;i++){
        ctx2.beginPath();
        ctx2.moveTo(this.rootx[i],canHeigh);
        this.headx[i] = this.rootx[i] + l * this.amp[i];

        ctx2.quadraticCurveTo(this.rootx[i],canHeigh-100,this.headx[i],this.heady[i]);
        //ctx.strokeStyle();
        ctx2.stroke();
        }
        ctx2.restore();
    }
}
export default Ane;