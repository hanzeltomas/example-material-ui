export interface Toast {
    hideToast: () => void;
}
export declare type UserFeedbackError = 'GENERATE_PAGE_ERROR' | 'CLONE_ELEMENT_ERROR' | 'REMOVE_ELEMENT_ERROR' | 'NAVIGATE_TO_SOURCE_CODE_ERROR' | 'CHANGE_GRAPHQL_ENDPOINT_ERROR' | 'GRAPHQL_CODEGEN_ERROR' | 'LOCAL_MESSAGE_TRANSLATE_ERROR' | 'LOAD_INTROSPECTION_ERROR' | 'CHANGE_THEME_ERROR' | 'CREATE_TABLE_ERROR' | 'ADD_COLUMN_ERROR' | 'TRANSLATE_ELEMENT_ERROR' | 'REORDER_ELEMENT_ERROR' | 'COMMIT_ALL_CHANGES_ERROR' | 'BUNDLER_ERROR' | 'TRANSPILER_ERROR' | 'LOGIN_ERROR' | 'UPDATE_DATABASE_ERROR' | 'SOURCE_NOT_FOUND_ERROR';
export declare type UserFeedbackSuccess = 'GENERATE_PAGE_SUCCESS' | 'CLONE_ELEMENT_SUCCESS' | 'REMOVE_ELEMENT_SUCCESS' | 'REMOVE_COLUMN_SUCCESS' | 'CHANGE_GRAPHQL_ENDPOINT_SUCESS' | 'LOCAL_MESSAGE_TRANSLATE_SUCESS' | 'LOAD_INTROSPECTION_SUCCESS' | 'REORDER_ELEMENT_SUCCESS' | 'CHANGE_THEME_SUCESS' | 'CREATE_TABLE_SUCCESS' | 'ADD_COLUMN_SUCCESS' | 'COMMIT_ALL_CHANGES_SUCCESS' | 'LOGIN_SUCCESS' | 'UPDATE_DATABASE_SUCCESS';
export declare type UserFeedbackInfo = 'GENERATE_PAGE_LOADING' | 'CHANGE_GRAPHQL_ENDPOINT' | 'REORDER_ELEMENT_INFO' | 'CHANGE_THEME' | 'CREATE_TABLE_INFO' | 'ADD_COLUMN_INFO' | 'ADD_COLUMN_LOADING' | 'REMOVE_COLUMN_LOADING' | 'CLONE_ELEMENT_LOADING' | 'REMOVE_ELEMENT_LOADING' | 'LOCAL_MESSAGE_TRANSLATE_INFO' | 'ERD_VIEW_INFO' | 'COMMIT_NOTHING_TO_CHANGE_INFO' | 'COMMIT_ALL_CHANGES_INFO' | 'UPDATE_DATABASE_INFO' | 'NAVIGATE_TO_SOURCE_CODE_INFO' | 'CLONE_ELEMENT_INFO' | 'REMOVE_ELEMENT_INFO';
export declare type UserFeedbackType = UserFeedbackError | UserFeedbackSuccess | UserFeedbackInfo;
export interface UserFeedback {
    type: UserFeedbackType;
    payload?: any;
}
export declare const showUserFeedback: (feedback: UserFeedback) => void;
