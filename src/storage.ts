export const saveToStorage = (key: string, value: any) => localStorage.setItem(key, JSON.stringify(value));

export const loadFromStorage = <T>(key: string) => {
    const value = localStorage.getItem(key);
    if (value) {
        const rtnVal: T = JSON.parse(value);
        return rtnVal;
    } else {
        return undefined;
    }
}
export const removeStorage = (key: string) => localStorage.removeItem(key);
