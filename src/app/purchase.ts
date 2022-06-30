export type Purchase = {
    id: number,
    client: {
        id: number;
    },
    store: {
      id: number
      name: string
    },
    product: {
        id:number,
        details: string,
        image: string,
        name: string
    },
    date_purchase: Date,
    number_confirmation: string,
    number_nf: string,
  };