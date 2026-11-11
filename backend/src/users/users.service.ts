import { Injectable } from '@nestjs/common';
import { User } from '../types/userType';

@Injectable()
export class UsersService {
    private users: User[] = [
        {
            id: '1',
            name: 'John Doe',
            email: 'john.doe@example.com',
            role: 'user',
        },
        {
            id: '2',
            name: 'Jack Smith',
            email: 'jack.smith@example.com',
            role: 'user'
        },
            {
            id: '3',
            name: ' Jill Smith',
            email: 'jill.smith@example.com',
            role: 'user'
        },
            {
            id: '4',
            name: ' Rene Smith',
            email: 'rene.smith@example.com',
            role: 'user'
        },
            {
            id: '5',
            name: 'Philip Smith',
            email: 'philip.smith@example.com',
            role: 'user'
        },

    ];

    findAll(): User[] { 
        return this.users;
    }
    findOne(id: string): User {
        return this.users.find(user => user.id === id) as User;
    }
    create(user: User): User {
        const newid = (this.users.length + 1).toString();
        const newUser: User = {
             ...user,
              id: newid 
            };
        this.users.push(newUser);
        return newUser;
    }
    update(id: string, user: User): User {
        const index = this.users.findIndex((user) => user.id === id);
        this.users[index] = user;
        return user;
    }
    delete(id: string): string {
        this.users= this.users.filter((user) => user.id !== id);
        return `User deleted successfully`;
    }
}