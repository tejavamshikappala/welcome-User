const Logout = props => {
  const {onClick} = props
  return (
    <button className="for_button" type="button" onClick={onClick}>
      Logout
    </button>
  )
}

Logout.defaultProps = {
  onClick: null,
}

export default Logout
