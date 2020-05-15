export const TOKEN_KEY = "@JWT-Token";

export const isAuthenticated = () =>  true;

// // export const isAuthenticated = () =>  {
// //     if(localStorage.getItem(TOKEN_KEY) !== null) {
// //         return true;
// //     }
// // };

export const getToken = localStorage.getItem(TOKEN_KEY);

export const login = token => {
    localStorage.setItem(TOKEN_KEY, token);
};

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
}
