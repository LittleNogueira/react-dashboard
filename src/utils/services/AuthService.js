import axios from 'axios';

const AuthService = {

    login : login => {
        return axios.post('http://localhost:8080/api/auth', {...login}).then(res => res.json());
    }

}

export default AuthService;