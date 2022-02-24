import ky, { Options } from 'ky';
import { DEFAULT_API_OPTIONS, isUsers, User } from '..';

const getMembers = async (
  orgCode: string,
  options?: Options,
): Promise<User[]> => {
  const mergedOptions = {
    ...DEFAULT_API_OPTIONS,
    ...options,
  };
  const response = await ky.get(`org/${orgCode}/members`, mergedOptions);
  const members = (await response.json()) as unknown[];

  if (!isUsers(members)) {
    throw Error('API type error');
  }

  return members;
};

export default getMembers;
