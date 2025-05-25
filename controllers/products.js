const getAllProducts = async (req, res) => {
    res.status(200).json({ msg: 'get all products' });
}

const getOneProduct = async (req, res) => {
    throw new Error('i havent writtten this yet baka');
}

module.exports = {
    getAllProducts,
    getOneProduct,
};