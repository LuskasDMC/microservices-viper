import { Query } from 'mongoose';
import { IToken } from '../../../entities/token';
import TokenModel, { ITokenModel } from '../../../models/token';
import { ITokenRepository } from '../interface-token-repository';

class MongoDBTokenRepository implements ITokenRepository {
  create = async (data: Omit<IToken, '_id'>): Promise<ITokenModel> => {
    return await new TokenModel(data).save();
  };

  updateByUserId = async (
    user_id: string,
    data: Omit<IToken, '_id'>,
  ): Promise<Query<ITokenModel, ITokenModel>> => {
    return await TokenModel.findOneAndUpdate({ user_id }, data);
  };

  find = async (data: Omit<Partial<IToken>, '_id'>): Promise<ITokenModel> => {
    return await TokenModel.findOne(data);
  };

  findById = async (id: string): Promise<Query<ITokenModel, ITokenModel>> => {
    return await TokenModel.findById(id);
  };
}

export default MongoDBTokenRepository;
