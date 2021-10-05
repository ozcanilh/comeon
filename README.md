# Automation Approach

## Required npm
cypress-xpath: using for xpath selector
cypress-mochawesome-reporter: for generate html report

## Framework approach
Framework is created using pageobject model below is the folder structure

* support: a few helper methods to make working a bit easier
* page-objects: each file in this folder represents a page/section on web application and has all the elements and actions related to the page
* integration: test cases are available in this folder

## Running tests
* You can start the test by selecting the below parameter you need.
  * npm run cypress:open - Opens the test runner then you should select the browser and test case
  * npm run test:desktop - Execute the test in Desktop size
  * npm run test:mobile - Execute the test in Mobile size
