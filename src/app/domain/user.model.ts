export interface IUserDTO {
  id: number;
  name: string;
}

export class UserDTO implements IUserDTO {
  id!: number;
  name!: string;
  constructor(data: IUserDTO) {
    let retorno: UserDTO = {
      id: -1,
      name: '',
    };
    if (data) {
      retorno = Object.assign(this, data);
    }
    return retorno;
  }
}
