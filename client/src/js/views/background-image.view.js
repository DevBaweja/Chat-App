import { elementStrings, select } from '../utils/base.util';

export const clearBackgroundImage = () => (select(elementStrings.chatBox.background).style.backgroundImage = '');

export const renderBackgroundImage = ({ rgba, img }) => {
    const backgroundString = `linear-gradient(to right bottom, ${rgba},${rgba}), url(img/background-image/${img}.jpg)`;

    select(elementStrings.chatBox.background).style.backgroundImage = backgroundString;
};
