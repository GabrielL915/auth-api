import { timingSafeEqual } from 'crypto';
import { UserRepository } from 'dataSource/data-source';
import { hashPassword } from './hash.password';

export async function validateUser(
  userRepository: UserRepository,
  email: string,
  password: string,
) {
  const user = await userRepository.findOneByEmail(email);
  if (!user) {
    throw new Error('User not found');
  }

  const isPasswordValid = comparePassword(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Invalid password');
  }
  return user;
}

function comparePassword(password: string, storedPassword: string): boolean {
  const [salt, hash] = storedPassword.split('.');
  const hashedInput = hashPassword(password, salt);
  return timingSafeEqual(
    Buffer.from(hashedInput.split('.')[1], 'hex'),
    Buffer.from(hash, 'hex'),
  );
}
