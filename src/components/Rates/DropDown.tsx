import React from 'react'
import { Menu, Dropdown } from 'antd';

import './DropDown.css'

export type TComponentProps = {
    setCurrency: any
}

class OverlayVisible extends React.Component<TComponentProps> {
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

  onClickValue = (currency: string) => {
     this.props.setCurrency(currency);
  }

  render() {
    const menu = (
      <Menu className='menu-item' onClick={this.handleMenuClick}>
        <Menu.Item className='menu-list' key="145" onClick={() => this.onClickValue('145')}>USD</Menu.Item>
        <Menu.Item className='menu-list' key="292" onClick={() => this.onClickValue('292')}>EURO</Menu.Item>
        <Menu.Item className='menu-list' key="100" onClick={() => this.onClickValue('298')}>R.RUB</Menu.Item>
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
