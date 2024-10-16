import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '15057b8e-2f6d-4f01-a983-f1494cf90f56',
};

export const sampleWithPartialData: IAuthority = {
  name: 'e20ee88b-2f96-408d-9b66-97eb46e140bb',
};

export const sampleWithFullData: IAuthority = {
  name: '22fb94fc-2e8b-4b60-8e99-b2b2633996c9',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
