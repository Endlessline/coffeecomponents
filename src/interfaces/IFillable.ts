export interface IFillable {
    readonly capacity: number;
    getMaterial<Type>(material: Type): Type;
    hasLid: Boolean;
}