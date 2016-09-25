import { STORE_SCHEDULE, fetchSchedule } from './actions';

/**
 * Загрузка данных меню
 *
 * @returns {Object} state
 */
export default (state = {
  schedules: {}
}, action) => {
  switch(action.type) {
  case STORE_SCHEDULE:
    return {
      schedules: {
        ...state.schedules,
        [action.groupId]: action.data
      }
    };
  default:
    return state;
  }
}
