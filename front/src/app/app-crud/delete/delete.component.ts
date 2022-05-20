import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Frase } from 'src/app/model/model';
import { ServiceGlobalService } from 'src/app/service/service-global.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  public frase: Frase = new Frase()
  public modalRef?: BsModalRef;
  public message: string

  constructor(
    private serviceGlobal: ServiceGlobalService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private modalService: BsModalService
    ) {}


  ngOnInit(): void {
    this.message = 'Confirma a exclusão?'
    let id = this.route.snapshot.params['id']
    this.findId(id)
  }


  public findId(id: number){
    this.serviceGlobal.getByIdFrase(id).subscribe((resp:Frase)=>{
      this.frase = resp
    })
  }

  public deleteFrase(){
    this.serviceGlobal.delete(this.frase.id).subscribe(() =>{
      this.modalRef?.hide()
      this.toastr.error('Frase excluída!', 'Atenção')

    setTimeout(() =>{
      this.navigator()
    }, 1800)

    })
  }
  
  public navigator(){
    this.router.navigate(['/'])
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
 
  voltar(): void {
    this.modalRef?.hide();
  }
 
}
