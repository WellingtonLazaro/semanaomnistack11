const connection = require('../database/connections')


module.exports = {
    async store (req, res) {
        const { id } = req.body

        const ong = await connection('ongs')
        .where('id', id)
        .select('name')
        .first()

        if (!ong) {
            return res.status(400).json({ error: 'achei essa ong n véi' })
        }

        return res.json(ong)
    }
}