import { SuccessPresenter } from './interface-success-presenters';

export const statusOkPresenter = (body = {}): SuccessPresenter.IStatusOk => {
  return {
    status: 200,
    body,
  };
};
