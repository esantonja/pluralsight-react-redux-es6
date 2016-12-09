// This is an action creator

import * as types from './actionTypes';

export function createCourse(course) {
  return {type: types.CREATE_COURSE, course: course};
}
