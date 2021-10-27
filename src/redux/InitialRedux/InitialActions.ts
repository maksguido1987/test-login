type TProperties<T> = T extends { [key: string]: infer U } ? U : never;
type TInferActions<T extends { [key: string]: (...args: any) => any }> = ReturnType<TProperties<T>>;

export type TInitial = TInferActions<typeof initial>;

export const initial = {
  setLogin: (login: string) =>
    ({
      type: 'SET_LOGIN',
      payload: login,
    } as const),
  setPassword: (password: string) =>
    ({
      type: 'SET_PASSWORD',
      payload: password,
    } as const),
};
