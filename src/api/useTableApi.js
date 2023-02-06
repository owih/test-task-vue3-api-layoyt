export default () => {
    return fetch('http://127.0.0.1:5173/response.json');
};


// TODO: CORS блокиркует запрос?
// export default () => {
//     return fetch('https://ei-adult.way2wei.space/response.json', {
//         mode: 'no-cors',
//     });
// };