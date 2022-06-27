export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    storeid: number;
    store: string;

    unit_price: number;
    cnpj:string;
    idStocks:number;
    idWishlist:number;
    idProduct : number;
    quantity:number;
    number_nf:string;
    number_confirmation:string;
    date_purchase:string;
    product : Product
  
  }
  
 