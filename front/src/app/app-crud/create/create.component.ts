import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Frase } from 'src/app/model/model';
import { ServiceGlobalService } from 'src/app/service/service-global.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public frase : Frase = new Frase()

  constructor(
    private serviceGlobal: ServiceGlobalService,
    private router: Router,
     private toastr: ToastrService
 
  ) { }

  ngOnInit(): void {
  }


  public salvar(){
    this.serviceGlobal.create(this.frase).subscribe(() => {
      this.toastr.success('Frase gravada!', 'Sucesso')
      
      setTimeout(() => {
        this.navigator()
      }, 1800)
      
    })
  }

  public navigator(){
    this.router.navigate(['/'])
  }
}
