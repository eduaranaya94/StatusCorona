export interface Status {
    country?: string;
    last_update?: Date;
    cases: number;
    deaths: number;
    recovered: number;
}