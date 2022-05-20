import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateComponent } from "./app-crud/create/create.component";
import { DeleteComponent } from "./app-crud/delete/delete.component";
import { EditComponent } from "./app-crud/edit/edit.component";
import { HomeComponent } from "./components/home/home.component";
import { NavComponent } from "./components/nav/nav.component";




const routes : Routes = [
    {path: '', component: HomeComponent},

    {path: 'frases/create', component: CreateComponent},
    {path: 'frases/edit/:id', component: EditComponent},
    {path: 'frases/delete/:id', component: DeleteComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }