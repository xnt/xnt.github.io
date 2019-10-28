import React, { memo } from 'react'
import PropTypes from 'prop-types'
import Clock from 'react-live-clock'

const Time = memo(function Time(props) {
  return (
    <div style={{ margin: "15px", textAlign: "center" }}>
      <h3>{props.label}</h3>
      <Clock format={'HH:mm:ss'} ticking={true} timezone={props.timezone} />
    </div>
  )
})

Time.propTypes = {
  label: PropTypes.string,
  timezone: PropTypes.string
}

export default Time
