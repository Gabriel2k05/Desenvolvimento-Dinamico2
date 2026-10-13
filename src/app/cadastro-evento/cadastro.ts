import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { validarEmail, validarNome, validarTelefone } from '../validacao';
import { Pessoa, Tipo } from '../pessoa/pessoa.model';

function fichaEmBranco(): Omit<Pessoa, 'id'> {
  return { nome: '', email: '', telefone: '', tipo: 'aluno', curso: '' };
}

@Component({
  selector: 'app-cadastro',
  imports: [FormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
  cursos = ['Análise e Desenvolvimento de sistemas', 'Administração', 'Engenharia de Computação', 'Direito', 'Psicologia'];

  pessoa = fichaEmBranco();
  pessoas: Pessoa[] = [];

  private proximoId = 1;

  get erros(): Record<keyof Omit<Pessoa, 'id'>, string | null> {
    return {
      nome: validarNome(this.pessoa.nome),
      email: validarEmail(this.pessoa.email),
      telefone: validarTelefone(this.pessoa.telefone, this.pessoa.tipo as Tipo),
      tipo: null,
      curso: null,
    };
  }

  get totalErros(): number {
    return Object.values(this.erros).filter(mensagem => mensagem !== null).length;
  }

  get temErro(): boolean {
    return this.totalErros > 0;
  }

  salvar(): void {
    if (this.temErro) return;

    this.pessoas.push({ id: this.proximoId++, ...this.pessoa });
    this.pessoa = fichaEmBranco();
  }
}