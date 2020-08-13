import React from 'react';

// "renders" the component. Jest creates a simulated DOM in a Node.js environment 
// to approximate the DOM (no component is actually visibly rendered).
// The cleanup function is used to remove components from the DOM to prevent memory 
// leaking, as well as variable or data collisions between tests that could corrupt test results.
import { render, cleanup } from '@testing-library/react';

// jest-dom offers access to custom matchers that are used to test DOM elements
import '@testing-library/jest-dom/extend-expect';

// import the component we will be testing
import About from '..';

// Configure the testing environment by adding a utility function to keep things clean.
// This will ensure that after each test, we won't have any leftover memory data that could 
// give us false results.
afterEach(cleanup);

// describe function to declare the component we're testing
describe('About component', () => {
    // First test will be the baseline to verify that the component is rendering.
    it('renders', () => {
      render(<About />);
    });
  
    // Second Test
    it('matches snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
      })
})