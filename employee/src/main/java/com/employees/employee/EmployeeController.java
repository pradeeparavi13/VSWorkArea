package com.employees.employee;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/emp")
public class EmployeeController{


    /**
     *
     */

    
    @Autowired
    private EmployeeService employeeService;


	@RequestMapping("/employees/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public EmployeeDTO getEmployee(@PathVariable Integer id) {
		return employeeService.getEmployee(id);
		
	}

	@RequestMapping(method = RequestMethod.POST, value="/employees")
	@CrossOrigin(origins = "http://localhost:4200")
	public void addEmployee(@RequestBody EmployeeDTO employee) {
		employeeService.addEmployee(employee);
	}
	
	@RequestMapping(method = RequestMethod.PUT, value="/employees")
	@CrossOrigin(origins = "http://localhost:4200")
	public void updateEmployee(@RequestBody EmployeeDTO employee) {
		employeeService.updateEmployee(employee);
		
	}
	
	@RequestMapping(method = RequestMethod.DELETE, value="/employees/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public void deleteEmployee( @PathVariable String id) {
		employeeService.deleteEmployee(Integer.parseInt(id));
	}

}