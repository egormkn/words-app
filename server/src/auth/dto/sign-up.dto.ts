import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { UserPasswordInterface } from '../../common/interfaces/user-password.interface';
import { LogInDto } from './log-in.dto';

export class SignUpDto
  extends LogInDto
  implements Pick<UserPasswordInterface, 'name' | 'email' | 'password'>
{
  /**
   * A name of the user
   * @example John Doe
   */
  @IsNotEmpty({ message: 'Please enter a name' })
  name: string;

  /**
   * An email address of the user
   * @example john@example.com
   */
  @IsNotEmpty({ message: 'Please enter an email address' })
  @IsEmail(undefined, { message: 'Please provide a valid email address' })
  email: string;

  /**
   * A password of the user
   * @example password
   */
  @MinLength(8, { message: 'Password should contain at least 8 characters' })
  password: string;
}
