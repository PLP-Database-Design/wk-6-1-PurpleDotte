import '@testing-library/jest-dom';
import { render } from '@testing-library/react'; 
import { safeGetItem, safeSetItem } from '../utils/storage';
import { StoreProvider } from '../store/StoreProvider'; 

jest.mock('../utils/storage', () => ({
  safeGetItem: jest.fn(),
  safeSetItem: jest.fn(),
}));

describe('StoreProvider Initial Load and Save Checks', () => {
  const TestComponent = () => <div>Test</div>;

  beforeEach(() => {
    jest.clearAllMocks();

    safeGetItem.mockImplementation((key, fallback) => {
      if (key === 'app.user') return { role: 'test-user' };
      return fallback; 
    });

    safeSetItem.mockReturnValue(true); 
  });

  test('Provider correctly tries to load all storage keys when it starts', () => {
    render(<StoreProvider><TestComponent /></StoreProvider>);
    
    // Assert: safeGetItem should have been called 5 times for all the keys
    expect(safeGetItem).toHaveBeenCalledWith('app.cart', expect.any(Array));
    expect(safeGetItem).toHaveBeenCalledWith('app.orders', expect.any(Array));
    expect(safeGetItem).toHaveBeenCalledWith('app.coupons', expect.any(Array));
    expect(safeGetItem).toHaveBeenCalledWith('app.notifications', expect.any(Array));
    expect(safeGetItem).toHaveBeenCalledWith('app.user', { role: 'user' });     // Note: fallback check

    expect(safeGetItem).toHaveBeenCalledTimes(5);
  });

  test('Provider tries to save all initial state back to storage immediately', () => {
    render(<StoreProvider><TestComponent /></StoreProvider>);

    // Assert: safeSetItem should have been called 5 times for the initial save
    expect(safeSetItem).toHaveBeenCalledWith('app.cart', expect.any(Array));
    expect(safeSetItem).toHaveBeenCalledWith('app.user', { role: 'test-user' }); 
    expect(safeSetItem).toHaveBeenCalledTimes(5);
  });
  
  test('If safeSetItem fails for a key, the error is collected', () => {
    safeSetItem.mockImplementation((key, value) => {
      if (key === 'app.orders') return false; // Simulate storage error (Quota Exceeded)
      return true;
    });

    render(<StoreProvider><TestComponent /></StoreProvider>);

    // Assert
    expect(safeSetItem).toHaveBeenCalledWith('app.orders', expect.any(Array)); 
 
    expect(safeSetItem).toHaveBeenCalledTimes(5);
  });

});