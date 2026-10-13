function dataHojeLocal(): string {
  const agora = new Date();
  const deslocamento = agora.getTimezoneOffset();
  return new Date(agora.getTime() - deslocamento * 60000).toISOString().slice(0, 10);
}

export function validarTitulo(titulo: string): string | null {
  const texto = titulo.trim();

  if (texto.length < 5 || texto.length > 80) {
    return 'O título deve ter entre 5 e 80 caracteres.';
  }

  return null;
}

export function validarData(data: string): string | null {
  if (!data) {
    return 'A data não pode ficar em branco.';
  }

  return data < dataHojeLocal() ? 'A data não pode estar no passado.' : null;
}

export function validarLocal(local: string): string | null {
  return local.trim() ? null : 'O local não pode ficar em branco.';
}

export function validarEmailResponsavel(emailResponsavel: string): string | null {
  if (!emailResponsavel.trim()) {
    return 'E-mail em formato inválido.';
  }

  const formatoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailResponsavel);
  return formatoValido ? null : 'E-mail em formato inválido.';
}

export function validarVagas(vagas: number | null): string | null {
  if (vagas === null || vagas === undefined || Number.isNaN(vagas)) {
    return 'As vagas devem ser um número inteiro de 1 a 200.';
  }

  if (!Number.isInteger(vagas) || vagas < 1 || vagas > 200) {
    return 'As vagas devem ser um número inteiro de 1 a 200.';
  }

  return null;
}

export function validarVagasPorLocal(vagas: number | null, local: string): string | null {
  if (local === 'Laboratório 1' || local === 'Laboratório 2') {
    if (typeof vagas === 'number' && Number.isInteger(vagas) && vagas > 30) {
      return 'No laboratório, as vagas podem ter no máximo 30.';
    }
  }

  return null;
}