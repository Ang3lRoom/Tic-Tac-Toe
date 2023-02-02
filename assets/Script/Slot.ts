const {ccclass, property} = cc._decorator;
 
@ccclass
export default class Slot extends cc.Component {

    @property(Boolean)
    isTouched: Boolean = false;

    //Take a player number and convert to an X or O to display
    /*setValue(x: cc.Texture2D, o: cc.Texture2D, value: number){
        if (this.slotID = 1) {
            this.slotValue.spriteFrame.setTexture(x);
            console.log("no");
          }
        else if (this.slotID ===4) {
            this.slotValue.spriteFrame.setTexture(o);
          }
    }*/
}
