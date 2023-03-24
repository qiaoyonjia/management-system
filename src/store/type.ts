import { IloginState } from './login/type'

export interface IRootState {
  name: string
  age: number
}

export interface IRootWithMoudle {
  login: IloginState
}

export type IStoreType = IRootState & IRootWithMoudle
