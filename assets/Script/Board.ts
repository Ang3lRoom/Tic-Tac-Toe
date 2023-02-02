import FadeObject from "./FadeObject";

const {ccclass, property} = cc._decorator;

let haveIt = [];
const haveIt2 = [];
let haveIt3;

@ccclass
export default class Board extends cc.Component {

    @property(cc.Node)
    protected slotRef: cc.Node[] = [];
    @property({type: cc.SpriteFrame})
    private xSprite : cc.SpriteFrame = null;
    @property({type: cc.SpriteFrame})
    private oSprite : cc.SpriteFrame = null;
    @property({type: cc.Sprite})
    private lineSprite : cc.Sprite = null;
    @property(cc.Sprite)
    protected tictacSprites: cc.Sprite[] = [];
    @property(cc.Node)
    linePos: cc.Node = null;

    @property(cc.Label)
    labelPlayer1: cc.Label = null;
    @property(cc.Label)
    labelPlayer2: cc.Label = null;
    @property(cc.Label)
    labelDraws: cc.Label = null;
    @property(FadeObject)
    fadeObj: FadeObject = null;

    pointsPlayer1 = 0;
    pointsPlayer2 = 0;
    drawsPoints = 0;
    touchedSlots = 0;

    @property
    winPlayer1: boolean;
    @property
    winPlayer2: boolean;
    @property
    touchScreen: boolean = true;
    @property
    isPlayer1: boolean = true;
    @property
    isPlayer2: boolean = false;

    @property(cc.AudioSource)
    tocGameSound:  cc.AudioSource[] = [];
    @property(cc.AudioSource)
    winSound:  cc.AudioSource;

    @property(cc.Prefab)
    ballPrefab: cc.Prefab = null;

    sleep(seconds: number) {
        return new Promise((resole) => setTimeout(resole, seconds * 1000));
    }
     
    async startCountDownAsync() {
        await this.sleep(2);
        this.touchScreen = true;
    }
    async startCountDownAsync2() {
        await this.sleep(2);
        this.touchScreen = true;
    }
    async destroyPrefab() {
        await this.sleep(2);
        this.touchScreen = true;
    }
    protected start(){
        this.isPlayer2 = false ;
    }
    player2Button(){
        this.isPlayer2 = true;
    }
    player1Button(){
        this.isPlayer2 = false;
    }

    getRandomArbitrary(min:string, max) {
        if(!this.touchScreen)
        return;
        if (!this.isPlayer2) {
        var random = min;
        this.touchedSlots += 2;
        if(!haveIt.includes(random) && !this.slotRef[min].getComponent("Slot").isTouched && !this.winPlayer1) {
            haveIt.push(min);
            this.slotRef[min].getComponent(cc.Sprite).spriteFrame = this.oSprite;
            this.slotRef[min].getComponent("Slot").isTouched = true;
            haveIt2[min] = "O";

            const nono = (Math.random() * max).toFixed();

            if (!haveIt.includes(nono) && !this.slotRef[nono].getComponent("Slot").isTouched && !this.winPlayer1 ) {
                haveIt.push(nono);
                haveIt3 = nono;
                this.slotRef[nono].getComponent(cc.Sprite).spriteFrame = this.xSprite;
                this.slotRef[nono].getComponent("Slot").isTouched = true;
                haveIt2[nono] = "X";
                this.tictac(nono);
            }else{
                for (let index = 0; index < this.slotRef.length; index++) {
                    if (!this.slotRef[index].getComponent("Slot").isTouched && !this.winPlayer1)
                    {
                        haveIt.push(index);
                        haveIt3 = index;
                        this.slotRef[index].getComponent(cc.Sprite).spriteFrame = this.xSprite;
                        this.slotRef[index].getComponent("Slot").isTouched = true;
                        this.tictac(index);
                        haveIt2[index] = "X";
                        if (this.slotRef[index].getComponent("Slot").isTouched)
                        return;
                    }
                }
            }
            
        }
        }else{
            if(!haveIt.includes(random) && !this.slotRef[min].getComponent("Slot").isTouched && this.isPlayer1&& !this.winPlayer1) {
                haveIt.push(min);
                this.slotRef[min].getComponent(cc.Sprite).spriteFrame = this.oSprite;
                this.slotRef[min].getComponent("Slot").isTouched = true;
                haveIt2[min] = "O";
                this.isPlayer1 = false;
                this.touchedSlots += 1;
            }
            if(!haveIt.includes(random) && !this.slotRef[min].getComponent("Slot").isTouched && !this.isPlayer1 && !this.winPlayer1) {
                haveIt.push(min);
                this.slotRef[min].getComponent(cc.Sprite).spriteFrame = this.xSprite;
                this.slotRef[min].getComponent("Slot").isTouched = true;
                haveIt2[min] = "X";
                this.isPlayer1 = true;
                this.touchedSlots += 1;
            }
        }
    }
  
