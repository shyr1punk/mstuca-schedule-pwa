import React, { Component, PropTypes } from 'react';

import './lesson.css';

/**
 * Отображение одного учебное занятия
 */
export default class Lesson extends Component {
  render() {
    const { subject, auditory, teacher, sub_group } = this.props;
    let cl = '';
    switch (this.props.lesson_type) {
      case 'Лекция':
        cl = 'lesson lesson--lection';
        break;
      case 'Пр.Зан.':
        cl = 'lesson lesson--prac';
        break;
      case 'Лаб.раб.':
        cl = 'lesson lesson--lab';
        break;
      default:
        cl = '';
    }
    return (
      <div className={cl}>
        <div className='lesson__main'>
          <div style={{whiteSpace: 'initial'}}>{subject}</div>
          <div>
            <span className='lesson__teacher'>{teacher}</span>
            { sub_group ? <span className='lesson__sub-group'> подгруппа {sub_group}</span> : null }
          </div>
        </div>
        <div className='lesson__auditory'>{auditory}</div>
      </div>
    );
  }
}

Lesson.propTypes = {
  number: PropTypes.number,
  subject: PropTypes.string,
  auditory: PropTypes.string,
  sub_group: PropTypes.number,
  teacher: PropTypes.string
};
