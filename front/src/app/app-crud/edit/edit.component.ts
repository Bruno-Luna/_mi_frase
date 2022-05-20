import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Frase } from 'src/app/model/model';
import { ServiceGlobalService } from 'src/app/service/service-global.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public frase: Frase = new Frase()

  constructor(
    private serviceGlobal: ServiceGlobalService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {

    const id = this.route.snapshot.params['id']
    this.findIdFrase(id)

  }

  public findIdFrase(id:number){
    this.serviceGlobal.getByIdFrase(id).subscribe((resp: Frase) => {
      this.frase = resp
    })
  }

  public updateFrase(){
    this.serviceGlobal.edit(this.frase).subscribe(()=>{
      this.toastr.warning('Frase alterada!', 'Aviso')
      
      setTimeout(()=>{
        this.navigator()
      }, 1800)

    })
  }
  
  public navigator(){
    this.router.navigate(['/'])
  }
}
