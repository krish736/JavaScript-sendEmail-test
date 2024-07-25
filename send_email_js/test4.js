// ### Test Case 4: Email Validation
// **Description**: Test with an invalid email address.
import sendEmail from "./program1.js";

const cleanString = str => str.replace(/\s/g, '');

import { fail, strictEqual } from 'assert';

try {
    sendEmail(null, 'invalid-email', {}, '', []);
    fail('Test Case 4 Failed: No error thrown for invalid email');
  } catch (err) {
    strictEqual(err.message, 'Invalid email address', 'Test Case 4 Failed');
    console.log('Test Case 4 Passed');
  }