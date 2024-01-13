const generateResume = (req, res) => {
    try {
        const { userData } = req.body;
        console.log("USER data: ", userData);
    } catch (error) {
        console.log(error.message);
        res.send({
            message: 'Internal Server error',
            error: error.message
        })
    }
}

module.exports = {generateResume};