const SERVER_BASE_URL = `https://sinergi-server.herokuapp.com`


const Login = async(params) => {

    let url = `${SERVER_BASE_URL}/user/login`
    return await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    })
}

const Register = async(params) => {

    let url = `${SERVER_BASE_URL}/user/register`
    return await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    })
}

//  Report sec

const Post = async(params) => {

    let url = `${SERVER_BASE_URL}/report`
    return await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'token' : params.token
        },
        body: JSON.stringify(params.reportData),
    })
}

const Update = async(params) => {
    let url = `${SERVER_BASE_URL}/report/update`
    return await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'token' : params.token
        },
        body: JSON.stringify(params.reportData),
    })
}

const GetAll = async(params) => {

    let url
    if (params.role == 1) {
        url = `${SERVER_BASE_URL}/report`
    } else {
        url = `${SERVER_BASE_URL}/report?id=${params.id}`
    }
    return await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'token' : params.token
        }
    })
}


const Report = {
    Post,
    GetAll,
    Update
}
// 



const SinergiAPi = {
    Login,
    Register,
    Report
}

export default SinergiAPi