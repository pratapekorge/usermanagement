import {Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {UserService} from "../user.service";
import {AppconstantService} from "../appconstant.service";
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
 import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
 import {UtilityService} from "../utility.service";


@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {
   id: any =''
  formData = {
    firstname: '',
    lastname:'',
    email:'',
    mobile:'',
    address:'',
    status: ''
  };
  emailRegex: string = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$'; // Regular expression for email validation
  mobileRegex: string = '^[0-9]{10}$';
  statusControl : any = new FormControl(1); // Default value is 'Active' (value: 1)
  stausvalues = [
    {label: 'Active', value: 1},
    {label: 'InActive', value: 0}
  ]
  @ViewChild('myForm') myForm!: NgForm;
  constructor(private route: ActivatedRoute,
              private userservice: UserService,
              private appconstant: AppconstantService,
              private router: Router,
              private snackBar: MatSnackBar,
              private utility: UtilityService


  ) {

  }

  ngOnInit(): void {

    this.route.params.subscribe((data)=>{
      this.id = data['id']
      console.log("data", data)
    })
    this.fetchuserById(this.id)

  }


  fetchuserById(id: any){


    this.userservice.getuserById(this.appconstant.getuserBYId + `?id=${id}`).subscribe((response)=>{

      console.log('response', response)
       this.formData = response.result[0]
      console.log(" this.formData", this.formData);
      this.statusControl = new FormControl(this.formData.status);


    })



  }

  showToast(message: string, duration: number = 1000) {
    const config = new MatSnackBarConfig();
    config.verticalPosition = 'top'; // Move the snack bar to the top
    config.horizontalPosition = 'end'; // Center the snack bar horizontally
     config.duration = duration; // Set the duration of the snack bar
    config.panelClass = ['custom-snackbar']; // Apply custom styling


    this.snackBar.open(message, 'Close', config);
  }


  submitForm(event:any) {
    console.log("event",event)
    this.myForm.form.markAllAsTouched(); // Mark all form controls as touched

    console.log(this.formData); // Handle form submission logic here
    if (this.myForm.form.valid) {
      console.log("Form is valid. Submitting...");
      console.log("this.formData33",this.formData)
      this.formData.status = this.statusControl.value

      this.userservice.updateUser(this.appconstant.updateuser, this.formData).subscribe((response)=>{

        if(response.status == 200){
          console.log("response3333", response.result)
          this.utility.showToast("user updated successfully")
          this.router.navigate(['/'])

        }

      })
      // Your form submission logic here
    } else {
      console.log("Form is invalid. Please fill in all required fields.");
    }
  }

}
