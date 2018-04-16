export default class LocalStorage {
  constructor() {
    this.store = {};
  }

  setItem(key, string) {
    this.store[key] = value.toString();
  }

  getItem(key) {
    return this.store[key];
  }

  clear() {
    this.store = {};
  }

  removeItem(key){
    delete this.store[key];
  }

  key(nKeyId) {
    return unescape(document.cookie.replace(/\s*\=(?:.(?!;))*$/, "").split(/\s*\=(?:[^;](?!;))*[^;]?;\s*/)[nKeyId]);
  }
}