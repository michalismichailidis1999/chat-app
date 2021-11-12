import SignInForm from 'components/SignInForm/SignInForm'
import { Helmet } from 'react-helmet'

const SignIn = () => {
  return (
    <>
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <SignInForm />
    </>
  )
}

export default SignIn
