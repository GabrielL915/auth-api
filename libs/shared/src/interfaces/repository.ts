export interface Create<I, O> {
  createOne(input: I): Promise<O>;
}
export interface Update<I, K extends keyof I, O> {
  updateOne(key: I[K], input: I): Promise<O>;
}

export interface Delete<I, K extends keyof I, O> {
  deleteOne(key: I[K]): Promise<O>;
}

export interface FindOne<I, K extends keyof I, O> {
  findOne(key: I[K]): Promise<O>;
}

export interface FindAll<O> {
  findAll(): Promise<O[]>;
}
