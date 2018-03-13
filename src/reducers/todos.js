

// Set Initial State
const initialState = [
    {
        text: 'First ToDo',
        done: false,
    }
];

export default (state = initialState, action =  {}) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    text: action.text,
                    done: false
                }
            ]
            break;
        
        case 'CHECK_TODO':
            return state.map(todo => {
                if(todo.id === action.id) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            });
        default:
            break;
    }
};