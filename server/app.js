const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

const { Salesman, Customer, Order } = require('./models/index')
const db = require('./models/index')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/', async (req, res) => {
    try {
        let salesmans = await Salesman.findAll({
            attributes: ['id', 'Salesman_name']
        })

        res.json(salesmans)

    } catch (error) {
        res.status(500).json({ message: 'ISE' })
    }
})

app.get('/salesman/:id', async (req, res) => {
    try {
        const { id } = req.params
        let data = await Salesman.findOne({
            where: { id },
            include: [{
                model: Order,
            }]
        })
        let totalAmount = 0
        let totalOrder = 0

        data.Orders.forEach(el => {
            totalAmount += el.Amount
            totalOrder++
        });

        let totalCommission = totalAmount * data.Commission

        let sales = {
            name: data.Salesman_name,
            city: data.Salesman_city,
            commission: data.Commission,
            totalCommission,
            totalOrder,
            totalAmount
        }

        res.json(sales)

    } catch (error) {
        res.status(500).json({ message: error })
    }
})

app.get('/order/:id', async (req, res) => {
    try {
        const Salesman_id = req.params.id
        let data = await Order.findAll({
            where: { Salesman_id },
            include: [{
                model: Customer,
            }]
        })

        res.json(data)

    } catch (error) {
        res.status(500).json({ message: error })
    }
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})