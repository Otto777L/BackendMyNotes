export declare class Optional<T> {
    private value;
    private assign;
    constructor(v?: T);
    HasValue(): boolean;
    getValue(): T;
}
