const {ccclass, property} = cc._decorator;

@ccclass
export default class ButtonNodes extends cc.Component {

	@property(cc.Node)
	nodeA: cc.Node = null;

	@property(cc.Node)
	nodeB: cc.Node = null;

    @property(cc.Sprite)
    neon: cc.Sprite = null;
    @property(cc.Sprite)
    neon1: cc.Sprite = null;
   
    @property(cc.Animation)
    anim: cc.Animation;
    @property(cc.Animation)
    anim2: cc.Animation;

	hoveringA: boolean = false;
	hoveringB: boolean = false;

	start() {
        this.neon.node.opacity = 0;
        this.neon1.node.opacity = 0;

		this.nodeA.on(cc.Node.EventType.MOUSE_ENTER, this.onMoveA, this);
		this.nodeB.on(cc.Node.EventType.MOUSE_ENTER, this.onMoveB, this);
		this.nodeA.on(cc.Node.EventType.MOUSE_LEAVE, this.onLeaveA, this);
		this.nodeB.on(cc.Node.EventType.MOUSE_LEAVE, this.onLeaveB, this);

        this.neon.node.runAction(cc.sequence(cc.delayTime(2.5), cc.fadeIn(2.5)));
        this.neon1.node.runAction(cc.sequence(cc.delayTime(2.5), cc.fadeIn(2.5)));
	}

	onMoveA() {
		this.hoveringA = true;
		this.updateState();
	}

	onMoveB() {
		this.hoveringB = true;
		this.updateState();
	}

	onLeaveA() {
		this.hoveringA = false;
		this.updateState();
	}

	onLeaveB() {
		this.hoveringB = false;
		this.updateState();
	}

	updateState() {
		if (this.hoveringA) {
           // this.neon.node.active = true;
			this.anim.play("sizeclip1");
		} else {
			this.anim.play("IdleNumber1");
           // this.neon.node.active = false;
		}
        if (this.hoveringB) {
			this.anim2.play("sizeclip2");
		} else {
			this.anim2.play("IdleNumber2");
		}
	}

}
