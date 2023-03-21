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
// @desc    Get one show
// @route   GET /shows/:id
// @access  Public
router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        const show = await Show.findById(id);
        res.status(200).json(show);
    } catch (error) {
        next(error);
    }
});
// @desc    Create one show
// @route   POST /shows
// @access  Public
router.post('/', async (req, res, next) => {
    const { title, creator, launched, genre, image, description } = req.body;
    try {
        const newShow = await Show.create(req.body);
        res.status(201).json(newShow)
    } catch (error) {
        next(error);
    }
})
// @desc    Edit one show
// @route   Put /shows/:id
// @access  Public
router.put('/:id', async (req, res, next) => {
    const { id } = req.params;
    const { title, creator, launched, genre, image, description } = req.body;
    try {
        const editedShow = await Show.findByIdAndUpdate(id, req.body, { new: true })
        console.log(editedShow)
        res.status(200).json(editedShow);
    } catch (error) {
        next(error);
    }
});
// @desc    Delete one show
// @route   Delete /shows/:id
// @access  Public
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