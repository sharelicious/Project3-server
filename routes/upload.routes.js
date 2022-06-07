const router = require("express").Router()

const uploader = require('./../config/cloudinary.config')

router.post('/image', uploader.single('imageData'), (req, res) => {

    if (!req.file) {
        res.status(500).json({ errorMessage: 'Error caragndo el archivo' })
        return
    }

    res.json({ cloudinary_url: req.file.path })
})


router.get('/image', (req, res) => {

    res.status(200).json({ hola:'hola' })
})





module.exports = router