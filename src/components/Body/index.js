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
              <p className="nav-items">Item 1</p>
              <p className="nav-items">Item 2</p>
              <p className="nav-items">Item 3</p>
              <p className="nav-items">Item 4</p>
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
              <div className="right-items">Ad 1</div>
              <div className="right-items">Ad 2</div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
