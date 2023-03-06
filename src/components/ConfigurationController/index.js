// Write your code here

import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const onChangeRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="configuration-controller-container">
          <h1 className="configuration-controller-heading">Layout</h1>
          <div className="check-box-container">
            <input
              type="checkbox"
              className="check-box-input"
              id="content"
              checked={showContent}
              onChange={onChangeContent}
            />
            <label htmlFor="content" className="label">
              Content
            </label>
          </div>
          <div className="check-box-container">
            <input
              type="checkbox"
              className="check-box-input"
              checked={showLeftNavbar}
              id="left-nav-bar"
              onChange={onChangeLeftNavbar}
            />
            <label htmlFor="left-nav-bar" className="label">
              Left Navbar
            </label>
          </div>
          <div className="check-box-container">
            <input
              type="checkbox"
              className="check-box-input"
              id="right-nav-bar"
              checked={showRightNavbar}
              onChange={onChangeRightNavbar}
            />
            <label htmlFor="right-nav-bar" className="label">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
