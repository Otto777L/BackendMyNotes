export declare class Either<TLeft, TRight> {
    private readonly value;
    private readonly left;
    private constructor();
    isLeft(): boolean;
    getLeft(): TLeft;
    isRight(): boolean;
    getRight(): TRight;
    static makeLeft<TLeft, TRight>(value: TLeft): Either<TLeft, TRight>;
    static makeRight<TLeft, TRight>(value: TRight): Either<TLeft, TRight>;
}
