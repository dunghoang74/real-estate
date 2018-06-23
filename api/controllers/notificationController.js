const NotificationModel = require('../models/notificationModel');

const createNotification = (req, res, next) => {

    const notification = new NotificationModel(req.body);

    notification.save()
        .then(newNotification => {
            res.status(201).send(newNotification)
        })
        .catch(err => {
            res.status(500).send({error: "Something went wrong saving your notification information", info: err});
        });


};

const getNotifications = (req, res) => {
    NotificationModel.find({})
        .populate()
        .exec((err, resp) => res.status(200).send(resp));
};


module.exports = {createNotification,getNotifications };


