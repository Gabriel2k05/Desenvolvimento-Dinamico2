import { Routes } from '@angular/router';
import { Cadastro } from './cadastro-evento/cadastro';
import { CadastroEvento } from './pages/cadastro-evento/cadastro-evento';


export const routes: Routes = [
    { path: '', redirectTo: 'cadastro', pathMatch: 'full' },
    { path: 'cadastro', component: Cadastro },
    { path: 'eventos/novo', component: CadastroEvento },
    { path: '**', redirectTo: 'cadastro' },
];
