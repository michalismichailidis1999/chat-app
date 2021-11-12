import SignUpForm from 'components/SignUpForm/SignUpForm'
import { Helmet } from 'react-helmet'

const SignUp = () => {
  return (
    <>
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <SignUpForm />
    </>
  )
}

export default SignUp
