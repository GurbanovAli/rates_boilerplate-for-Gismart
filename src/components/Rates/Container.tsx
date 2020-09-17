import React from 'react';
import { connect, ConnectedProps } from 'react-redux'

import { IAppState } from 'store'
import Component from './Component'
import OverlayVisible from "components/Rates/DropDown";

const mapStateToProps = (state: IAppState) => ({
  fetching: state.common.fetching
})
const mapActionsToProps = (dispatch) => ({
})

const connector = connect(mapStateToProps, mapActionsToProps)
export type TReduxProps = ConnectedProps<typeof connector>

export type TComponentProps = {
} & TReduxProps

const Container: React.FC<TComponentProps> = (props) => {
  const [currency, setCurrency] = React.useState('145');

  return (
      <React.Fragment>
          <OverlayVisible setCurrency={setCurrency} />
          <Component
              currency={currency}
          />
      </React.Fragment>
  )
}

export default connector(Container)
