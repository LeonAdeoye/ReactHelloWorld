// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// src/setupTests.js
import { server } from './mocks/server'
// Establish API mocking before all tests.
beforeAll(() => server.listen())

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())

// Clean up after the tests are finished.
afterAll(() => server.close())

// You need to add the following to the package.json file:
//   "jest": {
//     "moduleNameMapper": {
//       "axios": "axios/dist/node/axios.cjs"
//     }
//   },
// Otherwise you will get an error:
// syntaxError: Cannot use import statement outside a module 1 | import React, {Component} from 'react'; > 2 | import axios from "axios";
// SEE https://stackoverflow.com/questions/73958968/cannot-use-import-statement-outside-a-module-with-axios
