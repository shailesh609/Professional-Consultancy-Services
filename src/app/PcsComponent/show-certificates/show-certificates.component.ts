import { Component, OnInit } from '@angular/core';
import { UserdetailsService } from 'src/app/Service/userdetails.service';

@Component({
  selector: 'app-show-certificates',
  templateUrl: './show-certificates.component.html',
  styleUrls: ['./show-certificates.component.css']
})
export class ShowCertificatesComponent implements OnInit {

   certificates: any=[];

  constructor(private userdetailsService:UserdetailsService) { }

  ngOnInit(): void {
     this.getCertificates();
  }

  getCertificates(){
     this.userdetailsService.getCertificates().subscribe(data=>{
      this.certificates=data
      console.log(this.certificates)

     },
    error=>{
     console.error();
    }
     )

  }

}
