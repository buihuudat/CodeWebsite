import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (posts = [], action) => {
    switch (action.type) {
        case FETCH_ALL:            
            return action.payload;
        case LIKE:
            return posts.map((post) => (post.id === action.payload._id ? action.payload : post));
        case CREATE:
            return [...posts, action.payload];
        case UPDATE:
            return posts.map((post) => (post.id === action.payload._id ? action.payload : post));
        case DELETE:
            return posts.filter((post) => post.id !== action.payload);
        default:
            return posts;
    }
};