export class UserModel {
    id: string;
    fname: string;
    lname: string;
    login: string;
    avatar: string;

    constructor(id= '', fname= '', lname= '', login= '') {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.login = login;
    }
}
