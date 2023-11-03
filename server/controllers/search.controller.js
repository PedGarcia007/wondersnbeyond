const Beyond = require('../models/beyonds.model');
const Deity = require('../models/deities.model');
const Potion = require('../models/potions.model');
const Spell = require('../models/spells.model');

exports.searchItems = async (req, res) => {
    const searchTerm = req.query.q;
    if (!searchTerm) {
        return res.status(400).json({ message: 'Blank search' });
    }

    const regex = new RegExp(searchTerm, 'i');

    try {
        const beyonds = await Beyond.find({ $or: [{ title: regex }, { post: regex }, { author: regex }] });
        const deities = await Deity.find({ $or: [{ name: regex }, { pantheon: regex }, { attributes: regex }, { mythology: regex }, { symbols: regex }] });
        const potions = await Potion.find({ $or: [{ name: regex }, { purpose: regex }, { materials: regex }] });
        const spells = await Spell.find({ $or: [{ name: regex }, { purpose: regex }, { materials: regex }] });

        const result = [...beyonds, ...deities, ...potions, ...spells];
        if (result.length === 0) {
            return res.status(404).json({ message: 'Data not present' });
        }

        return res.json(result);
    } catch (error) {
        return res.status(500).json({ message: 'Server error' });
    }
};
