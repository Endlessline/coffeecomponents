import {IFillable} from "../interfaces/IFillable";

class Cup implements IFillable {
    
    getMaterial<Type>(material: Type): Type {
        throw new Error("Method not implemented.");
    }

    public capacity = 431;
    public hasLid = true;


}