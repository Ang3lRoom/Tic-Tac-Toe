const {ccclass} = cc._decorator;

@ccclass
export default class setCanvasScaleMode extends cc.Component {

    start () {
    cc.view.resizeWithBrowserSize(true); 
    cc.view.setDesignResolutionSize(1080, 1920, cc.ResolutionPolicy.SHOW_ALL);
    }
}
