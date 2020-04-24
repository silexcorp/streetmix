/**
 * Redux store actions.
 *
 * A "best practice" for large applications is to store actions as string
 * constants. The following text is copied from Redux documentation:
 * http://redux.js.org/docs/recipes/ReducingBoilerplate.html#actions
 *
 *  > Why is this beneficial? It is often claimed that constants are unnecessary,
 *  > and for small projects, this might be correct. For larger projects, there
 *  > are some benefits to defining action types as constants:
 *
 *  >   - It helps keep the naming consistent because all action types are
 *  >     gathered in a single place.
 *  >   - Sometimes you want to see all existing actions before working on a
 *  >     new feature. It may be that the action you need was already added by
 *  >     somebody on the team, but you didn't know.
 *  >   - The list of action types that were added, removed, and changed in a
 *  >     Pull Request helps everyone on the team keep track of scope and
 *  >     implementation of new features.
 *  >   - If you make a typo when importing an action constant, you will get
 *  >     `undefined`. Redux will immediately throw when dispatching such an
 *  >     action, and you'll find the mistake sooner.
 *
 * Following that suggestion, we will collect and export all actions as string
 * constants from this module.
 *
 * We are not currently exporting action creators (see that documentation to
 * learn more about them). This may change in the future as the need arises,
 * but for now all scripts can dispatch to the store directly.
 *
 * > Action creators have often been criticized as boilerplate. Well, you don't
 * > have to write them!
 */

/* street */
export const REPLACE_STREET_DATA = 'REPLACE_STREET_DATA'

export const ADD_SEGMENT = 'ADD_SEGMENT'
export const REMOVE_SEGMENT = 'REMOVE_SEGMENT'
export const MOVE_SEGMENT = 'MOVE_SEGMENT'
export const CHANGE_SEGMENT_WIDTH = 'CHANGE_SEGMENT_WIDTH'
export const CHANGE_SEGMENT_VARIANT = 'CHANGE_SEGMENT_VARIANT'
export const CHANGE_SEGMENT_PROPERTIES = 'CHANGE_SEGMENT_PROPERTIES'
export const UPDATE_SEGMENTS = 'UPDATE_SEGMENTS'

export const ADD_LOCATION = 'ADD_LOCATION'
export const CLEAR_LOCATION = 'CLEAR_LOCATION'

export const SAVE_STREET_NAME = 'SAVE_STREET_NAME'
export const SAVE_CREATOR_ID = 'SAVE_CREATOR_ID'
export const SAVE_STREET_ID = 'SAVE_STREET_ID'
export const SET_UPDATE_TIME = 'SET_UPDATE_TIME'
export const SAVE_ORIGINAL_STREET_ID = 'SAVE_ORIGINAL_STREET_ID'
export const UPDATE_EDIT_COUNT = 'UPDATE_EDIT_COUNT'
export const SET_UNITS = 'SET_UNITS'
export const UPDATE_STREET_WIDTH = 'UPDATE_STREET_WIDTH'
export const UPDATE_SCHEMA_VERSION = 'UPDATE_SCHEMA_VERSION'

// BUILDINGS
export const ADD_BUILDING_FLOOR = 'ADD_BUILDING_FLOOR'
export const REMOVE_BUILDING_FLOOR = 'REMOVE_BUILDING_FLOOR'
export const SET_BUILDING_FLOOR_VALUE = 'SET_BUILDING_FLOOR_VALUE'
export const SET_BUILDING_VARIANT = 'SET_BUILDING_VARIANT'

// ENVIRONMENT
export const SET_ENVIRONMENT = 'SET_ENVIRONMENT'
