import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {

    const admin = await prisma.role.upsert({
        where: {
            role: 'admin',
        },
        update: {},
        create: {
            roleId: 1,
            role: 'admin',

        }
    })

    const user = await prisma.role.upsert({
        where: {
            role: 'user',
        },
        update: {},
        create: {
            roleId: 2,
            role: 'user',
    
        }
    })
    
}

main()

  .then(async () => {

    await prisma.$disconnect()

  })

  .catch(async (e) => {

    console.error(e)

    await prisma.$disconnect()

    process.exit(1)

  })