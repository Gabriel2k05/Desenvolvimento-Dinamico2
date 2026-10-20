import { Routes } from '@angular/router';
import { Cadastro } from './cadastro-evento/cadastro';
import { CadastroEvento } from './pages/cadastro-evento/cadastro-evento';
import { Empresa } from './empresa/empresa';


export const routes: Routes = [
    { path: '', redirectTo: 'cadastro', pathMatch: 'full' },
    { path: 'cadastro', component: Cadastro },
    { path: 'eventos/novo', component: CadastroEvento },
    { path: 'empresa', component: Empresa},
    { path: '**', redirectTo: 'cadastro' },
];
