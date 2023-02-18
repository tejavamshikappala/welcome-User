const Login = props => {
  const {onClick} = props

  return (
    <button className="for_button" type="button" onClick={onClick}>
      Login
    </button>
  )
}
Login.defaultProps = {
  onClick: null,
}
export default Login
