import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from "../user.service";
import {AppconstantService} from "../appconstant.service";

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})

export class UserlistComponent implements OnInit {
  public userlist :any = [
    // {
    //   id: 1, firstname:"prakash", lastname: 'barme',  email: 'prakash@gmail.com',  address: 'gajanan nagar', task: 'site task',
    // },
    // {
    //   id: 2, firstname:"sagar", lastname: 'kanke',  email: 'sagar@gmail.com',  address: 'gajanan nagar', task: 'site task',
    // },
    // {
    //   id: 3, firstname:"mahesh", lastname: 'survase',  email: 'mahesh@gmail.com',  address: 'gajanan nagar', task: 'site task',
    // },
    // {
    //   id: 4, firstname:"datta", lastname: 'malchime',  email: 'datta@gmail.com',  address: 'gajanan nagar', task: 'site task',
    // },
    // {
    //   id: 5, firstname:"dhanaji", lastname: 'sutar',  email: 'prakash@gmail.com',  address: 'gajanan nagar', task: 'site task',
    // },
    // {
    //   id: 6, firstname:"yogesh", lastname: 'barme',  email: 'prakash@gmail.com',  address: 'gajanan nagar', task: 'site task',
    // },
    // {
    //   id: 7, firstname:"ramesh", lastname: 'barme',  email: 'ramesh@gmail.com',  address: 'gajanan nagar', task: 'site task',
    // },
    // {
    //   id: 8, firstname:"prakash", lastname: 'barme',  email: 'prakash@gmail.com',  address: 'gajanan nagar', task: 'site task',
    // }


  ]

  constructor(private router: Router,
              private userservice: UserService,
              private appconstant: AppconstantService
              ) { }

  ngOnInit(): void {
    console.log("ngonit")
this.fetchUserList()
  }

  fetchUserList(){

    let postData = {}
    this.userservice.getUsers(this.appconstant.getuserList, postData).subscribe((response)=>{
      console.log("result", response.result)
       this.userlist =  response.result

    })


  }

   edit(item: any){
      this.router.navigate([`/user-update`, item.id])

  }

  adduser(){
    this.router.navigate(['/user-add'])
  }


}
