import React, { Component, PropTypes } from 'react';

import { ListItem } from 'material-ui/List';

import './lesson.css';

export default class Lesson extends Component {
  render() {
    const { number, subject, auditory, teacher, sub_group } = this.props;
    let cl = '';
    switch (this.props.lesson_type) {
      case 'Лекция':
        cl = 'lesson--lection';
        break;
      case 'Пр.Зан.':
        cl = 'lesson--prac';
        break;
      case 'Лаб.раб.':
        cl = 'lesson--lab';
        break;
      default:
        cl = '';
    }
    return (
      <ListItem className={cl}>
        <div>{number}</div>
        <div style={{whiteSpace: 'initial'}}>{subject}</div>
        <div>{auditory}</div>
        <div>{teacher}</div>
        { sub_group ? <div>Подгруппа {sub_group}</div> : null }
      </ListItem>
    );
  }
}

Lesson.propTypes = {
  number: PropTypes.number,
  subject: PropTypes.string,
  auditory: PropTypes.string,
  sub_group: PropTypes.string,
  teacher: PropTypes.string
};
