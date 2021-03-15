class Item {
    constructor (item, description) {
        const decimal = (item.price.toFixed(2) - Math.floor(item.price)).toFixed(2)
        this.id = item.id;
        this.title = item.title;
        this.price = {
            currency: item.currency_id,
            amount: item.price.toFixed(),
            decimals:decimal
        };
        this.picture = item.thumbnail;
        this.condition = item.condition;
        this.free_shipping = item.shipping.free_shipping;

        if(description){
            this.sold_quantity = item.sold_quantity;
            this.description = description.plain_text;
        }else{
            this.address = item.address.state_name;
        }
    }
}

module.exports=Item