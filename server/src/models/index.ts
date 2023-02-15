

export class Products{
    constructor(
        public id:string,
        public name: string,
        public description: string,
        public category: string,
        public imageUrl: string,
        public price: number
    ){}
}

export class Cart {
    constructor(
        public productId:string,
        public userId: string,
        public quantity: number
    ){}
}

export class Orders {
    constructor(
        public productId:string,
        public userId: string,
        public orderStatus: string
    ){}
}