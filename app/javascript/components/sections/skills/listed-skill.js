import React, { Component } from 'react'

export default class ListedSkill extends Component {

  stars(num) {
    let starEls = []
    for (let i=0; i < num; i++) {
      starEls.push(this.props.starImg)
    }
    return starEls
  }

  render() {
    const { name, star_rating, years_of_experience, description } = this.props.skillInfo 
    return (
      <div className='skill-table-row'>
        <span className='skill-table-item'>{name}</span>
      {/*<span className='skill-table-item'>{this.stars(years_of_experience)}</span>*/}
        <span className='skill-table-item'>{this.stars(star_rating)}</span>
      {/*<td>{description}</td>*/}
      </div>
    )
  }
}
