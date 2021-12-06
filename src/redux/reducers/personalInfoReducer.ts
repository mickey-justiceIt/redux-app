const SET_USER_DATA = 'SET_USER_DATA'

interface InitialStateType {
    id: number | null
    firstName: string | null
    lastName: string | null
    workPlace: string | null
    budget: number | null
    isAuth: boolean
}

let initialState: InitialStateType = {
    id: null,
    firstName: null,
    lastName: null,
    workPlace: null,
    budget: null,
    isAuth: false
}

type PersonalInfoPayloadType = {
    id: number
    firstName: string
    lastName: string
    workPlace: string
    budget: number
    isAuth: boolean
}

type SetUserDataActionType = {
    type:  typeof SET_USER_DATA
    payload: PersonalInfoPayloadType
}


export const personalInfoReducer = (state = initialState, action:SetUserDataActionType) => {
    switch (action.type){
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state

    }
}

const setUserData = (id: number,firstName: string,lastName: string,workPlace: string,budget: number,isAuth:boolean): SetUserDataActionType => ({
    type: SET_USER_DATA,
    payload:
        {id,firstName,lastName,workPlace,budget,isAuth}
})

const getUserData = (id: number,firstName: string,lastName: string,workPlace: string,budget: number,isAuth:boolean) => async (dispatch: any) => {
    let response = await getUserAPI.info()

    if(response.data.resultCode === 0){
        let {id,firstName,lastName,workPlace,budget,isAuth} = response.data.data
        dispatch(setUserData(id,firstName,lastName,workPlace,budget,isAuth))
    }
}