    clickOne(){
        if(!this.touchScreen) return;
        if (!this.slotRef[0].getComponent("Slot").isTouched) {
            this.getRandomArbitrary("0",8);
            this.tictac(0);
            this.tocGameSound[0].play();
            this.newBall(0);
        }
    }
    clickTwo(){
        if(!this.touchScreen) return;
        if (!this.slotRef[1].getComponent("Slot").isTouched) {
            this.getRandomArbitrary("1",8);
            this.tictac(1);
            this.tocGameSound[1].play();
            this.newBall(1);
        }
    }
    clickThree(){
        if(!this.touchScreen) return;
        if (!this.slotRef[2].getComponent("Slot").isTouched) {
            this.getRandomArbitrary("2",8);
            this.tictac(2);
            this.tocGameSound[2].play();
            this.newBall(2);
        }
    }
    clickFour(){
        if(!this.touchScreen) return;
        if (!this.slotRef[3].getComponent("Slot").isTouched) {
            this.getRandomArbitrary("3",8);
            this.tictac(3);
            this.tocGameSound[3].play();
            this.newBall(3);
        }
    }
    clickFive(){
        if(!this.touchScreen) return;
        if (!this.slotRef[4].getComponent("Slot").isTouched) {
            this.getRandomArbitrary("4",8);
            this.tictac(4);
            this.tocGameSound[4].play();
            this.newBall(4);
        }
    }
    clickSix(){
        if(!this.touchScreen) return;
        if (!this.slotRef[5].getComponent("Slot").isTouched) {
            this.getRandomArbitrary("5",8);
            this.tictac(5);
            this.tocGameSound[5].play();
            this.newBall(5);
        }
    }
    clickSeven(){
        if(!this.touchScreen) return;
        if (!this.slotRef[6].getComponent("Slot").isTouched) {
            this.getRandomArbitrary("6",8);
            this.tictac(6);
            this.tocGameSound[6].play();
            this.newBall(6);
        }
    }
    clickEight(){
        if(!this.touchScreen) return;
        if (!this.slotRef[7].getComponent("Slot").isTouched) {
            this.getRandomArbitrary("7",8);
            this.tictac(7);
            this.tocGameSound[7].play();
            this.newBall(7);
        }
    }
    clickNine(){
        if(!this.touchScreen) return;
        if (!this.slotRef[8].getComponent("Slot").isTouched) {
            this.getRandomArbitrary("8",8);
            this.tictac(8);
            this.tocGameSound[8].play();
            this.newBall(8);
        }
    }

    tictac(val){
        this.tictacSprites[val].node.opacity = 0;
        this.tictacSprites[val].node.runAction(cc.sequence(cc.delayTime(.1), cc.fadeIn(.3)));
    }

    protected update() {

        this.showLine();
        if(this.isPlayer2)
        {
            if (this.winPlayer1 && !this.winPlayer2) {
                
                this.pointsPlayer1 += 1;
                this.labelPlayer1.string =  this.pointsPlayer1.toString();
                this.winSound.play();
                this.fadeObj.resetAnimation();
                this.fadeObj.loaadTransition();
                this.endGame();
            }
        }

        if(this.touchedSlots > 8) 
        {
            if(this.winPlayer1 && !this.winPlayer2)
            {
            this.pointsPlayer1 += 1;
            this.labelPlayer1.string =  this.pointsPlayer1.toString();
            this.lineSprite.node.runAction(cc.sequence(cc.delayTime(.3), cc.fadeIn(.3)));
            this.lineSprite.node.runAction(cc.sequence(cc.delayTime(1), cc.fadeOut(.3)));
            this.winSound.play();
            this.fadeObj.resetAnimation();
            this.fadeObj.loaadTransition();
            }
            if(!this.winPlayer1 && !this.winPlayer2)
            {
            this.drawsPoints+=1;
            this.labelDraws.string =  this.drawsPoints.toString();
            }
            this.endGame();
        }
        if (this.winPlayer1 && !this.winPlayer2) {
            if(this.touchedSlots > 8) return;
            this.tictacSprites[haveIt3].node.runAction(cc.sequence(cc.delayTime(.1), cc.fadeOut(.3)));
            this.pointsPlayer1 += 1;
            this.labelPlayer1.string =  this.pointsPlayer1.toString();
            this.winSound.play();
            this.fadeObj.resetAnimation();
            this.fadeObj.loaadTransition();
        }else if (this.winPlayer2 && !this.winPlayer1) {
           
            this.pointsPlayer2 += 1;
            this.labelPlayer2.string =  this.pointsPlayer2.toString();
            this.winSound.play();
            this.fadeObj.resetAnimation();
            this.fadeObj.loaadTransition();
        }
        if(this.winPlayer1 || this.winPlayer2){
            this.touchScreen = false;
            this.endGame();
            this.fadeObj.resetAnimation();
            this.fadeObj.loaadTransition();
        }
    }

