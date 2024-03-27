export const METHOD = {
    POST: 'POST',
    GET: 'GET',
    DELETE: 'DELETE',
}

export const CONTAINER_STYLE_BY_METHOD = {
    [METHOD.POST]: {border: '1px solid #49cc90'},
    [METHOD.GET]: {border: '1px solid #61affe'},
    [METHOD.DELETE]: {border: '1px solid #f93e3e'}
}

export const BAR_STYLE_BY_METHOD = {
    [METHOD.POST]: {background: '#eaf6f0'},
    [METHOD.GET]: {background: '#ecf3fb'},
    [METHOD.DELETE]: {background: '#fbe8e8'}
}

export const METHOD_STYLE = {
    [METHOD.POST]: {background: '#49cc90'},
    [METHOD.GET]: {background: '#61affe'},
    [METHOD.DELETE]: {background: '#f93e3e'}
}

export const REQUEST_TYPE = [
    'application/json; v=1.0',
    'text/json; v=1.0',
    'application/*+json; v=1.0',
    'application/x-protobuf; v=1.0'
];       