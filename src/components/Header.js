import PropTypes from 'prop-types'
import Button from './button'


const Header = ({ title}) => {
const onClick= () => {
    console.log('click')
}

    return (
        <header className="header">
            <h1 >{title}</h1>
            <Button color='green' text='Add'
            onClick={onClick}
            />
            
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}


/*
const headingStyle = {
    color:'Blue'
}*/


 

export default Header
