import { NeugeborenenVornamenKantonStgallenEntityBase } from '../NeugeborenenVornamenKantonStgallenEntityBase';
import type { NeugeborenenVornamenKantonStgallenSDK } from '../NeugeborenenVornamenKantonStgallenSDK';
import type { Control } from '../types';
import type { Metadata, MetadataListMatch } from '../NeugeborenenVornamenKantonStgallenTypes';
declare class MetadataEntity extends NeugeborenenVornamenKantonStgallenEntityBase<Metadata> {
    constructor(client: NeugeborenenVornamenKantonStgallenSDK, entopts: any);
    make(this: MetadataEntity): MetadataEntity;
    list(this: any, reqmatch?: MetadataListMatch, ctrl?: Control): Promise<MetadataEntity[]>;
}
export { MetadataEntity };
