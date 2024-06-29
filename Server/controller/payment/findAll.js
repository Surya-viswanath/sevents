import Transaction from "../../modal/Transaction";


const findAll = async (req, res) => {
    try {
        const result = await Transaction.find({ paidStatus: true });
        res.send(result)
    } catch (error) {
        return res.send(error);
    }
}

export default findAll;