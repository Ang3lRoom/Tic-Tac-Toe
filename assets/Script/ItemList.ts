const {ccclass, property} = cc._decorator;
@ccclass('Item')
export class Item {
    @property(Number)
    id = 0;
    @property(String)
    itemName = '';
    @property(Number)
    itemPrice = 0;
    @property(cc.SpriteFrame)
    iconSF: cc.SpriteFrame | null = null;
}

@ccclass
export class ItemList extends cc.Component {
    @property([Item])
    items: Item[] = [];
    @property(cc.Prefab)
    itemPrefab: cc.Prefab | null = null;

    onLoad () {
        for (let i = 0; i < this.items.length; ++i) {
            const item = cc.instantiate(this.itemPrefab);
            const data = this.items[i];
            this.node.addChild(item);
            item.getComponent('ItemTemplate').init(data);
        }
    }
}