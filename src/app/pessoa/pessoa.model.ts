export type Tipo = 'aluno' | 'professor';

export interface Pessoa {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  tipo: Tipo;
  curso: string;
}