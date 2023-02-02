// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property
    isMute:boolean = false;

    @property(cc.AudioClip)
    bgMusic: cc.AudioClip = null;
    // LIFE-CYCLE CALLBACKS:

    playAudio(soundEffect){
        if(!this.isMute){
            cc.audioEngine.playEffect(soundEffect,false);
            
        }
    }

    playBG(){
        if(!this.isMute){
            cc.audioEngine.playMusic(this.bgMusic,true);
        }
    }

    muteSound(){
        this.isMute = true;
        cc.audioEngine.stopAll();
        
    }

    unmuteSound(){
        this.isMute = false;
        this.playBG();
    }

}
