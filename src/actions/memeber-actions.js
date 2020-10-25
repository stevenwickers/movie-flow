// @flow
import * as React from 'react';
import { IActions } from './interfaces/IActions'
import { CreateUUID } from '../utils/utilities';

type _member = {
  id: string;
  name: string;
};

export const MemberModel = (results): _member => {
  const m: _member = {
    id: results.id || CreateUUID(),
    name: results.name,
  }
  return m
}

class CreateMemberActions implements IActions<_member> {
  select() {
    return undefined;
  }
  selectById(string) {
    return undefined;
  }
  insert() {
    return undefined;
  }
  update(id, model) {
    return undefined;
  }
  delete(id) {
    return undefined;
  }
}