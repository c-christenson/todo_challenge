[![Build Status](https://travis-ci.org/c-christenson/todo_challenge.svg?branch=master)](https://travis-ci.org/c-christenson/todo_challenge)

###How to Run
`git clone https://github.com/c-christenson/todo_challenge.git`  
`cd todo_challenge`  
`bundle install`  

###How to Run Tests
`start node server: node server`  
`start selenium server: webdriver-manager start`  
`run protractor tests: protractor test/conf.js`  
`run karma tests: karma start test/karma.conf.js`  


###How to Run To-Do List
`start node server: node server`  
`open browser at address: localhost:8080`  

# Todo List User Stories

```
As a forgetful person
I want to store my tasks
So that I don't forget them

As a person with limited time
I want to instantly be able to update my todo list (adding entries)
So that I have more time to think about other things

As a person who actually gets stuff done
I want to mark my tasks as done
So that I don't do them twice

As a person who doesn't like counting by hand
I want to see a total number of tasks
So that I don't have to count

As someone who has done lots of stuff
I want to be able to clear my completed tasks
So I never see them again
```

Further Testing to Include:
* protractor testing for marking an item complete (strikethroughs in css)
* karma testing for deleting a task

Extensions to Include:

* Properly implement Travis CI
* Need to be able to change entries
* Need to be able to filer tasks by All, Active and Complete
* Deploy the app
* Use MongoDB for data storage


