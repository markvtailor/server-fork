import { Injectable } from "@nestjs/common";
import { Role } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { PasswordEncoder } from "src/auth/auth.utils"

@Injectable()

export class AuthService {

    constructor(private prismaService: PrismaService, private encoder: PasswordEncoder) { }

    async register (body: { username: string, password: string, email: string, role: string} ) {
        const encryptedPassword = await this.encoder.encode(body.password)
        const new_user = this.prismaService.user.create({
            data: {
                username: body.username,
                password: encryptedPassword,
                email: body.email,
                role: {
                    create: {
                        roleId: 1,
                        role: body.role
                    }
                }
            }
        })
        return new_user
    }

}