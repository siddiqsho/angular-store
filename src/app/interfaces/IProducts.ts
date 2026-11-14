export interface ProductInterface {
    id:number,
    category:string,
    description:string,
    image:string,
    rating:{
        rate:number,
        count:number
    },
    title:string,
    price:number
}
