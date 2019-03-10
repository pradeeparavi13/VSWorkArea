package com.employees.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * employeeService
 */
@Service
public class EmployeeService {

    @Autowired
    public EmployeeRepository employeeRepository;


	public void addEmployeeService(EmployeeDTO emp) {

        employeeRepository.save(emp);

	}


    
}