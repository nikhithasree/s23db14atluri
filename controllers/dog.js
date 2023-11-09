var dog = require('../models/dog');
// List of all dogs
exports.dog_list = function(req, res) {
res.send('NOT IMPLEMENTED: dogs list');
};
// for a specific hats.
exports.dog_detail = function(req, res) {
res.send('NOT IMPLEMENTED: hats detail: ' + req.params.id);
};
// Handle hats create on POST.
exports.costume_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Costume create POST');
};

// Handle dogs delete form on DELETE.
exports.dog_delete = function(req, res) {
res.send('NOT IMPLEMENTED: dogs delete DELETE ' + req.params.id);
};
// Handle hats update form on PUT.
exports.dog_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: dogs update PUT' + req.params.id);
};

exports.dog_list = async function(req, res) {
    try{
    thedog = await dog.find();
    res.send(thedog);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    exports.dog_view_all_Page = async function(req, res) {
        try{
        thedog = await dog.find();
        res.render('dog', { title: 'dogs Search Results', DBresults: thedog });
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
        };