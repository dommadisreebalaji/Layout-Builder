// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="nav-container">
              <h4 className="nav-heading">Left Navbar Menu</h4>
              <ul>
                <li className="nav-items">Item 1</li>
                <li className="nav-items">Item 2</li>
                <li className="nav-items">Item 3</li>
                <li className="nav-items">Item 4</li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="content-container">
              <h4 className="nav-heading">Content</h4>
              <p className="nav-items">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="nav-container">
              <h4 className="nav-heading">Right Navbar Menu</h4>
              <p className="right-items">Ad 1</p>
              <p className="right-items">Ad 2</p>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
