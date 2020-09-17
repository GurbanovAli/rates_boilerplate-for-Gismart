import React from 'react'
import { Menu, Dropdown } from 'antd';
import styled from 'styled-components'

import './DropDown.css'

class OverlayVisible extends React.Component {
  state = {
    visible: false,
    view: false,
  }

  handleMenuClick = (e) => {
    if (e.key === '3') {
      this.setState({ visible: false });
    }
  }

  handleVisibleChange = (flag) => {
    this.setState({ visible: flag });
  }

  onClickValue = () => {
     console.log(123)
  }

  render() {

    const menu = (
      <Menu className='menu-item' onClick={this.handleMenuClick}>
        <Menu.Item className='menu-list' key="1" onChange={this.onClickValue}>USD</Menu.Item>
        <Menu.Item className='menu-list' key="2" onChange={this.onClickValue}>EURO</Menu.Item>
        <Menu.Item className='menu-list' key="3" onChange={this.onClickValue}>R.RUB</Menu.Item>
      </Menu>
    );

    return (
      <>
        <Dropdown
          className='dropdown-item'
          overlay={menu}
          onVisibleChange={this.handleVisibleChange}
          visible={this.state.visible}
        >
          <a className="ant-dropdown-link" href="#">
            Select Currency
          </a>
        </Dropdown>
      </>
    );
  }
}

export default OverlayVisible
