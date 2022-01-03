import { ModifiersStatus, ModifiersStyles } from 'types/Modifiers';

export function getStyle(
  modifiersStatus: ModifiersStatus,
  modifiersStyles: ModifiersStyles
) {
  let style = {};
  Object.keys(modifiersStatus).forEach((modifier) => {
    style = {
      ...style,
      ...modifiersStyles?.[modifier]
    };
  });
  return style;
}
