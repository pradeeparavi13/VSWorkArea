 package com.employees.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmployeeController {
     
    @Autowired
    private EmployeeService employeeSer;

    @RequestMapping(method=RequestMethod.POST, value = "/employee")
    public void addEmployee(@RequestBody EmployeeDTO emp ){
        System.out.println("u r in add emp");
        employeeSer.addEmployeeService(emp);
        
    }
    
}