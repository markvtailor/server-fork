//хз где такие функции должны находиться, потом разберусь
import * as bcrypt from 'bcrypt'

export class PasswordEncoder {

    async encode(password: string) {
        const saltOrRounds = 8
        const hash = await bcrypt.hash(password, saltOrRounds)
        return hash
    }

    async checkPassword(password: string, hash: string) {
        const comparsionResult = await bcrypt.compare(password, hash)
        return comparsionResult
    }
}