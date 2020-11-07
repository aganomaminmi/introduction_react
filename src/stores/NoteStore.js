import { createStore } from "redux";

const initData = {
    data: [{message: 'sample data', created: new Date()}],
    message: 'please type message:',
    mode: 'default',
    foundData: []
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
        foundData: []
    };
}

// メモ検索レデュース
function findReduce(state, action) {
    let find = action.find;
    let foundData = [];
    state.data.forEach( value => {
        if (value.message.indexof(find) >= 0) {
            foundData.push(value);
        }
    });

    return {
        data: state.data,
        message: 'find "' + find + '":',
        mode: 'find',
        foundData: foundData
    }

}

// メモ削除
function deleteReduce(state, action) {
    let newData = state.data.slice();
    newData.splice(action.index, 1)
    return {
        data: newData,
        message: 'delete "' + action.index + '":',
        mode: 'delete',
        foundData: [],
    }
}

export default createStore();
