import '@testing-library/jest-dom';
import { safeSetItem } from '../utils/storage'; 

// Mock local storage
const localStorageMock = (function() {
  let store = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    removeItem: (key) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    }
  };
})();

// Replace the real localStorage with mock
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('safeSetItem basic tests', () => {
  // Clear the mock storage before each test
  beforeEach(() => {
    window.localStorage.clear();
    // Reset setItem to the default mock function
    window.localStorage.setItem = localStorageMock.setItem;
  });

  test('should return true and save the item when everything works', () => {
    const key = 'Book Name';
    const value = { theme: 'dark', notifications: true };
    
    const result = safeSetItem(key, value);

    // Assert
    expect(result).toBe(true);
    
    const storedValue = window.localStorage.getItem(key);
    expect(storedValue).toBe(JSON.stringify(value));
  });

  // 
  test('should return false when localStorage.setItem throws an error (e.g., Quota Exceeded)', () => {

    window.localStorage.setItem = () => {
      throw new Error('Fake Quota Error');
    };

    const key = 'large_file';
    const value = 'A really long string that causes problems.';
    
    const result = safeSetItem(key, value);

    // Assert
    expect(result).toBe(false);
    
    // Optional check: Make sure nothing was actually saved
    expect(window.localStorage.getItem(key)).toBeNull();
  });
});