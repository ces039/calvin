export const PHOTO_SELECTED = 'PHOTO_SELECTED';

export function selectPhoto(photo) {
  return {
    type: PHOTO_SELECTED,
    payload: photo
  };
}
