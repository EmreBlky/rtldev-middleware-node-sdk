import { Column } from "./column";
import { Record } from "./record";
import { ResponseTemplate } from "./responsetemplate";
export declare class Response extends ResponseTemplate {
    private command;
    private columnkeys;
    private columns;
    private recordIndex;
    private records;
    constructor(raw: string, cmd: any);
    addColumn(key: string, data: string[]): this;
    addRecord(h: any): Response;
    getColumn(key: string): Column | null;
    getColumnIndex(colkey: string, index: number): string | null;
    getColumnKeys(): string[];
    getColumns(): Column[];
    getCommand(): any;
    getCurrentPageNumber(): number | null;
    getCurrentRecord(): Record | null;
    getFirstRecordIndex(): number | null;
    getLastRecordIndex(): number | null;
    getListHash(): any;
    getNextRecord(): Record | null;
    getNextPageNumber(): number | null;
    getNumberOfPages(): number;
    getPagination(): any;
    getPreviousPageNumber(): number | null;
    getPreviousRecord(): Record | null;
    getRecord(idx: number): Record | null;
    getRecords(): Record[];
    getRecordsCount(): number;
    getRecordsTotalCount(): number;
    getRecordsLimitation(): number;
    hasNextPage(): boolean;
    hasPreviousPage(): boolean;
    rewindRecordList(): Response;
    private hasColumn;
    private hasCurrentRecord;
    private hasNextRecord;
    private hasPreviousRecord;
}