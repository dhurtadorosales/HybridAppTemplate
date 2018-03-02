import { User } from './user.model';

export class Alias {
    constructor(
        public id: number,
        public name: string,
        public origin: string,
        public user: User
    ) {}
}