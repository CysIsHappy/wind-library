import Storage from '../src/storage';
describe('test session Storage', () => {
  const sessionStorage = Storage.session;
  it('session set & get', async () => {
    await sessionStorage.set('wanghaoyu', 'wanghaoyu');
    const value = sessionStorage.get('wanghaoyu');
    expect(value).toEqual('wanghaoyu');
    sessionStorage.clear();
    await sessionStorage.set('nameObj', { name: 'wanghaoyu' });
    const nameObj = sessionStorage.get('nameObj');
    expect(nameObj).toEqual({ name: 'wanghaoyu' });
    sessionStorage.clear();
    expect(sessionStorage.getAll()).toEqual({});
  });
  it('session remove', async () => {
    sessionStorage.set('name', 'wanghaoyu');
    const result = await sessionStorage.remove('name');
    const name = result.get('name');
    expect(name).toEqual(null);
  });
  it('session getAll', async () => {
    await sessionStorage.set('key1', 'value1');
    await sessionStorage.set('key2', 'value2');
    const value = sessionStorage.getAll();
    expect(value).toEqual({
      key1: 'value1',
      key2: 'value2',
    });
  });
});

describe('test local Storage', () => {
  const localStorage = Storage.local;
  it('local set & get', async () => {
    await localStorage.set('wanghaoyu', 'wanghaoyu');
    const value = localStorage.get('wanghaoyu');
    expect(value).toEqual('wanghaoyu');
    localStorage.clear();
    expect(localStorage.getAll()).toEqual({});
  });
  it('local remove', async () => {
    localStorage.set('name', 'wanghaoyu');
    const result = await localStorage.remove('name');
    const name = result.get('name');
    expect(name).toEqual(null);
  });
  it('local getAll', async () => {
    await localStorage.set('key1', 'value');
    await localStorage.set('key2', 'value2');
    const value = localStorage.getAll();
    expect(value).toEqual({
      key1: 'value',
      key2: 'value2',
    });
  });
});
