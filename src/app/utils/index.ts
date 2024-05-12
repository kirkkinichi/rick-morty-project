// Função de delay proposital para simular carregamento
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))