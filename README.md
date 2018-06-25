# Replenisher-task-list

Developed a MEAN stack application to track statuses of tasks

STACK used:

MongoDB

Express

AngularJS

NodeJS

# Description:

-> This application has a form that allows user to add new tasks by providing details of the task such as:
   Task title, Priority of the task, Estimated time to finsih the task, Individual assigned to the task, 
   Notes regarding the task.
   
-> The application allows the user to update status of the task by entering the amount of task finished in the progress field 
   of the table, which will be updated in the database on clicking update status. 
   
-> The tasks are sorted first on their status, second on their priority.

-> The status of a task is the percentage of task completed. 

-> Used a cloud based MongoDB database hosted by mlab. 


To run the project:

1. Download and install Node.js from https://nodejs.org/en/download/ 
2. Download the project. 
3. In command line move to the project directory and install node package manager by running the following command:
   $ npm install
   
4. Start the express server using the following command:
   $ node server.js
   
5. Run the application using index.html inside the client folder. Open index.html in chrome to avoid cross browser issues. 
6. Add tasks and update tasks. The log of http get,put,post calls can be viewed in the command prompt. 



   
