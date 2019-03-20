# VSWorkArea
Project

Employee Management System

 For this project   we required
1.	Angular 7
2.	Spring Boot +jpa
3.	Mysql

Angular 7:
	I have created a single component for employee project
it created below module, component ts, css and html
1.	app.module.ts
2.	app.component.ts
3.	app.component.html
4.	app.component.css
5.	employee.ts (employee class)

In this we have four functionalities as CRUD operation for employee.
I.	Create
II.	Read
III.	Update
IV.	Delete


1.	Create:

To create an employee. There are five fields which are mandatory. For all the fields validation is done with template driven form validation. Which is provided by angular for simple application. Fields are done special validation accordingly, Only alphabets for the first and last name. Only numbers for the phone.
Onclick of Create button, all field’s will be validated. if it is valid. 
Need to call the http client to Post the Employee class to the URL : localhost:8080/emp/employees.
Once it done successfully, shows a Success message and reset the values.

2.	Read:

For every employee there is a unique employee id. For Read or get details of the employee, id is mandatory. Suppose we have entered employee id as 3, Onclick of read. Through http client get method URL: localhost:8080/emp/employees/3 the employee details will be fetched as single employee object and populated in the html fields. This is easily achieved by the angular two-way binding [()].

3.	Update, Similar to Create it use the same URL but PUT method
4.	Delete, Similar to Read it use the same URL but Delete method.

2.Spring Boot:

    Created spring boot application with jpa and mysql connector.
We have created four functionalities as we needed for angular. Please find the below spring boot object
1.	class EmployeeDTO (which is acting as entity)
2.	class EmployeeController
3.	class EmployeeService
4.	EmployeeRepository (which is acting as Crud Repository)


We need to fill the mysql connection like as below
spring.jpa.hibernate.ddl-auto=create/update
spring.datasource.url=jdbc:mysql://localhost:port/DB name
spring.datasource.username=
spring.datasource.password=

EmployeeDTO this an entity where table name as employee. empID is the primary key as auto generated integer. Employee Controller calls the service based on the functionality. Employee Service implemented the Employee Repository, the spring inbuilt data CURD repository. This has utility to create, update, read and delete method.
Controller has below methods for this project
1.	Create Post method => http://localhost:8080/emp/employees
{"empID":5,"firstName":"nani","lastName":"inba","email":"inba@gmail.com","phoneNo":"2312323242","gender":"male"}
2.	Read Get method => http://localhost:8080/emp/employees/{id} 
3.	Update Put method => http://localhost:8080/emp/employees
{"empID":5,"firstName":"nani","lastName":"inba","email":"inba@gmail.com","phoneNo":"1236547899","gender":"male"}
4.	Delete uses Delete method => http://localhost:8080/emp/employees/{id}

Note: as it is an Sample code, I have added console log


