package com.employees.employee;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * EmployeeRepository
 */
@Repository
public interface EmployeeRepository extends CrudRepository<EmployeeDTO, Integer> {

    
}