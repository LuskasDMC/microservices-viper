export namespace SuccessPresenter {
  export interface IStatusOk {
    status: 200;
    body?: Record<string, unknown>;
  }

  export interface IStatusCreated<T> {
    status: 201;
    body?: T;
  }

  export interface IStatusNoContent {
    status: 204;
  }
}
