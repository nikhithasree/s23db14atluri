var dog = require('../models/dog');
// List of all dog
exports.dog_list = function(req, res) {
res.send('NOT IMPLEMENTED: dog list');
};
// for a specific dog.
exports.dog_detail = function(req, res) {
res.send('NOT IMPLEMENTED: dog detail: ' + req.params.id);
};
// for a specific dog.
exports.dog_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await dog.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
};

// Handle dog create on POST.
exports.dog_create_post = async function(req, res) {
    console.log(req.body)
    let document = new dog();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"dog_type":"goat", "cost":12, "size":"large"}
    document.breed = req.body.breed;
    document.color = req.body.color;
    document.cost = req.body.cost;
    try{
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle dog delete form on DELETE.
exports.dog_delete = function(req, res) {
res.send('NOT IMPLEMENTED: dog delete DELETE ' + req.params.id);
};
// Handle dog update form on PUT.
exports.dog_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: dog update PUT' + req.params.id);
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
        res.render('dog', { title: 'dog Search Results', DBresults: thedog });
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
        };