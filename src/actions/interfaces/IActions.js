// @flow
import * as React from 'react'

type apiResult = {
  success: boolean;
  message: string;
  results: Array<any>;
}

export interface IActions<T> {
  select(): Array<T>;
  selectById(string : number): ?T;
  insert(T): apiResult;
  update(id: string | number, model: T): apiResult;
  delete(id: string | number): apiResult;
}
