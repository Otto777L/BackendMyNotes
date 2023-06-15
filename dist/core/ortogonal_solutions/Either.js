"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Either = void 0;
class Either {
    constructor(value, left) {
        this.value = value;
        this.left = left;
    }
    isLeft() {
        return this.left;
    }
    getLeft() {
        if (!this.isLeft())
            throw new Error();
        return this.value;
    }
    isRight() {
        return !this.left;
    }
    getRight() {
        if (!this.isRight())
            throw new Error();
        return this.value;
    }
    static makeLeft(value) {
        return new Either(value, true);
    }
    static makeRight(value) {
        return new Either(value, false);
    }
}
exports.Either = Either;
//# sourceMappingURL=Either.js.map