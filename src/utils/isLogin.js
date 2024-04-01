const authLogin = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        return true;
    }
    return false;
}

export { authLogin }