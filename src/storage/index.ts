class Storage {
  private storage: globalThis.Storage;
  constructor(storage: globalThis.Storage) {
    this.storage = storage;
  }
  get(key: string) {
    const value = this.storage.getItem(key);
    if (value) {
      return deSerialize(value);
    }
    return null;
  }
  set(key: string, value: any) {
    this.storage.setItem(key, serialize(value));
    return this;
  }
  remove(key: string) {
    this.storage.removeItem(key);
    return this;
  }
  clear() {
    this.storage.clear();
    return this;
  }
  getAll() {
    const result = {} as any;
    this.forEach((key: string, value: any) => {
      if (key) {
        result[key] = value;
      }
    });
    return result;
  }
  forEach(cb: (key: string, value?: any) => void) {
    for (let i = 0; i < this.storage.length; i++) {
      const key: string | null = this.storage.key(i);
      if (key) {
        const value: any = this.get(key);
        cb(key, value);
      }
    }
  }
}

function serialize(val: any): string {
  return JSON.stringify(val);
}

function deSerialize(val?: string | null) {
  if (typeof val !== 'string') return undefined;
  try {
    return JSON.parse(val);
  } catch {
    return val;
  }
}

function createStorage(type: number) {
  if (typeof window === 'undefined') {
    throw new Error('storage must be web environment!');
  }
  if (type === 1) {
    return new Storage(window.localStorage);
  }
  return new Storage(window.sessionStorage);
}

const storage = {
  local: createStorage(1),
  session: createStorage(2),
};

export default storage;
