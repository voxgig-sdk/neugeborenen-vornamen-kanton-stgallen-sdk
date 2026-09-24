"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NeugeborenenVornamenKantonStgallenError = void 0;
class NeugeborenenVornamenKantonStgallenError extends Error {
    isNeugeborenenVornamenKantonStgallenError = true;
    sdk = 'NeugeborenenVornamenKantonStgallen';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.NeugeborenenVornamenKantonStgallenError = NeugeborenenVornamenKantonStgallenError;
//# sourceMappingURL=NeugeborenenVornamenKantonStgallenError.js.map