import {lerpDistance,lerpAngle} from './commonFunctions.js'
class Baby{
    constructor(){
        this.x;
        this.y;            //鱼宝宝坐标
        this.angle;
        this.babyEye = []; //鱼宝宝眼睛身体尾巴数组
        this.babyBody = [];
        this.babyTail = [];
        

        this.babyEyeIdx = 0;            //显示图片下标 
        this.babyEyeEndtime = 2000;     //显示睁眼时间长度
        this.babyEyeStart = 1;          //计时开始 

        this.babyBodyIdx = 0;
        this.babyBodyEndtime = 3000;
        this.badyBodyStart = 1;

        this.babyTailIdx = 0;
        this.babyTailEndTime = 1000;
        this.babyTailStart = 1;
    }
    init(canWidth,canHeigh){
        this.x = canWidth * 0.5;
        this.y = canHeigh * 0.5;
        this.angle = 0;	 
        //初始化图片组
        for(let i=0;i<2;i++){
            this.babyEye[i]=new Image();
            this.babyEye[i].src = "./src/babyEye"+i+".png";
        }
        for(let i=0;i<20;i++){
            this.babyBody[i]=new Image();
            this.babyBody[i].src = "./src/babyFade"+i+".png";
        }
        for(let i=0;i<8;i++){
            this.babyTail[i]=new Image();
            this.babyTail[i].src = "./src/babyTail"+i+".png";
        }
    }
    draw(ctx1,mom,deltaTime){
        this.x = lerpDistance(mom.x,this.x,0.98);
        this.y = lerpDistance(mom.y,this.y,0.99);
     	//lerp angle
        let deltaY = mom.y - this.y;
        let deltaX = mom.x - this.x;
        let beta = Math.atan2(deltaY,deltaX) + Math.PI;//-PI,PI
     	//lerp angle
        this.angle = lerpAngle(beta,this.angle,0.6);


        //判断尾巴 身体 与 眼睛 
        this.badyBodyStart += deltaTime;
        if(this.badyBodyStart > this.babyBodyEndtime){
            this.babyBodyIdx = (this.babyBodyIdx+1);
            this.badyBodyStart = 1;
            if(this.babyBodyIdx>18){
                this.babyBodyIdx = 18;
                data.gameOver = true;///游戏结束了。。。。。
            }
        } 
        //console.log(this.babyBodyIdx);	

        this.babyTailStart += deltaTime;
        if(this.babyTailStart > this.babyTailEndTime){
            this.babyTailIdx = (this.babyTailIdx+1)%8;
            this.babyTailStart = 1;
        } 


        this.babyEyeStart += deltaTime;
        if(this.babyEyeStart>this.babyEyeEndtime){
            this.babyEyeIdx = (this.babyEyeIdx+1)%2;
            this.babyEyeStart = 1;          //计时开始 
        }            //显示图片下标 
        if(this.babyEyeIdx==0){
            this.babyEyeEndtime = 3000;
        }
        if(this.babyEyeIdx==1){
            this.babyEyeEndtime = 300;
        }
        

        var eye = this.babyEye[this.babyEyeIdx];
        var body = this.babyBody[this.babyBodyIdx];
        var tail = this.babyTail[this.babyTailIdx];

        ctx1.save();
        ctx1.translate(this.x,this.y);
        ctx1.rotate(this.angle);
        ctx1.drawImage(body,-body.width*0.5,-body.height*0.5);
        ctx1.drawImage(tail,-tail.width*0.5+23,-tail.height*0.5);
        ctx1.drawImage(eye,-eye.width*0.5,-eye.height*0.5);	
        ctx1.restore();
    }
}
export default Baby;