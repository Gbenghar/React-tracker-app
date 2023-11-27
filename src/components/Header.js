import Button from "./Button"
import PropTypes from 'prop-types'

const Header = (props) => {
    const onClick = () => {
        console.log('clicked')
    }
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <Button color="green" text="Add" onClick={onClick}/>
    </header>
  )
}
Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}


export default Header
