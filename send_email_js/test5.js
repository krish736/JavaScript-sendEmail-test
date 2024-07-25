// ### Test Case 5: Attachment Validation
// **Description**: Test with an invalid attachment path.
import sendEmail from "./program1.js";

const cleanString = str => str.replace(/\s/g, '');

import { fail, strictEqual } from 'assert';

const templateCode4 = '<html><body>Test</body></html>';
const contextData4 = {};

try {
  sendEmail(null, 'john.doe@example.com', contextData4, templateCode4, ['/invalid/path.jpg']);
  fail('Test Case 5 Failed: No error thrown for invalid attachment path');
} catch (err) {
  strictEqual(err.message, 'Attachment file not found: /invalid/path.jpg', 'Test Case 5 Failed');
  console.log('Test Case 5 Passed');
}