    showLine(){

        if (this.winPlayer1) this.winPlayer2 = false;
        if(this.winPlayer2) this.winPlayer1 = false;
        //#region VERTICAL
        if(haveIt2[0] === "O" && haveIt2[5] === "O" && haveIt2[6] === "O" && !this.winPlayer2) this.winPlayer1 = true;
        else if(haveIt2[0] === "X" && haveIt2[5] === "X" && haveIt2[6] === "X" && !this.winPlayer1) this.winPlayer2 = true
        if(haveIt2[1] === "O" && haveIt2[4] === "O" && haveIt2[7] === "O" && !this.winPlayer2)  this.winPlayer1 = true;
        else if(haveIt2[1] === "X" && haveIt2[4] === "X" && haveIt2[7] === "X" && !this.winPlayer1) this.winPlayer2 = true
        if(haveIt2[2] === "O" && haveIt2[3] === "O" && haveIt2[8] === "O" && !this.winPlayer2)  this.winPlayer1 = true;
        else if(haveIt2[2] === "X" && haveIt2[3] === "X" && haveIt2[8] === "X" && !this.winPlayer1) this.winPlayer2 = true

        if(haveIt2[0] === "O" && haveIt2[5] === "O" && haveIt2[6] === "O" && this.winPlayer1
        || haveIt2[0] === "X" && haveIt2[5] === "X" && haveIt2[6] === "X" && this.winPlayer2)
        {
            this.linePos.setRotation(90);
            this.linePos.setPosition(new cc.Vec2(-275,-200));
        }
        if(haveIt2[1] === "O" && haveIt2[4] === "O" && haveIt2[7] === "O" && this.winPlayer1
        || haveIt2[1] === "X" && haveIt2[4] === "X" && haveIt2[7] === "X" && this.winPlayer2)
        {
            this.linePos.setRotation(90);
            this.linePos.setPosition(new cc.Vec2(0,-200));
        }
        if(haveIt2[2] === "O" && haveIt2[3] === "O" && haveIt2[8] === "O" && this.winPlayer1
        || haveIt2[2] === "X" && haveIt2[3] === "X" && haveIt2[8] === "X" && this.winPlayer2)
        {
            this.linePos.setRotation(90);
            this.linePos.setPosition(new cc.Vec2(275,-200));
        }
        //#endregion VERTICAL

        //#region HORIZONTAL
        if(haveIt2[0] === "O" && haveIt2[1] === "O" && haveIt2[2] === "O" && !this.winPlayer2)  this.winPlayer1 = true;
        else if(haveIt2[0] === "X" && haveIt2[1] === "X" && haveIt2[2] === "X" && !this.winPlayer1) this.winPlayer2 = true
        if(haveIt2[5] === "O" && haveIt2[4] === "O" && haveIt2[3] === "O" && !this.winPlayer2)  this.winPlayer1 = true;
        else if(haveIt2[5] === "X" && haveIt2[4] === "X" && haveIt2[3] === "X" && !this.winPlayer1) this.winPlayer2 = true
        if(haveIt2[6] === "O" && haveIt2[7] === "O" && haveIt2[8] === "O" && !this.winPlayer2)  this.winPlayer1 = true;
        else if(haveIt2[6] === "X" && haveIt2[7] === "X" && haveIt2[8] === "X" && !this.winPlayer1) this.winPlayer2 = true

        if(haveIt2[0] === "O" && haveIt2[1] === "O" && haveIt2[2] === "O" && this.winPlayer1
        || haveIt2[0] === "X" && haveIt2[1] === "X" && haveIt2[2] === "X" && this.winPlayer2)
        {
            this.linePos.setRotation(0);
            this.linePos.setPosition(new cc.Vec2(0,70));
        }
         if (haveIt2[5] === "O" && haveIt2[4] === "O" && haveIt2[3] === "O" && this.winPlayer1
        || haveIt2[5] === "X" && haveIt2[4] === "X" && haveIt2[3] === "X" && this.winPlayer2)
        {
            this.linePos.setRotation(0);
            this.linePos.setPosition(new cc.Vec2(0,-200));
        }
         if (haveIt2[6] === "O" && haveIt2[7] === "O" && haveIt2[8] === "O" && this.winPlayer1
        || haveIt2[6] === "X" && haveIt2[7] === "X" && haveIt2[8] === "X" && this.winPlayer2)
        {
            this.linePos.setRotation(0);
            this.linePos.setPosition(new cc.Vec2(0,-500));
        }
        //#endregion HORIZONTAL

        //#region DIAGONAL
        if(haveIt2[0] === "O" && haveIt2[4] === "O" && haveIt2[8] === "O" && !this.winPlayer2)  this.winPlayer1 = true;
        else if(haveIt2[0] === "X" && haveIt2[4] === "X" && haveIt2[8] === "X" && !this.winPlayer1) this.winPlayer2 = true
        if(haveIt2[2] === "O" && haveIt2[4] === "O" && haveIt2[6] === "O" && !this.winPlayer2)  this.winPlayer1 = true;
        else if(haveIt2[2] === "X" && haveIt2[4] === "X" && haveIt2[6] === "X" && !this.winPlayer1) this.winPlayer2 = true
       
        if(haveIt2[0] === "O" && haveIt2[4] === "O" && haveIt2[8] === "O" && this.winPlayer1
        || haveIt2[0] === "X" && haveIt2[4] === "X" && haveIt2[8] === "X" && this.winPlayer2)
        {
            this.linePos.setRotation(45);
            this.linePos.setPosition(new cc.Vec2(-10,-200));
        }
         if (haveIt2[2] === "O" && haveIt2[4] === "O" && haveIt2[6] === "O" && this.winPlayer1
        || haveIt2[2] === "X" && haveIt2[4] === "X" && haveIt2[6] === "X" && this.winPlayer2)
        {
            this.linePos.setRotation(-45);
            this.linePos.setPosition(new cc.Vec2(10,-200));
        }
        //#endregion DIAGONAL
    }

