const ContentModel = require('../models/content.model');

class ContentService {
    async addContent(text, isPrivate=false) {
        await ContentModel.create({
            text,
            isPrivate
        });
    }
    async getPrivateContents() {
        const contents = await ContentModel.find({ isPrivate : true });
        return contents;
    }
    async getPublicContents() {
        const contents = await ContentModel.find({ isPrivate : false });
        return contents;
    }
}

const contentService = new ContentService();
module.exports = contentService;
