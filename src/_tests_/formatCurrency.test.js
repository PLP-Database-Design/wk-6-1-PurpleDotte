import { formatCurrency } from '../config/currency'; 

describe('Currency Formatting Function Test - Separators', () => {
    // Save and restore the environment variable
    const originalEnv = process.env.REACT_APP_CURRENCY;

    beforeEach(() => {
        // Clear environment before each test
        jest.resetModules(); 
        delete process.env.REACT_APP_CURRENCY; 
    });

    afterAll(() => {
        process.env.REACT_APP_CURRENCY = originalEnv;
    });

    test('should correctly include a comma thousand separator for USD amounts', () => {
        // Set the currency to USD
        process.env.REACT_APP_CURRENCY = 'USD';

        const { formatCurrency: formatUSD } = require('../config/currency');

        const result = formatUSD(12345.67);

        // Assert
        expect(result).toBe('$12,345.67'); 
    });

    test('should correctly include a comma thousand separator for NGN amounts', () => {
        // Set the currency to NGN
        process.env.REACT_APP_CURRENCY = 'NGN'; 

        const { formatCurrency: formatNGN } = require('../config/currency');

        const result = formatNGN(7500000.01);

        // Assert
        expect(result).toBe('₦7,500,000.01'); 
    });
    
    test('should correctly include a space thousand separator for ZAR amounts', () => {
        const { formatCurrency: formatZAR } = require('../config/currency');

        const result = formatZAR(4567.89);

        // Assert
        // Note: thousand separator for ZAR is a space and the cent separator is a comma (,)
        expect(result).toBe('R 4 567,89'); 
    });
});