import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function prismaQuery() {
	// await prisma.post.deleteMany();
}

prismaQuery()
	.catch((e) => {
		console.error(e);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
