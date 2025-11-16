import '@testing-library/jest-dom';
import { toMinorUnits } from '../utils/paystack'; 

describe('toMinorUnits Function Tests', () => {
    test('should convert a whole amount to cents correctly', () => {
        const amount = 10;
        const expectedMinorAmount = 1000; // 10 * 100 cents

        const result = toMinorUnits(amount);

        // Assert
        expect(result).toBe(expectedMinorAmount);
    });

    test('should convert a standard decimal amount (1.23) to cents', () => {
        const amount = 1.23;
        const expectedMinorAmount = 123; // 123 cents

        const result = toMinorUnits(amount);

        // Assert
        expect(result).toBe(expectedMinorAmount);
    });

    test('should handle floating point inaccuracies like 0.1 + 0.2', () => {
        const amount = 0.33 + 0.01;
        const expectedMinorAmount = 34; //34 cents

        const result = toMinorUnits(amount);

        // Assert
        expect(result).toBe(expectedMinorAmount);
    });

    test('should round up correctly when the thousandth digit is 5 or more', () => {
        // 1.235 should round to 1.24
        const majorAmount = 1.235; 
        const expectedMinorAmount = 124; //124 cents

        const result = toMinorUnits(majorAmount);

        // Assert
        expect(result).toBe(expectedMinorAmount);
    });

    test('should round down correctly when the thousandth digit is less than 5', () => {
        // 1.234 should round to 1.23
        const amount = 1.234; 
        const expectedMinorAmount = 123; //123 cents

        const result = toMinorUnits(amount);

        // Assert
        expect(result).toBe(expectedMinorAmount);
    });
});