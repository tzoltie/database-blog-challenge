const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {

  const usersPromise = [
    { username: 'amartin',
      email:    'amartin@gmail.com',
      isVerified: true,
      profile: {
        create: {
            profilePicture: '',
            firstName: 'Alice',
            lastName: 'Martin',
            bio: 'asdsdnbsknds',
        }
      }
    },
    { username: 'fboyle',
      email:    'franky@comedy.com',
      isVerified: true,
      profile: {
        create: {
            profilePicture: '',
            firstName: 'Frankie',
            lastName: 'Boyle',
            bio: 'ksndfkasnkadsn',
        }
      }
    },
    {
      username: 'jimmyBoab',
      email:    'boabbyJ@maboabby.com',
      isVerified: true,
      profile: {
        create: {
            profilePicture: '',
            firstName: 'Jimmy',
            lastName: 'Boab',
            bio: 'sdknfkdsnf',
        }
      }
    }
  ].map(user => prisma.user.create({
    data: user,
    include: {
      profile: true
    }
  }))

    const users = await Promise.all(usersPromise)

    console.log(`users created`, users);


    


    // Don't edit any of the code below this line
    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })