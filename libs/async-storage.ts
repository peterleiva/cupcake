import AsyncStorage from '@react-native-async-storage/async-storage';

export async function save<T>(
  key: string,
  value: T | null | undefined,
): Promise<void> {
  if (value === null || value === undefined) {
    return;
  }

  await AsyncStorage.setItem(key, JSON.stringify(value));
}

export async function getValue<T>(key: string): Promise<T> {
  let result = await AsyncStorage.getItem(key);

  try {
    return result ? JSON.parse(result) : null;
  } catch (e) {
    console.error(e);
    throw new Error('Error parsing value for key: ' + key);
  }
}

export async function clearStorage(key: string): Promise<void> {
  await AsyncStorage.removeItem(key);
}
