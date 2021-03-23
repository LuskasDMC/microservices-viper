import { Request, Response } from 'express';
import { statusOkPresenter } from '../../presenters/success-presenters/success-presenters';
import TokenRepository from '../../repositories/token-repository/token-repository';
import { ITokenController } from './interface-token-controller';

class TokenController implements ITokenController {
  constructor(private repository: TokenRepository) {}

  getToken = async (req: Request, res: Response): Promise<Response> => {
    const { user_id } = req.params;

    if (!user_id) return res.json();

    const token = await this.repository.find({ user_id });

    if (token) {
      return res.status(200).json(statusOkPresenter({ token: token.token }));
    } else {
      return res
        .status(404)
        .json(statusOkPresenter({ message: 'User not found.' }));
    }
  };

  // setToken = async (req: Request, res: Response): Promise<Response> => {};

  // updateToken = async (req: Request, res: Response): Promise<Response> => {};
}

export default TokenController;
