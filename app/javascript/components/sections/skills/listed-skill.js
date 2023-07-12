import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function ListedSkill(props) {
  const { name, description } = props.skillInfo

  const [selected, setSelected] = useState(false)

  const deleteDescription = (event) => {
    document.querySelectorAll('#skill-description').forEach(el => el.remove())
    setSelected(false)
    document.removeEventListener('click', deleteDescription, true)
  }

  const displayDescription = (event) => {
    const row = event.target.closest('tr')
    document.querySelectorAll('#skill-description').forEach(el => el.remove())
    const descriptionEl = document.createElement('td')
    descriptionEl.id = 'skill-description'
    descriptionEl.colSpan = 4
    descriptionEl.innerText = description
    row.parentElement.insertBefore(descriptionEl, row.nextSibling)
    setSelected(true)
    document.addEventListener('click', deleteDescription, true)
  }

  return (
    <td 
      className={`skill-table-row ${selected ? 'selected' : ''}`}
      onClick={displayDescription}
    >
      <span className='skill-table-item'>{name}</span>
    </td>
  )
}

export default ListedSkill
