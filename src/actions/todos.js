
/**
 * Add New Task
 * 
 * @param {*} text 
 */
export const addTodo = function (text) {
    return {
        type: 'ADD_TASK',
        text
    }
};

/**
 * Remove Task
 * 
 * @param {*} id 
 * @param {*} text 
 */
export const removeTodo = function (id) {
    return {
        type: 'REMOVE_TASK',
        id
    }
};

/**
 * Complete Task
 * 
 * @param {*} id 
 */
export const checkTodo = function (id) {
    return {
        type: 'CHECK_TASK',
        id
    }
};
