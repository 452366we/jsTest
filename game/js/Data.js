class Data{
    constructor(){
        this.fruitNum = 0;
        this.double = 1;//吃到了双倍分数的，桔色果实
        this.score = 0;
        this.gameOver = false; //游戏是否结果
        this.alpha = 0;
    }
    reset(){
        this.fruitNum = 0;
        this.double = 1;
    }
    draw(ctx1,can1,deltaTime){
        let w = can1.width;
        let h = can1.height;

        ctx1.save();
        ctx1.fillStyle = "white";
        ctx1.font = "35px Verdana";
        ctx1.textAlign = "center";
    
        ctx1.fillText("SCORE: "+this.score,w*0.5,h-80);

        if(this.gameOver){
            this.alpha += deltaTime * 0.0003;
            this.alpha = this.alpha > 1 ? 1 : this.alpha; 
            ctx1.fillStyle = "rgba(255,255,255,"+this.alpha+")";
            ctx1.font = "55px Verdana";
            ctx1.fillText("GAMEOVER",w*0.5,h*0.5);        
        }
        
        ctx1.restore();
    }
    addScore(){
        this.score += this.fruitNum * 100 * this.double;
        this.fruitNum = 0;
        this.double = 1;
    }
}
export default Data;