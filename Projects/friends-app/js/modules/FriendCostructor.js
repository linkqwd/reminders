export default class Friend {
    constructor(props) {
        this.photo = props.photo;
        this.name = props.name;
        this.lastName = props.lastName;
        this.fullName = props.name + props.lastName;
        this.age = props.age;
        this.cell = props.cell;
        this.gender = props.gender;
        this.id = props.id;
        this.isPresentInList = true;
    }

    showInList() {
        document.getElementById(this.id).classList.remove('hidden');
        this.isPresentInList = true;
    }

    removeFromList() {
        document.getElementById(this.id).classList.add('hidden');
        this.isPresentInList = false;
    }

    static buildFriend(friend) {
        return new Friend({
            photo: friend.picture.large,
            name: friend.name.first,
            lastName: friend.name.last,
            gender: friend.gender,
            cell: friend.cell,
            age: friend.dob.age,
            id: friend.login.uuid,
        });
    };
}