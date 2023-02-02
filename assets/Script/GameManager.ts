const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
	objectGameUI: cc.Node = null
	@property(cc.Node)
	objectHomeUI: cc.Node = null
    
	@property(cc.Node)
    protected particlesPly1: cc.Node;
    @property(cc.Node)
    protected particlesPly2: cc.Node;
    @property(cc.Button)
    protected button1: cc.Button;


	sleep(seconds: number) {
        return new Promise((resole) => setTimeout(resole, seconds * 1000));
    }
     
    async startCountDownAsync() {
        await this.sleep(1.1);
		this.objectGameUI.active = true;
		this.objectHomeUI.active = false;
    }
    async startCountDownAsync2() {
        await this.sleep(1.1);
		this.objectHomeUI.active = true;
		this.objectGameUI.active = false;
    }
    async enableButtons() {
        await this.sleep(3);
		this.button1.interactable = true;
    }
    protected start() {
        this.button1.interactable = false;
        this.enableButtons();
    }

    showParticlesPlayer(){
        this.particlesPly1.active = true;
    }
    showParticlesPlayer2(){
        this.particlesPly2.active = true;
    }
	notShowParticles(){
        this.particlesPly1.active = false;
        this.particlesPly2.active = false;
    }

    gameActive() {
		this.startCountDownAsync();
	}

    homeActive() {
		this.objectHomeUI.active = true;
		this.objectGameUI.active = false;
	}

}
