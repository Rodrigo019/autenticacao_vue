

export default interface Response<T> {

    sucesso: boolean;
    status: number;
    erros: string[];
    retorno: T;
}