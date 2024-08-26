import { createContext, useState, useEffect,  } from "react";
import axios from "axios";

export const Authentication = createContext<any>('')

const AuthenProvider = ({children}: {children: JSX.Element}) => {
    const [isAuth, setIsAuth] = useState<boolean>(false)

    // Refresh token - API /logout not delete refresh token so this function always run
    useEffect(() => {
          const createAxiosResponseInterceptor = () => {
            const interceptor = axios.interceptors.response.use(
              (response) => response,
              (error) => {
                if (error.response.status !== 401) {
                  return Promise.reject(error);
                }
                axios.interceptors.response.eject(interceptor);
                return axios
                  .post("https://api-test-web.agiletech.vn/auth/refresh-token", {
                    refreshToken:
                      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJhZG1pbjEiLCJpYXQiOjE3MjQ1ODk4MDQsImV4cCI6MTcyNzE4MTgwNH0.NGcaxcn_A8DZ4D5Udi8EQPUywl85eS0K4WkoJmvVcD0",
                  })
                  .then((response) => {
                    error.response.config.headers["Authorization"] =
                      "Bearer " + response.data.accessToken;
                    localStorage.setItem('ACCESS_TOKEN', JSON.stringify(response.data.accessToken))
                    setIsAuth(true)
                    return axios(error.response.config);
                  })
                  .catch((error2) => {
                    setIsAuth(false)
                    return Promise.reject(error2);
                  })
                  .finally(createAxiosResponseInterceptor); 
              }
            );
          };
          createAxiosResponseInterceptor();
        })
  useEffect(() => {
    const getToken = async () => {
      let token: string | null = localStorage.getItem("ACCESS_TOKEN");
      if (!token) {
        setIsAuth(false);
        return false;
      } else {
        token = JSON.parse(token);
        axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        setIsAuth(true)
        return true;
      }
    };
    getToken();
  });    
    return (
        <Authentication.Provider value={{isAuth, setIsAuth}}>
            {children}
        </Authentication.Provider>
    )
}

export default AuthenProvider