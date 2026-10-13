import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Evento } from '../../models/evento';
import {
  validarData,
  validarEmailResponsavel,
  validarLocal,
  validarTitulo,
  validarVagas,
  validarVagasPorLocal,
} from '../../models/evento.validacao';

type CampoEvento = 'titulo' | 'data' | 'local' | 'emailResponsavel' | 'vagas';

function eventoEmBranco(): Omit<Evento, 'id'> {
  return {
    titulo: '',
    data: '',
    local: '',
    emailResponsavel: '',
    vagas: null,
  };
}

@Component({
  selector: 'app-cadastro-evento',
  imports: [FormsModule],
  templateUrl: './cadastro-evento.html',
  styleUrl: './cadastro-evento.css',
})
export class CadastroEvento {
  readonly locais = ['Auditório', 'Laboratório 1', 'Laboratório 2', 'Sala 101'];

  evento = eventoEmBranco();
  eventos: Evento[] = [];

  camposTocados: Record<CampoEvento, boolean> = {
    titulo: false,
    data: false,
    local: false,
    emailResponsavel: false,
    vagas: false,
  };

  private proximoId = 1;

  get erros() {
    return {
      titulo: validarTitulo(this.evento.titulo),
      data: validarData(this.evento.data),
      local: validarLocal(this.evento.local),
      emailResponsavel: validarEmailResponsavel(this.evento.emailResponsavel),
      vagas: validarVagas(this.evento.vagas) ?? validarVagasPorLocal(this.evento.vagas, this.evento.local),
    };
  }

  get totalErros(): number {
    return Object.values(this.erros).filter(mensagem => mensagem !== null).length;
  }

  get temErro(): boolean {
    return this.totalErros > 0;
  }

  marcarTocado(campo: CampoEvento): void {
    this.camposTocados[campo] = true;
  }

  salvar(): void {
    if (this.temErro) return;

    this.eventos.push({ id: this.proximoId++, ...this.evento });
    this.evento = eventoEmBranco();
    this.camposTocados = {
      titulo: false,
      data: false,
      local: false,
      emailResponsavel: false,
      vagas: false,
    };
  }
}