const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Sprite)
    protected slotValue: cc.Sprite[] = [];

    
    //Take a player number and convert to an X or O to display
    setValue(x: cc.Texture2D, o: cc.Texture2D, value: number){
        if (value === 1) {
            this.slotValue[1].spriteFrame.setTexture(x);

          } else if (value === 2) {
            this.slotValue[0].spriteFrame.setTexture(o);
          }
    }
}
