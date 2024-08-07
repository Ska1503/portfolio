export const setStorageValue = (key: string, value: string): void =>
  localStorage.setItem(key, value)

export const getStorageValue = (key: string): string | null => localStorage.getItem(key)

export const removeStorageValue = (key: string): void => localStorage.removeItem(key)
