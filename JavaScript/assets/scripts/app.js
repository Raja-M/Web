
console.log("hello there") ;

/*

class Person {

    name = 'Max';

    constructor(){
        this.age = 30;
    }

    greet(){
        console.log(
            'Hi, I am the ' + this.name + ' and I am ' + this.age + ' years old.'
        );
    }
}
*/

function Person(){
    this.age = 30;
    this.name = 'Max';
    this.greet = function(){
        console.log(
            'Hi, I am the ' + this.name + ' and I am ' + this.age + ' years old.'
        );
    };
}


Person.prototype.printAge =  function (){
        console.log(this.age);    
};

console.dir(Person);

const p = new Person();
p.prototype = {
    printAge(){
        console.log(this.age);
    }
};
p.greet();
//p.printAge();

console.log(p.__proto__);

/*
class Product{
    title = 'Default';
    imageUrl ;
    description = '';
    price;
    
    constructor(title, image, desc,price){
        this.title = title ;
        this.imageUrl = image;
        this.description = desc;
        this.price = price;


    }
}

class ElementAttribute {
    constructor ( attrName, attrValue){
        this.name = attrName;
        this.value = attrValue;
    }

}

class Component {

    constructor(renderHookId, shouldRender = true){
        this.hookId = renderHookId;

        if ( shouldRender){
            this.render();
        }
        
    }

    render(){}

    createRootElement( tag, cssClasses, attributes){
        const rootElement = document.createElement(tag);

        if( cssClasses){
            rootElement.className = cssClasses;
        }
        if( attributes && attributes.length > 0 ){
            for( const attr of attributes){
                rootElement.setAttribute(attr.name, attr.value);
            }

        }
        document.getElementById(this.hookId).append(rootElement);
     
        return rootElement;
    }
}


class ShoppingCart extends Component {
    items = [];

    set cartItems( value ){
        this.items = value;
        this.totalOutput.innerHTML = `<h2>Total :  \$${this.totalAmount.toFixed(2) } </h2>`;
    }

    get totalAmount(){
        const sum = this.items.reduce(  (preValue, curItem) => preValue + curItem.price  , 0 );
        return sum;        
    }

    constructor(renderHookId){
        super(renderHookId, false);

  
        this.render();

    }

    orderProducts = () => {
        console.log('Ordering ....');
        console.log(this.items);
    };
    addProduct(product) {
        const updatedItems = [ ...this.items];
        updatedItems.push(product);
        this.cartItems =  updatedItems ;
           
    }


    render() {
        console.log( "Shopping Cart Renter"); 
        const cartEl =  this.createRootElement('section', 'cart');
        cartEl.innerHTML =   `
            <h2>Total :  \$${0} </h2>
            <button>Order Now </button>
        `;

        const orderButton = cartEl.querySelector('button');
        orderButton.addEventListener('click', this.orderProducts);
        
        this.totalOutput = cartEl.querySelector('h2');
 

    }

}

class ProductItem extends Component{

    constructor(product, renderHookId){
        super(renderHookId, false);
        this.product = product;
        this.render();
    }

    addToCart(){
        App.addProductToCart(this.product);
    }
    render(){

        const prodEl = this.createRootElement ( 'li' , 'product-item') ;

        prodEl.innerHTML = `
        <div>
            <img src="${this.product.imageUrl}" alt="${this.product.title}" >
            <div class="product-item__content">
                <h2>${this.product.title}</h2>
                <h3>\$${this.product.price}</h3>
                <p>${this.product.description}</p>
                <button>Add to Cart</button>

            </div>
        </div>
        `;
        const addCartButton = prodEl.querySelector('button');
        addCartButton.addEventListener('click' , this.addToCart.bind(this) );
       
    }
}

class ProductList extends Component {

    products = [];


    constructor(renderHookId) {
        super(renderHookId);
        this.fetchProducts();

    }

    fetchProducts(){
        this.products = [
            new Product('A Pillow', 
                'https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg',  
                'A sort of pillow', 
                19.99 
            ),
            new Product('A Carpet', 
                'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg',  
                'A carpet which you might like - or not.', 
                89.99 
            )
        ];
        this.renderProducts();
    }

    renderProducts(){

        for ( const prod of this.products){
            
            new ProductItem( prod, 'prod-list');

           
        }
        
        
    }

    render(){       

        this.createRootElement('ul' , 'product-list' , [new ElementAttribute('id', 'prod-list')]);
        if (this.products && this.products.length > 0){
            this.renderProducts();
        }
        
 
    }

}

class Shop {

    constructor(){       
    
        this.render();
         
    }
    render(){

        console.log( "shop render Method"); 
        this.cart = new ShoppingCart('app');
  
        new ProductList('app');
      
    }
}

class App{

    static cart;

    static init(){
        console.log( " App Method"); 

        const shop = new Shop();
 
        this.cart = shop.cart;
        
    }

    static addProductToCart( product ){
        this.cart.addProduct(product);
    }
}

App.init();

*/
