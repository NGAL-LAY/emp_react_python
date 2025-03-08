const AuthService = {
    login : async(username, password) => {
        const validUsername = 'admin';
        const validPassword = 'root';
        // const response = await fetch('api/auth/login',{
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ username, password }),
        // });

        // if(!response.ok){
        //     throw new Error('Login failed');
        // }
        if (username === validUsername && password === validPassword) {
            const fakeToken = 'hardcoded-token'; 
            localStorage.setItem('token', fakeToken); 
            return fakeToken;
          }else{
            throw new Error('Invalid username or password');
          }
        // const data = await response.json();
        // localStorage.setItem('token', data.token); // Save token
        // return data.token;
    },

    logout: () => {
        localStorage.removeItem('token');
      },

    isAuthenticated: () => !!localStorage.getItem('token'),
}

export default AuthService;