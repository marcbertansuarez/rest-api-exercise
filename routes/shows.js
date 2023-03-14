const router = require('express').Router();
const Show = require('../models/Show');

// @desc    Get all shows
// @route   GET /shows
// @access  Public
router.get('/', async (req, res, next) => {
    try {
        const shows = await Show.find({})
        res.status(200).json(shows)
    } catch (error) {
        next(error)
    }
});

router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        const show = await Show.findById(id);
        res.status(200).json(show);
    } catch (error) {
        next(error);
    }
});

router.post('/', async (req, res, next) => {
    const { title, creator, launched, genre, image, description } = req.body;
    try {
        const newShow = await Show.create(req.body);
        res.status(201).json(newShow)
    } catch (error) {
        next(error);
    }
})

router.put('/:id', async (req, res, next) => {
    const { id } = req.params;
    const hola = req.body;
    try {
        const editedShow = await Show.findByIdAndUpdate(id, {hola}, { new: true })
        console.log(editedShow)
        res.status(200).json(editedShow);
    } catch (error) {
        next(error);
    }
});

router.delete('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        const deletedShow = await Show.findByIdAndDelete(id)
        res.status(200).json(deletedShow);
    } catch (error) {
        next(error)
    }
})


module.exports = router;