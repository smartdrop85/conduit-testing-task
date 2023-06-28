How to run the tests:

1. run  ``` npm install ```  to install dependencies
2. The project is using Cypress 9.7 as known stable version to avoid compatibility issues
3. To start Cypress and run tests from it's UI, use  ``` npm run cy:open```
4. To run all the tests in default chrome headless mode, use  ``` npm run cy:run```
5. To run all the tests in Chrome headless mode, mobile viewport, use  ``` npm run cy:run:mobile```
6. To run all the tests in Chrome headless desktop viewport, use  ``` npm run cy:run:desktop```
7. In case of failure, Cypress with generate a SS and put it in the Screenshots folder.


NB:
Some improvements can be done for Change email and Change Password tests to avoid the need to login again to verify the results,
but I have decided to leave it as is as an example for some workarounds.
Also, there are no tests for email and other fields validation since it simply does not exist on the site under test - it accepts any input as an email without any validation.