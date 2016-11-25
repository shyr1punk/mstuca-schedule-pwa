export const FETCH_MENU = 'FETCH_MENU';
export const STORE_MENU = 'STORE_MENU';
export const FETCH_MENU_ERROR = 'FETCH_MENU_ERROR';

export const STORE_GROUP_SCHEDULE = 'STORE_GROUP_SCHEDULE';
export const STORE_TEACHER_SCHEDULE = 'STORE_TEACHER_SCHEDULE';

/**
 * Загрузка данных меню
 *
 * @returns {Object} state
 */
export const fetchMenu = dispatch =>
  fetch('/api/menu')
    .then(response => response.json())
    .then(response => {
      dispatch({
        type: STORE_MENU,
        data: response
      });
    }, () => {
      dispatch({
        type: FETCH_MENU_ERROR
      })
    });

export const fetchGroupSchedule = (dispatch, groupId) =>
  fetch(`/api/schedule/groups/${groupId}`)
    .then(response => response.json())
    .then(response => {
      dispatch({
        type: STORE_GROUP_SCHEDULE,
        data: response,
        groupId: groupId
      });
    });

export const fetchTeacherSchedule = (dispatch, teacherName) =>
  fetch(`/api/schedule/teachers/${teacherName}`)
    .then(response => response.json())
    .then(response => {
      dispatch({
        type: STORE_TEACHER_SCHEDULE,
        data: response,
        teacherName
      })
    })
