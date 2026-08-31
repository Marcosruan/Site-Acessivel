import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
    await prisma.alternative.deleteMany();
    await prisma.exercise.deleteMany();
    await prisma.video.deleteMany();
    await prisma.article.deleteMany();
    const artigo = await prisma.article.create({
        data: {
            title: 'Artigo de Teste 01',
            slug: 'artigo-de-teste-01',
            summary: 'Resumo temporário para testes.',
            content: 'Lorem ipsum dolor sit amet... Aqui vai o conteúdo principal do artigo.',
            order: 1,
            videos: {
                create: [
                    { title: 'Vídeo Exemplo', url: 'https://youtube.com/exemplo' }
                ]
            },
            exercises: {
                create: [
                    {
                        prompt: 'Qual a resposta correta para este teste?',
                        alternatives: {
                            create: [
                                { text: 'Alternativa errada', isCorrect: false },
                                { text: 'Alternativa certa', isCorrect: true }
                            ]
                        }
                    }
                ]
            }
        }
    });
    console.log('Banco populado com sucesso!', artigo);
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map