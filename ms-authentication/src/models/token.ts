import mongoose, { Document } from 'mongoose';
import { IToken } from '../entities/token';

export interface ITokenModel extends Omit<IToken, '_id'>, Document {}

const Token = new mongoose.Schema<ITokenModel>({
  token: {
    type: String,
    unique: true,
    required: true,
  },
  user_id: {
    type: String,
    unique: true,
    required: true,
  },
});

export default mongoose.model<ITokenModel>('Tokens', Token);
