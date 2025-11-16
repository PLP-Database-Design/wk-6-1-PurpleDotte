import '@testing-library/jest-dom';

describe('Currency Utility Tests', () => {

  // Store the original environment variable so it can be restored later
  const originalEnv = process.env.REACT_APP_CURRENCY;

  // Restore the original environment variable after all tests are done
  afterAll(() => {
    process.env.REACT_APP_CURRENCY = originalEnv;
  });

  // Default Currency
  test('should default to ZAR when REACT_APP_CURRENCY is undefined or not supported', () => {
    delete process.env.REACT_APP_CURRENCY; 
    
    // Re-import the file *after* changing the env var 
    // for the APP_CURRENCY constant to update its value.
    const { APP_CURRENCY: updatedAppCurrency } = require('../config/currency');

    // Assert
    expect(updatedAppCurrency).toBe('ZAR');
  });

  test('should use NGN when REACT_APP_CURRENCY is set to NGN', () => {
    process.env.REACT_APP_CURRENCY = 'NGN';

    // Re-import to get the new value based on the set env var
    const { APP_CURRENCY: updatedAppCurrency } = require('../config/currency');

    // Assert
    expect(updatedAppCurrency).toBe('NGN');
  });

  // formatCurrency for NGN
  test('formatCurrency should correctly format an amount for NGN', () => {
    // Ensure APP_CURRENCY is set to NGN for this test
    process.env.REACT_APP_CURRENCY = 'NGN'; 
    
    const { formatCurrency: updatedFormatCurrency } = require('../config/currency');

    const amount = 5000.75;
    
    const formattedAmount = updatedFormatCurrency(amount);

    // Assert
    expect(formattedAmount).toBe('₦5,000.75');
  });

  // formatCurrency for ZAR (Default)
  test('formatCurrency should correctly format an amount for ZAR (South African Rand)', () => {
    // Ensure APP_CURRENCY defaults to ZAR
    delete process.env.REACT_APP_CURRENCY; 
    
    const { formatCurrency: updatedFormatCurrency } = require('../config/currency');

    const amount = 123.45;
    
    const formattedAmount = updatedFormatCurrency(amount);

    // Assert
    // Note: thousand separator for ZAR is a space and the cent separator is a comma (,)
    expect(formattedAmount).toBe('R 123,45'); 
  });
});