import '@testing-library/jest-dom';
import { safeRemoveItem } from '../utils/storage'; 

const localStorageMockGenerator = (function() {
  let store = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => { store[key] = value.toString(); },
    removeItem: (key) => { delete store[key]; }, 
    clear: () => { store = {}; },
  };
});

const localStorageInstance = localStorageMockGenerator();

Object.defineProperty(window, 'localStorage', { value: localStorageInstance });

const originalRemoveItem = localStorageInstance.removeItem;


describe('safeRemoveItem Basic Tests', () => {
  beforeEach(() => {
    // Reset the stored data
    window.localStorage.clear();
    
    window.localStorage.removeItem = originalRemoveItem;
  });

  test('should return true and remove the item if it exists', () => {
    const key = 'temp_key_to_delete';
    window.localStorage.setItem(key, 'some value');
   
    // Assert
    expect(window.localStorage.getItem(key)).toBe('some value');

    const result = safeRemoveItem(key);

    // Assert
    expect(result).toBe(true);
    expect(window.localStorage.getItem(key)).toBeNull();
  });

  test('should return true even if the item does not exist (no error)', () => {
    const key = 'non_existent_key';
    const result = safeRemoveItem(key);

    // Assert
    expect(result).toBe(true);
  });

  test('should return false if localStorage.removeItem throws an unexpected error', () => {
    window.localStorage.removeItem = jest.fn(() => {
      throw new Error('Fake Security Error');
    });

    const key = 'key_that_causes_error';
    const result = safeRemoveItem(key);

    // Assert
    expect(result).toBe(false);
    expect(window.localStorage.removeItem).toHaveBeenCalledWith(key);
  });
});