import React from 'react'
import FloatingInfo from '../../shared/floating-info'

function EducationItem(props) {
    return (
        <FloatingInfo
            showWhenWithin='10vh'
            minScroll={props.minScroll}
            maxScroll={props.maxScroll}
            position='relative'
        >
            <tr className='modal gray-background list-item'>
                <td className='list-item-image-lg-container'>
                    <img
                        className='list-item-image-lg'
                        src={'/api/v1/images/' + props.img + '.' + (props.imgSrc || 'jpg')}
                    />
                </td>
                <td className='list-item-column project-column'>
                    <div className='experience-description'>
                        <p className='project-header'>
                            {props.school}
                            <span className='project-link'>{props.degree}</span>
                            <span className='project-link'>{props.year}</span>
                        </p>
                        {props.children}
                    </div>
                </td>
            </tr>
        </FloatingInfo>

    )
}

export default EducationItem