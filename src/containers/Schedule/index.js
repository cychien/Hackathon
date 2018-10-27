import Schedule from 'components/PredictionScreen/Schedule';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import * as scheduleActions from 'actions/schedule'

function mapStateToProps (state) {
  return {
    schedule: state.schedule,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    scheduleActions: bindActionCreators(scheduleActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Schedule)