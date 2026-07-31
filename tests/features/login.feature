  
Feature: playwright_cucumber

Background: 
Given open the firefox driver
And navigate the application url
Scenario: valid login functionality

When enter username 
|Ajitha|
And enter password 
|Ajitha|
And click on Login 


Scenario: invalid login functionality

When enter username 
|Ajitha|
And enter password 
|Ajitha45|
And click on Login 

Then verify welcome page 
When click on logout
When close the browser
