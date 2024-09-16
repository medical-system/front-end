import {PropTypes} from 'prop-types'
const Navbar = ({setIsOpen}) => {
  return (
    <div>
      <button className="block xl:hidden open-btn" onClick={()=> setIsOpen(true)}>=</button>
    </div>
  )
}

export default Navbar

Navbar.propTypes = {
  setIsOpen: PropTypes.func
}