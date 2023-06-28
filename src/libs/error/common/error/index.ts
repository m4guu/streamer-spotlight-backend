import ErrorId from '../error-id';

interface Error {
  message: string;
  code: number;
  id: ErrorId;
}

export default Error;
