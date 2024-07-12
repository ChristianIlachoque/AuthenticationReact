export const persistLocalStorageUser = (key, value) => {
    localStorage.setItem(key, JSON.stringify({ ...value }));
}
export const clearLocalStorage = (key) => {
    localStorage.removeItem(key);
}