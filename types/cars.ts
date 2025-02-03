

export interface Car {
    _id : string;
    name : string;
    _type : "car";
    image? : {
       asset : {
        _ref : string;
        _type : "image";
       }
    };
    price : number;
    description?: string;
    carName?: string;
}