import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm, NgControl } from '@angular/forms';
//import { read } from 'fs';
//import {HttpClient} from '@angular/common/http';
//import { EmployeeServiceService } from './employee-service.service';
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHeaders, HttpErrorResponse,HttpParams } from '@angular/common/http';
import { Observable, of, from, empty } from 'rxjs';
import { map, catchError, tap, retry } from 'rxjs/operators';
import {Employee} from './employee';
import {Router} from '@angular/router';
// import * as _ from 'lodash';
// import { $ } from 'protractor';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  
})
export class AppComponent {
  
  public errorClass = "";
  public btName="Create";
  public btRead1=true;
  public btRead=false;
  public lblBtChange = "Create New Employee";
  public employeeId = 0;


  employee:Employee[];
  emp:Employee= new Employee ();

  id:number;
 // form-group:NgClass;// = "form-control ng-untouched ng-pristine ng-invalid";
  //NgClass.

  tt:any;
  error: any;
  
  constructor(private http : HttpClient, private router: Router){}


apiURL : string ='http://localhost:8080/emp/';

getEmployee(){

  this.id = this.emp.empID;

  console.log("=====>>> >>>>> >>>>"+this.id); 
if(this.id > 0){
  this.getUserById()
      .subscribe( data => {
        this.emp = data;
      });
    }
    }

    // The actions called during create,update and delete
    SubmitEmployee(formv: NgForm){

      if(formv.form.valid){

      if(this.btName=="Create"){ //To call the below  create user method
        console.log("=========== Create an Employee =================")
        //this.createUser();
        this.createUser().subscribe( data => {
            console.log(data);});

      }else if(this.btName=="Update"){ //To call the below  update user method
        console.log("=========== Update an Employee =================")
        this.updateUser().subscribe( data => {
          console.log(data);
        });

      }else if(this.btName=="Delete"){  //To call the below  delete user method
        console.log("=========== Delete an Employee =================")
        this.deleteUser().subscribe( data => {
          console.log(data);
        });

      }else {
        console.log("Please check it, some thing went wrong")
      }

      alert('you have '+this.btName+' an Employee!! :-)\n\n')

      this.onSubmitClear(formv);
    }
    else{
    this.markFormGroupTouched(formv)
    }

    }

//To call the localhost:8080/emp/employees/?empID for fetching the employee
getUserById(): Observable<Employee> {
  return this.http.get<Employee>(this.apiURL+"employees/"+this.id);
}
//To call the localhost:8080/emp/employees for create new employee
createUser(): Observable<Employee> {
  console.log(this.apiURL+"employees")
  console.log(this.emp)
  return this.http.post<Employee>(this.apiURL+"employees", this.emp);
}

//To call the localhost:8080/emp/employees for update the employee
updateUser(): Observable<Employee> {
  console.log(this.apiURL+"employees")
  console.log(this.emp)
  return this.http.put<Employee>(this.apiURL+"employees", this.emp);
}

//To call the localhost:8080/emp/employees/?empID for delete the employee
deleteUser(): Observable<Employee> {
  return this.http.delete<Employee>(this.apiURL+"employees/"+this.emp.empID);
}

//clear the form for each every action complete
onSubmitClear(formv: NgForm){

  if(formv != null)
    formv.reset();

    this.emp = new Employee();
}
//using the below method will hidden the Read button when click the create button 
  changeBtName(value: string, formv: NgForm){
    
   this.onSubmitClear(formv);

    if(value=="Read")
    {
      this.btRead1 = false; 
      this.btRead = true;   
    }
    else if(value=="Create"){
      this.btRead1 = true; 
      this.btRead = false;
    }
    else{
      this.btRead1 =true;
      this.btRead = true;
    }
    this.btName = value;

    //For label of action name changes while click the create,read,update,delete buttons during the runtime
    if(value=="Create")
    this.lblBtChange = 'Create New Employee';
    else if(value=="Read")
    this.lblBtChange = 'Read Existing Employee';
    else if(value=="Update")
    this.lblBtChange = 'Update Exisiting Employee';
    else if(value=="Delete")
    this.lblBtChange = 'Delete Existiing Employee';
  }

  log(x){
    console.log(x);
  }

  // to show up error on untouched the invalid fields by marking all as touched
  markFormGroupTouched(ngFrom: NgForm) {
    (<any>Object).values(ngFrom.controls).forEach(control => {
      control.markAsTouched();

      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }
  
  // onSubmit() {
  //   //console.log(this.form.value);
  // }

}
