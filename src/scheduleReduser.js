import { STORE_GROUP_SCHEDULE, STORE_TEACHER_SCHEDULE, fetchSchedule } from './actions';

/**
 * Загрузка данных меню
 *
 * @returns {Object} state
 */
export default (state = {
  schedules: {}
}, action) => {
  switch(action.type) {
  case STORE_GROUP_SCHEDULE:
    return {
      schedules: {
        ...state.schedules,
        [action.groupId]: action.data
      }
    };
  case STORE_TEACHER_SCHEDULE:
    return {
      schedules: {
        ...state.schedules,
        [action.teacherName]: action.data
      }
    }
  default:
    return state;
  }
}
