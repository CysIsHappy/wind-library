declare class Storage {
    private storage;
    constructor(storage: globalThis.Storage);
    get(key: string): any;
    set(key: string, value: any): this;
    remove(key: string): this;
    clear(): this;
    getAll(): any;
    forEach(cb: (key: string, value?: any) => void): void;
}
declare const storage: {
    local: Storage | null;
    session: Storage | null;
};
export default storage;
