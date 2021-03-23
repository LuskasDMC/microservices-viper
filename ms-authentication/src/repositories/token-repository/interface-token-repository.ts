import { Document, Query } from 'mongoose';
import { IToken } from '../../entities/token';

export interface ITokenRepository {
  create: (data: Omit<IToken, '_id'>) => Promise<Document<IToken>>;
  updateByUserId: (
    user_id: string,
    data: Omit<IToken, '_id'>,
  ) => Promise<Query<Document<IToken>, Document<IToken>>>;
  findById: (id: string) => void;
  find: (data: Omit<Partial<IToken>, '_id'>) => Promise<Document<IToken>>;
}
