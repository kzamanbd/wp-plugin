import { createReduxStore, register } from '@wordpress/data';
import apiFetch from "@wordpress/api-fetch";

export const STORE_NAME = 'my-wp-plugin-store';

export type InitialStateType = {
    posts: any[];
    post: any;
    loading: boolean;
    error: any;
}

const initialState = {
    posts: [],
    post: {},
    loading: false,
    error: null,
} as InitialStateType;


const SET_POSTS = 'SET_POSTS';

const store = createReduxStore( STORE_NAME, {
    actions:{
        setPosts( posts: any[] ) {
            return {
                type: SET_POSTS,
                payload: posts,
            };
        },
    },
    reducer: ( state: InitialStateType = initialState, action ) => {
        if ( action.type === SET_POSTS ) {
            return {
                ...state,
                posts: action.payload,
            };
        }
        else if ( action.type === 'SET_POST' ) {
            return {
                ...state,
                post: action.payload,
            };
        }
        return state;
    },
    selectors: {
        getPosts: ( state: any ) => state.posts,
        getPost: ( state: any ) => state.post,
    },
    resolvers: {
        getPosts: () => async ({ dispatch }: any)=> {
            const response = await apiFetch({
                path: '/wp-json/wp/v2/posts',
                method: 'GET',
            });
            dispatch.setPosts( response );
        },
    },
} );

register( store );

export default store;