import axios from 'axios'

export const login = (email,password)=>async dispatch=>{
    try{
        dispatch({
            type:"USER_LOGIN_REQUEST",
            
        })

        const config={
            headers:{'Content-type':'application/json'}
        }
        const{data}=await axios.post('/api/users/login/',{'username':email,'password':password},config)
        
        dispatch({
            type:"USER_LOGIN_SUCCESS",
            payload:data
            
        })

        localStorage.setItem('userInfo',JSON.stringify(data))

    }
    catch(error){
        dispatch({
            type:"USER_LOGIN_FAIL",
            payload:"something went wrong"
        })
    }
}


export const logout=()=>dispatch=>{
    localStorage.removeItem('userInfo')
    console.log("this is logout action")
    dispatch({
        type:"USER_LOGOUT"
        
    })
}



export const register = (name, email, password) => async (dispatch) => {
    try {
        dispatch({
            type: 'USER_REGISTER_REQUEST'
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            'http://127.0.0.1:8000/api/users/register/',
            { 'name': name, 'email': email, 'password': password },
            config
        )
            console.log("benchod isko padhane nahi aata",data)
        dispatch({
            type: 'USER_REGISTER_SUCCESS',
            payload:"Successfully Registered"
        })

        

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        console.log("bc seedha catch mee")
        dispatch({
            type: 'USER_REGISTER_FAIL',
            payload: 'SUCCESSFULLY REGISTERED'
        })

    }
}


export const getUserDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: 'USER_DETAILS_REQUEST'
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(
            `/api/users/${id}/`,
            config
        )

        dispatch({
            type: 'USER_DETAILS_SUCCESS',
            payload: data
        })


    } catch (error) {
        dispatch({
            type: 'USER_DETAILS_FAIL',
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const updateUserProfile = (user) => async (dispatch, getState) => {
    try {
        dispatch({
            type: 'USER_UPDATE_PROFILE_REQUEST'
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.put(
            `/api/users/profile/update/`,
            user,
            config
        )

        dispatch({
            type: 'USER_UPDATE_PROFILE_SUCCESS',
            payload: data
        })

        dispatch({
            type: 'USER_LOGIN_SUCCESS',
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: 'USER_UPDATE_PROFILE_FAIL',
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


