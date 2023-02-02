const {ccclass, property} = cc._decorator;

@ccclass
export default class Audio extends cc.Component {

    @property(cc.AudioClip)
    audio: cc.AudioClip;
    @property(cc.AudioSource)
    ticHomeSound: cc.AudioSource;

    touch = true;
    
    start(): void {
        this.startCountDownAsync();
    }
  
    sleep(seconds: number) {
        return new Promise((resole) => setTimeout(resole, seconds * 1000));
    }
     
    async startCountDownAsync() {
        await this.sleep(1);
        cc.audioEngine.playMusic(this.audio,true);
    }
    async enableTouch() {
        await this.sleep(1.3);
        this.touch =  true;
    }

    ticSound(){
        if(this.touch)
        this.ticHomeSound.play();
        this.touch =  false;
        this.enableTouch();
    }
}
