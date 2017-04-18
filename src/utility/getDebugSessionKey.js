export const getDebugSessionKey = ()=>{
    if (typeof (window) !== 'undefined') {
        const matches = window.location.href.match(/[?&]debug_session=([^&#]+)\b/);
        return (matches && matches.length > 0)? matches[1] : null;
    } else {
        return null;
    }

};