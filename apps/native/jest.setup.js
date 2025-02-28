import React from 'react';

jest.mock('react-native-bootsplash', () => {
  return {
    hide: jest.fn().mockResolvedValue(),
    isVisible: jest.fn().mockResolvedValue(false),
    useHideAnimation: jest.fn().mockReturnValue({
      container: {},
      logo: {source: 0},
      brand: {source: 0},
    }),
  };
});

jest.mock('@callstack/repack/client', () => ({
  Federated: {
    importModule: jest.fn((container, module) => {
      if (container === 'auth') {
        const authMock = require('../../packages/auth/mocks/federated');
        return Promise.resolve(authMock.default(module));
      }
      if (container === 'booking') {
        const bookingMock = require('../../packages/booking/mocks/federated');
        return Promise.resolve(bookingMock.default(module));
      }
      throw new Error('jest.setup.js: unknown container: ' + container);
    }),
  },
}));
