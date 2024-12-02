import { createFullName } from './names.js';
import { createHobbies } from './hobbies.js';
import chalk from 'chalk';

function createProfile() {
    const fullName = createFullName('Philip', 'Festa');
    const hobbies = createHobbies('Football', 'Basket', 'Adventures');

    return {
        fullName,
        hobbies
    };
}

const profile = createProfile();
console.log(chalk.green('Profile created:'));
console.log(chalk.blue(`Full Name: ${profile.fullName.firstName} ${profile.fullName.lastName}`));
console.log(chalk.yellow(`Hobbies: ${profile.hobbies.hobbies.join(', ')}`));