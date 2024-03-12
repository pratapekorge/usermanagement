import {Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import {UserService} from "../user.service";
import {AppconstantService} from "../appconstant.service";
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import {UtilityService} from "../utility.service";


@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  formData : any = {
    firstname: '',
    lastname:'',
    email:'',
    mobile:'',
    address:'',
    status: ''
  };
  @ViewChild('myForm') myForm!: NgForm;
  emailRegex: string = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$'; // Regular expression for email validation
  mobileRegex: string = '^[0-9]{10}$';
  statusControl = new FormControl(1); // Default value is 'Active' (value: 1)

  stausvalues = [
    {label: 'Active', value: 1},
    {label: 'InActive', value: 0}
  ]

  constructor(private userservice: UserService,
              private appconstant: AppconstantService,
              private router: Router,
              private utility: UtilityService
              ) {

  }


  ngOnInit(): void {
  }

  submitForm(event:any) {
    this.myForm.form.markAllAsTouched(); // Mark all form controls as touched

    if (this.myForm.form.valid) {
      this.formData.status = this.statusControl.value;
      this.userservice.addUser(this.appconstant.createuser,this.formData).subscribe((response)=>{
        if(response.status== 200 && response.result){
          this.utility.showToast("user added successfully")
          this.router.navigate(['/'])
        }else{
          this.utility.showToast("api failing please check all configuration")

        }

      }
        ,(error)=>{

          this.utility.showToast("api failing please check all configuration")

        }
        )


      // Your form submission logic here
    } else {
      this.utility.showToast("Form is invalid. Please fill in all required fields.")

    }
  }

}
