import '@testing-library/jest-dom';
import { safeGetItem } from '../utils/storage'; 

// local storage
const localStorageMock = (function() {
  let store = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => { store[key] = value.toString(); },
    clear: () => { store = {}; },
  };
});

Object.defineProperty(window, 'localStorage', { value: localStorageMock() });

describe('safeGetItem Basic Tests', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  test('should return the parsed object when a valid item exists', () => {
    const key = 'user_data';
    const mockObject = { name: '1984', price: 14.99 };
    window.localStorage.setItem(key, JSON.stringify(mockObject));

    const result = safeGetItem(key, { fallback: 'value' }); 

    // Assert
    expect(result).toEqual(mockObject);
  });

  test('should return the fallback value when the key does not exist', () => {
    const key = 'non_existent_key';
    const fallbackValue = 'default_settings';

    const result = safeGetItem(key, fallbackValue);

    // Assert
    expect(result).toBe(fallbackValue);
  });

  test('should return the fallback when the stored data is corrupted (invalid JSON)', () => {
    const key = 'corrupt_data';
    window.localStorage.setItem(key, 'this is not valid json');
    const fallbackValue = { data: 'clean' };

    const result = safeGetItem(key, fallbackValue);

    // Assert
    expect(result).toEqual(fallbackValue);
  });
});