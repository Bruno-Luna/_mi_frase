import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Frase } from 'src/app/model/model';
import { ServiceGlobalService } from 'src/app/service/service-global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  public frases: Frase[]
  public data = new Date()
  public dia: number
  public mes: number
  public ano: number
  public order = 'frases.content'
  public reverse: boolean = false

  constructor(
    private serviceGlobal: ServiceGlobalService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.dia = this.data.getDate()
    this.mes = this.data.getMonth() + 1
    this.ano = this.data.getFullYear()
    
    this.listarFrases()
    
  }
 
  public copiarFrase(item, author){
    console.log(item);
    navigator.clipboard.writeText(`"${item}" - ${author}`).then(() => {
      this.toastr.success('Frase copiada!', 'Sucesso')
    })
  }

  public listarFrases(){
    this.serviceGlobal.getAllFrases().subscribe((resp: Frase[]) =>{
      this.frases = resp
    })
  }
  

}
