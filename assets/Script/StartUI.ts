// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

export function test() {}

@ccclass
export default class StartUI extends cc.Component {

    @property(cc.Sprite)
    twisted: cc.Sprite = null;

    @property(cc.Sprite)
    protected sprites: cc.Sprite[] = [];

    @property(cc.Animation)
    anim: Animation;

    start () {
    this.startFadeTransition();
    this.startCountDownAsync();
    }

    startFadeTransition() {

        for (let index = 0; index < this.sprites.length; index++) {
            this.sprites[index].node.opacity = 0;
            this.sprites[index].node.runAction(cc.sequence(cc.delayTime(2.5), cc.fadeIn(2.5)));
            this.twisted.node.runAction(cc.sequence(cc.delayTime(.2), cc.fadeIn(.5)));
            this.twisted.node.runAction(cc.sequence(cc.delayTime(1), cc.fadeOut(1)));
    
        };
    }

    sleep(seconds: number) {
        return new Promise((resole) => setTimeout(resole, seconds * 1000));
    }
     
    async startCountDownAsync() {
        await this.sleep(6);
        this.anim.play();
    }
    
}

