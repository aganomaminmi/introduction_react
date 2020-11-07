import { createStore } from "redux";

const initData = {
    data: [{message: 'sample data', created: new Date()}],
    message: 'please type message:',
    mode: 'default',
    fdata: []
};

// レデューサー
export function noteReducer(state = initData, action) {
    switch (action.type) {
        case 'ADD' :
            return;
        case 'DELETE':
            return;
        case 'FIND' :
            return;
        default :
            return;
    }
}

// レデュースアクションズ

// メモ追加
function addReduce(state, action) {
    let data = {
        message: action.message,
        created: new Date()
    };
    let newData = state.data.slice();
    newData.unshift(data);
    return {
        data: newData,
        message: 'Added!',
        mode: 'default',
        fdata: []
    };
}

export default createStore();
