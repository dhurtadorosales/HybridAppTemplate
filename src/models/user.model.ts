export class User {
    constructor(
        public id: number,
        public email: string,
        public pass: string,
        public name: string,
        public lastName: string,
        public admin: boolean,
        public active: boolean
    ) {}
}