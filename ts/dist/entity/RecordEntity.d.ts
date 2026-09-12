import { NeugeborenenVornamenKantonStgallenEntityBase } from '../NeugeborenenVornamenKantonStgallenEntityBase';
import type { NeugeborenenVornamenKantonStgallenSDK } from '../NeugeborenenVornamenKantonStgallenSDK';
import type { Control } from '../types';
import type { RecordType, RecordListMatch } from '../NeugeborenenVornamenKantonStgallenTypes';
declare class RecordEntity extends NeugeborenenVornamenKantonStgallenEntityBase<RecordType> {
    constructor(client: NeugeborenenVornamenKantonStgallenSDK, entopts: any);
    make(this: RecordEntity): RecordEntity;
    list(this: any, reqmatch?: RecordListMatch, ctrl?: Control): Promise<RecordEntity[]>;
}
export { RecordEntity };
