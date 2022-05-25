import Cookies from 'js-cookie'

const get = (name) => {
    return Cookies.get(name)
}

const save = (name, value, expires) => {
    Cookies.set(name, value, { expires: expires, path: '' })
}

const cookies = {
    get,
    save
}

export default cookies