package com.employees.employee;

import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class EmployeeNotFoException extends RuntimeException {

    private static final long serialVersionUID = 4683139471167159369L;

    public EmployeeNotFoException(String str) {
        super(str);
    }

}