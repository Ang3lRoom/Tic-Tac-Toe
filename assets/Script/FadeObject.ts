const {ccclass, property} = cc._decorator;

@ccclass
export default class FadeObject extends cc.Component {

    @property(cc.Sprite)
    protected sprites: cc.Sprite[] = [];
    @property(cc.Label)
    protected labels: cc.Label[] = [];
    @property(cc.Sprite)
    protected homeSprites: cc.Sprite[] = [];
    @property(cc.Sprite)
    protected hashtag: cc.Sprite;

    @property(cc.Node)
	objectLeftUI: cc.Node = null
    @property(cc.Node)
	objectRightUI: cc.Node = null

    
    sleep(seconds: number) {
        return new Promise((resole) => setTimeout(resole, seconds * 1000));
    }
     
    async startCountDownAsync() {
        await this.sleep(.5);
        this.objectLeftUI.position = new cc.Vec3(-523.099,244.5,0);
        this.objectRightUI.position = new cc.Vec3(885.995,710.3,0);
        await this.sleep(1);
        cc.tween(this.objectLeftUI).to(.5,{position: cc.v3(10,244.5,0)}, {easing:'CubicInOut'})
        .start();
        cc.tween(this.objectRightUI).to(.5,{position: cc.v3(355.1,710.3,0)}, {easing:'CubicInOut'})
        .start();
    }
    async startCountDownAsync33() {
        await this.sleep(.5);

        for (let index = 0; index < this.sprites.length; index++) {
            this.sprites[index].node.opacity = 0;
            this.sprites[index].node.runAction(cc.sequence(cc.delayTime(.8), cc.fadeIn(.5)));
        };
        for (let index = 0; index < this.labels.length; index++) {
            this.labels[index].node.opacity = 0;
            this.labels[index].node.runAction(cc.sequence(cc.delayTime(.8), cc.fadeIn(.5)));
        };
    }

    public loaadTransition() {
		this.startCountDownAsync();
	}

    testNewCocos() {

        for (let index = 0; index < this.sprites.length; index++) {
            this.sprites[index].node.opacity = 0;
            this.sprites[index].node.runAction(cc.sequence(cc.delayTime(1.1), cc.fadeIn(1)));
        };
        for (let index = 0; index < this.labels.length; index++) {
            this.labels[index].node.opacity = 0;
            this.labels[index].node.runAction(cc.sequence(cc.delayTime(1.1), cc.fadeIn(1)));
        };
    }

    resetAnimation() {

       this.startCountDownAsync33();
    }

    public tesCocos() {
        for (let index = 0; index < this.homeSprites.length; index++) {
            this.homeSprites[index].node.opacity = 0;
            this.homeSprites[index].node.runAction(cc.sequence(cc.delayTime(.4), cc.fadeIn(0.4)));
        };
    }
 
}