    endGame(){
        
        for (let index = 0; index < this.tictacSprites.length; index++) {
            this.tictacSprites[index].node.runAction(cc.sequence(cc.delayTime(1), cc.fadeOut(.1)));
            this.slotRef[index].getComponent("Slot").isTouched = false;
        }
        if(this.winPlayer1 || this.winPlayer2)
        {
            this.winSound.play();
            this.lineSprite.node.runAction(cc.sequence(cc.delayTime(.3), cc.fadeIn(.3)));
            this.lineSprite.node.runAction(cc.sequence(cc.delayTime(1), cc.fadeOut(.3)));
        }
        this.resetSlots();
        return;
    }
    resetSlots(){
        haveIt2.splice(0,haveIt2.length);
        haveIt.splice(0,haveIt.length);
        this.startCountDownAsync();
        this.winPlayer1 = false;
        this.winPlayer2 = false;
        this.isPlayer1 = true;
        this.touchedSlots = 0;
    }
    resetPoints(){
        this.fadeObj.resetAnimation();
        this.pointsPlayer1 = 0;
        this.pointsPlayer2 = 0;
        this.drawsPoints = 0;
        this.labelPlayer1.string =  this.pointsPlayer1.toString();
        this.labelPlayer2.string =  this.pointsPlayer2.toString();
        this.labelDraws.string =  this.drawsPoints.toString();
        if(!this.isPlayer2)
        this.isPlayer2 = false;
    }

    newBall(val) {
        let ball = cc.instantiate(this.ballPrefab);
        ball.parent = this.slotRef[0].parent;
        ball.setPosition(this.slotRef[val].getPosition());
        
        this.scheduleOnce(function () {
            ball.destroy();
        }, 1.5); // 1.5 second
    }

}
