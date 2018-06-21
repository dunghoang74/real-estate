const PageModel = require('../models/pageModel');
const multer = require('multer');

const createPage = (req, res, next) => {

    for(let i = 0; i < req.body.length; i++){
        const page = new PageModel(req.body[i]);

        page.save()
            .then(newCategory => {
                res.status(200).send(newCategory)
            })
            .catch(err => {
                res.status(500).send({error: "Something went wrong saving your category information", info: err});
            });
    }

};

const getPage = (req, res) => {
    const userId = req.params.userId;

    PageModel.find({ _user: userId})
        .populate('_user')
        .exec((err, resp) => {
            if (err) return  res.status(500).send(err);
            res.status(200).send(resp)
        });
};

const updatePage = (req, res) => {
    // PageModel.find({'parent': '/' + req.params.parent})
    //     .populate()
    //     .exec((err, resp) => res.status(200).send(resp));
}; 

const uploadLogo = (req, res, next) => {
    PageModel._user = req.decoded.user._id;

    PageModel.find({ _user: PageModel._user })
        .populate()
        .exec((err, resp) => {
            const NewPagModel = new PageModel();
            NewPagModel._user = req.decoded.user._id;
            NewPagModel.logo.public_id=req.body.public_id;
            NewPagModel.logo.secure_url= req.body.secure_url;
            NewPagModel.logo.response= req.body;

            if(resp.length > 0 && err === null){
                
                PageModel.findOneAndUpdate({ _user: PageModel._user}, 
                    {  
                        logo:{
                            public_id:req.body.public_id,
                            secure_url: req.body.secure_url,
                            response: req.body,
                        } 
                        
                    }, {new: true})
                    .populate()
                    .exec((err, response) => {
                        if (err) return  res.status(500).send(err);
                        res.status(200).send(response);
                });

            }else{
                NewPagModel.save()
                    .then(newImg => {
                        res.status(200).send(newImg)
                    })
                    .catch(err => {
                        res.status(500).send({error: "Something went wrong saving your logo", info: err});
                    });
            }
        });
}

const uploadHeader = (req, res, next) => {
    PageModel._user = req.decoded.user._id;

    PageModel.find({ _user: PageModel._user })
        .populate()
        .exec((err, resp) => {
            const NewPagModel = new PageModel();
            NewPagModel._user = req.decoded.user._id;
            NewPagModel.header.public_id=req.body.public_id;
            NewPagModel.header.secure_url= req.body.secure_url;
            NewPagModel.header.response= req.body;

            if(resp.length > 0 && err === null){
                
                PageModel.findOneAndUpdate({ _user: PageModel._user}, 
                    {  
                        header:{
                            public_id:req.body.public_id,
                            secure_url: req.body.secure_url,
                            response: req.body,
                        } 
                        
                    }, {new: true})
                    .populate()
                    .exec((err, response) => {
                        if (err) return  res.status(500).send(err);
                        res.status(200).send(response);
                });

            }else{
                NewPagModel.save()
                    .then(newImg => {
                        res.status(200).send(newImg)
                    })
                    .catch(err => {
                        res.status(500).send({error: "Something went wrong saving your logo", info: err});
                    });
            }
        });
}


const deletePage = (req, res) => {
    // PageModel.find({})
    //     .populate()
    //     .exec((err, resp) => res.status(200).send(resp));
};

module.exports = {createPage, getPage, updatePage, deletePage, uploadLogo, uploadHeader};


