package com.employees.employee;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {

    @Autowired
    EmployeeRepository employeeRepository;

    public EmployeeDTO getEmployee(int id) {
        EmployeeDTO obj = null;
        try {
            System.out.println("EmployeeService.getEmployee(id) invoked " + id);
             obj = employeeRepository.findById(id).get();
               
        } catch (Exception e) {
            throw new EmployeeNotFoException(e.getMessage());

        }
        
        return obj; 
    }

    public void addEmployee(EmployeeDTO employee) {
        System.out.println("EmployeeService.addEmployee() invoked " + employee);
        employeeRepository.save(employee);
    }

    public void updateEmployee(EmployeeDTO employee) {
        System.out.println("EmployeeService.updateEmployee() invoked " + employee);
        employeeRepository.save(employee);

    }

    public void deleteEmployee(int id) {
        
        try {
            System.out.println("EmployeeService.deleteEmployee() invoked " + id);
            employeeRepository.deleteById(id);
               
        } catch (Exception e) {
            throw new EmployeeNotFoException(e.getMessage());

        }


    }

}