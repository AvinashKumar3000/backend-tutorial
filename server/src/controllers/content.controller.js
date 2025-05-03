const contentService = require('../services/content.service');

exports.addNewContent = async function (req, res) {
    try {
        const payload = req.body;
        const { text, isPrivate } = payload;
        await contentService.addContent(text, isPrivate);
        res.status(201).json({
            status: true,
            message: 'content added successfully',
        });
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error.message,
        });
    }
};

exports.getPrivateContents = async function (req,res) {
    try {
        const contents = await contentService.getPrivateContents();
        res.status(200).json({
            status: true,
            message: 'got your information',
            data: contents
        });
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error.message,
        });
    }
}

exports.getPublicContents = async function (req,res) {
    try {
        const contents = await contentService.getPublicContents();
        res.status(200).json({
            status: true,
            message: 'got your information',
            data: contents
        });
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error.message,
        });
    }
}