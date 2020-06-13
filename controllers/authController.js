module.exports = {
    enter: (req, res) => {
        return res.status(200).send(
            `Welcome:\nYou have entered the correct secret for ${req.params.name}`)
    }
}