function User(name, gender, age, registered, req, userStatus) {
    this.userName = name || 'anonUser';
    this.userGender = gender || 'unknown';
    this.userAge = age || 'unknown';
    this.userCode = this.userGender + this.userAge;
    this.registered = registered || false;
    this.userReq = req || {};
    this.userStatus = userStatus | null;
    return {
        user: User,
    }
}

export { User }
















