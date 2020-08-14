import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..'

afterEach(cleanup)

describe('Contact component', () => {
    // baseline to verify that the component is rendering
    it('renders', () => {
      render(<Contact />);
    });

    // Second Test
      })
})