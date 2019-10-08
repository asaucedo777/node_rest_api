import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';

import { Connection } from 'typeorm';
import { User } from '../entities/user.entity';
import { UserRepository } from '../repositories/user.repository';

export class UserService {
  public connection: Connection;
  constructor(connection: Connection) {
    this.connection = connection;
  }
  public selectAll = (): Promise<void | User[]> => {
    const retorno = this.connection
      .getCustomRepository(UserRepository)
      .find()
      .then((result) => {
        console.log('Resultado: ', result);
        return result;
      })
      .catch((error) => {
        console.log('Error en selectAll: ', error);
      });
    return retorno;
  }
  public selectById = (id: string): Promise<void | User[]> => {
    const retorno = this.connection
      .getCustomRepository(UserRepository)
      .findByIds([id])
      .then((result) => {
        console.log('findByIds: ', result);
        return result;
      })
      .catch((error) => {
        console.log('Error selectById: ', error);
      })
      .finally(() => {
        console.log('Finally');
      });
    return retorno;
  }
  public insert = (item: User): Promise<InsertResult> => {
    const retorno = this.connection
      .getCustomRepository(UserRepository)
      .insert(item)
      .then((result) => {
        return result;
      });
    return retorno;
  }
  public update = (item: User): Promise<UpdateResult> => {
    const retorno = this.connection
      .getCustomRepository(UserRepository)
      .update(item.id, item)
      .then((result) => {
        return result;
      });
    return retorno;
  }
  public remove = (id: string): Promise<DeleteResult> => {
    const retorno = this.connection
      .getCustomRepository(UserRepository)
      .delete(id)
      .then((result) => {
        return result;
      });
    return retorno;
  }
}
