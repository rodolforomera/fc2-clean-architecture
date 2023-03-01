export default interface ProductInterface {
    readonly id: string;
    readonly name: string;
    readonly price: number;
    
    changeName(name: string): void;
    changePrice(price: number): void;
    validate(): void;
}