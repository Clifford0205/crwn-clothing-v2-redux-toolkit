import SignUpForm from 'COMPONENTS/sign-up-form/sign-up-form.component';
import SignInForm from 'COMPONENTS/sign-in-form/sign-in-form.component';

import { AuthenticationContainer } from './authentication.styles';

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
