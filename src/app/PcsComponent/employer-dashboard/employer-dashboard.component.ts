import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { logindetails } from 'src/app/logindetails';
import { Skills } from 'src/app/Model/Skills';
import { LoginServiceService } from 'src/app/Service/login-service.service';
import { UserdetailsService } from 'src/app/Service/userdetails.service';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
  selector: 'app-employer-dashboard',
  templateUrl: './employer-dashboard.component.html',
  styleUrls: ['./employer-dashboard.component.css']
})
export class EmployerDashboardComponent implements OnInit {

  skills: any = [];
  skillsname: any = ""
  search: any;
  username: logindetails = new logindetails; 
 


  constructor(private loginservice:LoginServiceService,private userdetailservice: UserdetailsService, private user: UserDetailsComponent, private route: Router) { }

  ngOnInit(): void {
    this.getDetails();
    this.username = this.loginservice.getUser();
    console.log(this.username)
  }

  employeedetails: any
  filterdetails: any

  getDetails() {

    this.userdetailservice.getallEmployee().subscribe(data => {

       this.employeedetails = data
       this.filterdetails=data
      console.log(this.employeedetails);
      for (let i = 0; i < this.employeedetails.length; i++) {
        for (let j = 0; j < this.employeedetails[i].skills.length; j++) {
          this.skillsname += this.employeedetails[i].skills[j].stitle + ', ';
        }
        this.skills.push(this.skillsname);
        this.skillsname = "";
      }
    },
      error => {
        console.log(error);
      }
    )
  }


  showDetails(employee: any) {

    this.skills=[]
    let id = employee.id
    this.route.navigate(['/user'], { queryParams: { id } });
    console.log(employee.id)
  }

  onSearch() {

    let temp:any[]=[]
    this.skillsname=''
    this.skills=[]

    for (let i = 0; i < this.filterdetails.length; i++) {
      for (let j = 0; j < this.filterdetails[i].skills.length; j++) {
               if(  (this.filterdetails[i].skills[j].stitle).toLowerCase()==(this.search).toLowerCase()){

                 temp.push(this.filterdetails[i])
               }
      }

      this.employeedetails=temp
      

      for (let i = 0; i < this.employeedetails.length; i++) {
        for (let j = 0; j < this.employeedetails[i].skills.length; j++) {
          this.skillsname += this.employeedetails[i].skills[j].stitle + ', ';
        }
        this.skills.push(this.skillsname);
        this.skillsname = "";
      }
     
    }
  }

}
