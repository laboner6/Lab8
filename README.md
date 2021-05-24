# Lab8_Starter

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)<br>
Ans: 1

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.<br>
   Ans: No. As we can see, the "message" test is composed of at least two components, which are "write" and "send". It would make more sense to test those individual part instead of testing them as a whole with unit test.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters <br>
   Ans: Yes. The "max message length" is feature that focues specifically on a particular small thing, and it doesn't need to interact with many of other parts of the program. So it would really make sense to use unit test for it.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?<br>
   Ans: It is set to true, it will run the tests without a browser UI.

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?

