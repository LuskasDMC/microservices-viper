import { Request, Response } from 'express';

export interface ITokenController {
  getToken: (req: Request, res: Response) => Promise<Response>;
  // setToken: (req: Request, res: Response) => Response;
  // updateToken: (req: Request, res: Response) => Response;
}
