import state from '../../state';
// Model
import Init from '../../models/Init';
// Views

export const controlInit = async () => {
    console.log('Initializing App');

    // 1) Initializing init
    state.init = new Init();

    try {
        const io = await state.init.establishConnection();
    } catch (err) {
        // Error Alert
        console.log('ERROR', err.message);
    }
};
