export interface IUser {
  id: number;
  name: string;
}

export class User implements IUser {
  id!: number;
  name!: string;
  constructor(data: IUser) {
    let retorno: User = {
      id: 1,
      name: '',
    };
    if (data) {
      retorno = Object.assign(this, data);
    }
    return retorno;
  }
}