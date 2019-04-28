export interface IDBWebGL {
    _id: string;
    unmasked_vendor: string;
    unmasked_renderer: string;
}
export interface IDBBrowsers {
    _id: string;
    name: string;
    version: string;
}
export interface IDBMemory {
    _id: string;
    value: number;
}
export interface IDBHardwareConcurrency {
    _id: string;
    value: number;
}
export interface IDBLanguages {
    _id: string;
    language: string;
    dialect: string;
}
export interface IDBOS {
    _id: string;
    name: string;
    release: string;
    platform: string;
}
export interface IDBScreen {
    _id: string;
    width: number;
    height: number;
    label: string;
}
export interface IDBTimezone {
    countries: string[];
    name: string;
    offsetStr: string;
    utcOffset: number;
}
export interface IDBProxy {
    countries: string[];
    name: string;
    offsetStr: string;
    utcOffset: number;
}
export interface IComputersInfo {
    screen: IDBScreen[];
    os: IDBOS[];
    languages: IDBLanguages[];
    browsers: IDBBrowsers[];
    hardwareConcurrency: IDBHardwareConcurrency[];
    memory: IDBMemory[];
    webgl: IDBWebGL[];
}
