import { PHOTO_SELECTED } from '../actions/index';
import bulldog from '../bulldog.jpg';

export default function(state = { photo: { bulldog } }, action) {
  switch (action.type) {
    case PHOTO_SELECTED:
      return action.payload;
  }
  return state;
}
