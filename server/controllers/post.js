/**
 * Created by Jackson on 10/6/16.
 */
var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var User = mongoose.model('User');

var sendJSONresponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.submit = function (req, res) {
    if (!req.body.title || !req.body.content) {
        sendJSONresponse(res, 400, {
            message: "All fields required"
        });

        return;
    }

    User.findById(req.body.uuid, function (err, user) {
        if (err) {
            handleError(err);
            return;
        }

        if (!user.premium) {
            sendJSONresponse(res, 401, {
                message: "You must purchase Atropos to submit feedback"
            });

            return;
        }

        var post = new Post();
        post.title = req.body.title;
        post.content = req.body.content;
        post.priority = req.body.priority;
        post.uuid = req.body.uuid;

        post.save(function (err) {
            sendJSONresponse(res, 200, {
                message: "OK"
            })
        })
    });
};

module.exports.deleteFeedback = function (req, res) {
    if (!req.payload._id) {
        res.status(401).json({
            message: "Unauthorized"
        })
    } else {
        User.findById(req.payload._id)
            .exec(function (err, user) {
                if (user.premium) {
                    if (user.admin) {
                        Post.findByIdAndRemove(req.params.id, function (err, post) {
                            sendJSONresponse(res, 200, {
                                message: "OK"
                            })
                        })
                    } else {
                        Post.findById(req.params.id, function (err, post) {
                            if (post.uuid == user._id) {
                                Post.findByIdAndRemove(req.params.id, function (err, deletedPost) {
                                    sendJSONresponse(res, 200, {
                                        message: "OK"
                                    })
                                })
                            }
                        })
                    }
                } else {
                    sendJSONresponse(res, 401, {
                        message: "Cannot delete feedback."
                    })
                }
            });
    }
};

module.exports.getFeedback = function (req, res) {
    if (!req.payload._id) {
        res.status(401).json({
            message: "Unauthorized"
        })
    } else {
        User.findById(req.payload._id)
            .exec(function (err, user) {
                if (user.premium) {
                    if (user.admin) {
                        Post.find({}, function (err, post) {
                            sendJSONresponse(res, 200, post);
                        });
                    } else {
                        Post.find({uuid: user._id}, function (err, post) {
                            if (err) {
                                console.log(err);
                            }

                            sendJSONresponse(res, 200, post);
                        })
                    }
                } else {
                    sendJSONresponse(res, 401, {
                        message: "Cannot view feedback."
                    })
                }
            });
    }
};