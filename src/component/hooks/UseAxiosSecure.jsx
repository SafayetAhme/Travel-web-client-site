import axios from "axios";

const axisoSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const UseAxiosSecure = () => {
    // const navigate = useNavigate();
    // const { logOut } = UseAuth();
    axisoSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        console.log('request stopped by interseptors', token)
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });



    // intercepts 401 and 403 status
    axisoSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response.status;
        console.log('status error in the intercaptor', status);
        // for 401 or 403 logout the user and move
        if (status === 401 || status === 403) {
            // await logOut();
            // navigate('/signin')
        }
        return Promise.reject(error);
    })

    return axisoSecure;
};

export default UseAxiosSecure;