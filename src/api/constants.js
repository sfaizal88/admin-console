export const EXPERIMENT_SUBMIT_API = "/experiments/start-task";
export const EXPERIMENT_LIST_API = "/experiments/get-list";
export const UPDATE_EXPERIMENT_API = "/image/generate";
export const GET_EXPERIMENT_BY_ID_API = "/experiments/result/";
export const LOGIN_API = "https://accounts.zoho.com/oauth/v1/token";

export const JSONHeader = {
    headers: {
        'Content-Type': 'application/json',
    },
}
export const JSONFormHeader = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
}