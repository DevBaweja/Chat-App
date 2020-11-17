const factory = require('./handleFactory');
const Setting = require('../models/settingModel');

// User Route Handlers
exports.getAllSettings = factory.getAll(Setting);
exports.getSettingById = factory.getOne(Setting);
exports.createNewSetting = factory.createOne(Setting);
exports.updateSettingById = factory.updateOne(Setting);
exports.deleteSettingById = factory.deleteOne(Setting);
