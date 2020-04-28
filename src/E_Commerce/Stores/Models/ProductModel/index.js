class ProductModel{
    constructor(product){
        this.init(product);
    }
    init(product){
        this.productId=product.id;
        this.availableSizes=product.availableSizes;
        this.currencyFormat=product.currencyFormat;
        this.currencyId=product.currencyId;
        this.description=product.description;
        this.installmentsCount=product.installments;
        this.isFreeShipping=product.isFreeShipping;
        this.price=product.price;
        this.printStyle=product.style;
        this.title=product.title;
        this.imageURL=product.image;
    }
}
export default ProductModel;