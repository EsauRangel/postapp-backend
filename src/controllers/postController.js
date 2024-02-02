const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

const show = async (req, res = express.request) => {
    try {
        const { q } = req.query;
        let posts = prisma.post;

        if (q) {
            posts = await posts.findMany({
                where: {
                    OR: [
                        {
                            author: {
                                contains: q,
                            },
                        },
                        {
                            title: {
                                contains: q,
                            },
                        },
                        {
                            content: {
                                contains: q,
                            },
                        },
                    ],
                },
            });
        } else {
            posts = await posts.findMany();
        }


        return res.status(200).json({
            ok: true,
            posts
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: error
        })
    }
}

const store = async (req, res = express.request) => {
    try {
        const post = await prisma.post.create({ data: req.body });
        return res.status(201).json({
            ok: true,
            post
        })

    } catch (error) {
        res.json({
            ok: false,
            msg: error
        })
    }
}


module.exports = { show, store }