import '@testing-library/jest-dom';
import { startPayment } from '../services/CheckoutService'; 

jest.mock('../utils/paystack', () => ({
  initializePaystackPayment: jest.fn()
}));

// Import the mocked 
import { initializePaystackPayment } from '../utils/paystack';

//Test Data
const mockItem = {
  book: { id: 101, title: 'The Test Book', price: 5000 },
  quantity: 1
};
const mockEmail = 'test@example.com';
const mockReference = 'TEST_REF_123';
const mockVerificationData = { status: 'success', message: 'Payment verified' };

describe('startPayment', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should throw an error if no items are provided', async () => {
    const items = []; 
    
    // Assert
    await expect(startPayment({ items, email: mockEmail }))
      .rejects
      .toThrow('No items to pay for');
      
    // Check that the payment initializer was NOT called
    expect(initializePaystackPayment).not.toHaveBeenCalled();
  });

  test('should call initializePaystackPayment with the correct book and callbacks', async () => {
    // 1. Arrange (Set up the success callback)
    const mockOnSuccess = jest.fn();
    const mockOnCancel = jest.fn();

    initializePaystackPayment.mockResolvedValue(true); 

    await startPayment({ 
      items: [mockItem], 
      email: mockEmail,
      onSuccess: mockOnSuccess,
      onCancel: mockOnCancel 
    });

    // Assert
    expect(initializePaystackPayment).toHaveBeenCalledWith(
      mockItem.book,
      mockEmail,
      
      expect.any(Function), 

      mockOnCancel,
      
      { currency: 'ZAR' } 
    );
  });
});