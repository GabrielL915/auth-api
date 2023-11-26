import { randomBytes, scryptSync } from 'crypto';
export const hashPassword = (senha: string, saltCarregado?: string) => {
  const salt = saltCarregado
    ? Buffer.from(saltCarregado, 'hex')
    : randomBytes(16);

  const hash = scryptSync(senha, salt, 10);

  return `${salt.toString('hex')}.${hash.toString('hex')}`;
};
