import { Component, OnInit } from '@angular/core';
import { UserdetailsService } from 'src/app/Service/userdetails.service';

@Component({
  selector: 'app-show-skills',
  templateUrl: './show-skills.component.html',
  styleUrls: ['./show-skills.component.css']
})
export class ShowSkillsComponent implements OnInit {

  Skills: any=[];
  constructor(private userdetailsService:UserdetailsService) { }

  ngOnInit(): void {
    this.getSkills()
  }
  
//  sid: 1, stitle: 'Spring Boot', scategory: 'Java Development', sdesc: 'Rest Api,Jpa,MVC'

  getSkills(){
     
    this.userdetailsService.getSkills().subscribe(data=>{
      this.Skills=data
      console.log(this.Skills);   

    }
    )


  }
   

}
