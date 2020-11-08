import { createStore } from "redux";

const initData = {
    data: [],
    message: 'please type message:',
    mode: 'default',
    foundData: []
};

// レデューサー
export function noteReducer(state = initData, action) {
    switch (action.type) {
        case 'ADD' :
            return addReduce(state, action);
        case 'DELETE':
            return deleteReduce(state, action);
        case 'FIND' :
            return findReduce(state, action);
        default :
            return state;
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
        if (value.message.indexOf(find) >= 0) {
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

// アクションクリエーター

// メモ追加アクション
export function addNote(text) {
    return {
        type: 'ADD',
        message: text
    }
}

// メモ削除アクション
export function deleteNote(num) {
    return {
        type: 'DELETE',
        index: num
    }
}

// メモ検索アクション
export function findNote(text) {
    return {
        type: 'FIND',
        find: text
    }
}

export default createStore(noteReducer);
