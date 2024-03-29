let product ={
    Shoes:{
        Boots:[
            {id: 1, size: 36, color: "red", price:23},
            {id: 2, size: 35, color: "red", price:27},
            {id: 3, size: 45, color: "blue", price:93},
            {id: 4, size: 41, color: "green", price:100},
        ],
        Sneakers:[
            {id: 6, size: 34, color: "red", price:83},
            {id: 7, size: 35, color: "yellow", price:7},
            {id: 8, size: 25, color: "blue", price:930},
            {id: 9, size: 41, color: "green", price:10},
        ],
        Sandals:[
            {id: 10, size: 38, color: "yellow", price:23},
            {id: 11, size: 35, color: "red", price:70},
            {id: 12, size: 43, color: "blue", price:90},
            {id: 13, size: 39, color: "green", price:19},
        ],
    }, 
}

console.log(product);

//////////////////////////////////////////////////////////////////
function filter(products, minPrice, maxPrice, size, color) {
        let filteredIds = [];
    
        for (const category in products.Shoes) {
          const shoes = products.Shoes[category];
    
          shoes.forEach(shoe => {
            if (shoe.price >= minPrice && shoe.price <= maxPrice && shoe.size === size && shoe.color === color) {
              filteredIds.push(shoe.id);
            }
          });
        }
    
    return filteredIds;
}
console.log(filter(product, 50, 300, 35, "red"));
/////////////////////////////////////////////////////////////////////

let newProducts ={
    Shoes:{
        Boots:[
            {id: 1, size: 36, color: "red", discount: 10, price:23},
            {id: 2, size: 35, color: "red", discount: 20, price:27},
            {id: 3, size: 45, color: "blue", discount: 30,  price:93},
            {id: 4, size: 41, color: "green", discount: 1, price:100},
        ],
        Sneakers:[
            {id: 6, size: 34, color: "red", discount: 90, price:23},
            {id: 7, size: 35, color: "yellow", discount: 0, price:7},
            {id: 8, size: 35, color: "blue", discount: 7, price:930},
            {id: 9, size: 41, color: "green", discount: 23, price:10},
        ],
        Sandals:[
            {id: 10, size: 38, color: "red", discount: 4, price:23},
            {id: 11, size: 35, color: "yellow", discount: 7, price:70},
            {id: 12, size: 43, color: "blue", discount: 8, price:90},
            {id: 13, size: 39, color: "green", discount: 15, price:19},
        ],
    }, 
}
/////////////////////////////////////////////////////////////
Object.keys(newProducts.Shoes).forEach(category => {
    
    newProducts.Shoes[category].forEach(shoe => {
        shoe.discount = 15; 
        shoe.cost = shoe.price; 
        Object.defineProperty(shoe, 'id', {
            writable: false, // id неизменяемый
            enumerable: true,//перечисляемый
            configurable: false // id нельзя удалять
        });

        Object.defineProperty(shoe, 'price', {
            get() {
                return this.cost - (this.cost * this.discount / 100);
            },
            set(newValue) {
                this.cost = newValue;
            },
            enumerable: true, // price можно перечислять
            configurable: false // price нельзя удалять
        });

        
    });
});
console.log(newProducts);
newProducts.Shoes.Boots[0].id = 2;
console.log(newProducts.Shoes.Boots[0].id);
/////////////////////////////////////////////////////////

    function ShoesCase(id, size, color, discount, cost){
        this.size = size;
        this.color = color;
        this.discount = discount;
        this.cost = cost;
        Object.defineProperty(this, 'id', {
            value: id,
            writable: false, // нельзя изменять
            enumerable: true, // можно перечислять
            configurable: false // нельзя удалять
        });
        Object.defineProperty(this, 'price', {
            get (){
                return this.cost*(1 - this.discount/100)
            },
            set (newPrice){
                this.cost = newPrice
            } ,
            enumerable: true, // можно перечислять
            configurable: false // нельзя удалять
        });
    }
    

let allProduct ={
    Shoes:{
        Boots:[
            new ShoesCase(1, 22, "green", 10, 42),
            new ShoesCase(2, 34, "red", 1, 80),
            new ShoesCase(3, 34, "blue", 20, 100),
        ],
        Sneakers:[
            new ShoesCase(4, 45, "green", 10, 42),
            new ShoesCase(5, 30, "black", 50, 1000),
        ],
        Sandals:[
            new ShoesCase(6, 20, "red", 10, 62),
            new ShoesCase(7, 32, "green", 20, 82),
            new ShoesCase(8, 42, "white", 10, 42),
        ],
    }, 
}
console.log(allProduct);
allProduct.Shoes.Boots[0].id = 2;
console.log(allProduct.Shoes.Boots[0].id);