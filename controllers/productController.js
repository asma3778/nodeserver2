const getAllProducts = async (req,res) =>{
    try{
        const  products = [
            {id: 1, title: "laptop"},
            {id: 2, title: "PC"},
            {id: 3, title: "Camera"},
            {id: 4, title: "Smart Phone"},
        ]
        return res.send(products)
    }catch (error){
        return res.status(500).send({message: error.message})
    }
}

module.exports = {getAllProducts}