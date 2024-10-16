import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 2396,
  login: 'b2H`1@Q\\7Jt\\5LK',
};

export const sampleWithPartialData: IUser = {
  id: 2819,
  login: 'lG6',
};

export const sampleWithFullData: IUser = {
  id: 25066,
  login: 'OeY7',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
