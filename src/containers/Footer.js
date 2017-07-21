import React from 'react'
import { connect } from 'react-redux'
import { setVisible } from '../actions'

class FooterView extends React.Component {
  onClick = (e, key) => {
    e.preventDefault()
    this.props.onItemClick(key)
  } 

  render() {
    const filterList = [
      { key: 'SHOW_ALL', text: 'All' }, 
      { key: 'SHOW_ACTIVE', text: 'Active' } , 
      { key: 'SHOW_COMPLETED', text: 'Completed' }
    ]
    return (
      <p>
        Show: {' '}
        {filterList.map((filter, index) => {
          return filter.key === this.props.currentFilter 
            ? <span key={index}><span>{filter.text}</span> </span>
            : <span key={index}><a href="" onClick={(e) => this.onClick(e, filter.key)}>{filter.text}</a> </span>
        })}
      </p>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentFilter: state.visibleFilter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onItemClick: (filter) => {
      dispatch(setVisible(filter))
    }
  }
}

const getFooter = ({currentFilter, onItemClick}) => {
  return (
    <FooterView currentFilter={currentFilter} onItemClick={onItemClick} />
  )
}

const Footer = connect(mapStateToProps, mapDispatchToProps)(getFooter)

export default Footer;