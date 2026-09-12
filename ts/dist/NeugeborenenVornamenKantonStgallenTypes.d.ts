export interface Metadata {
    description?: string;
    label?: string;
    name?: string;
    type?: string;
}
export interface MetadataListMatch {
    description?: string;
    label?: string;
    name?: string;
    type?: string;
}
export interface RecordType {
    anzahl?: number;
    geschlecht?: string;
    geschlecht_label?: string;
    id?: string;
    jahr?: number;
    vorname?: string;
}
export interface RecordListMatch {
    group_by?: string;
    limit?: number;
    offset?: number;
    order_by?: string;
    refine_geschlecht?: string;
    refine_jahr?: number;
    refine_vorname?: string;
    select?: string;
    timezone?: string;
    where?: string;
}
