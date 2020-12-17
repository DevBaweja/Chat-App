// State
import state from '../../state';
// Models
import Status from '../../models/Status';

export const controlStatus = async info => {
    console.log('Status');

    let inputs = {
        status: info.mode,
    };

    //  Init Status
    if (!state['status']) state['status'] = new Status(inputs);
    state['status'].setInputs(inputs);

    try {
        // Making API call
        const data = await state['status'].updateStatus();
        switch (data.status) {
            case 'success':
                {
                }
                break;
        }
    } catch (err) {
        console.log('ERROR', err.message);
    }
};

// ! For Development
window.controlStatus = controlStatus;
