/**
 * GalleryController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    // This function is used to make entry on a database
    create:function(req, res){
        var dname = req.body.dname;
        var address = req.body.address;
        var quantity = req.body.quantity;
        var time = req.body.time;
        var start_time = req.body.start_time;
        var end_time = req.body.end_time;
        
        // Create a galleryItem to insert into database
        var galleryItem = {};       
        galleryItem.dname = dname;
        galleryItem.address = address;
        galleryItem.quantity = quantity;
        galleryItem.time = time;
        galleryItem.start_time = start_time;
        galleryItem.end_time = end_time;

        // Function that adds in a database
        Gallery.create(galleryItem, function (err, gallery) {
            if(err) {
                return res.serverError('Entry while adding data in database');
            }

            // display the list after adding entry
            return res.redirect("/gallery/list");
        });
    },
    // Viewing the list
    list:function(req, res){
        // To find entry from database
        Gallery.find({}).exec(function(err, gallery){
            if(err){
                res.send(500, {error: 'Database Error'});
            }           
            res.view('list', {gallery:gallery});
        });
    },

    add: function(req, res){
        res.view('add');
    },

    //Deleting particular entry from the database
    delete: function(req, res){

        //Getting the id to delete from the database
        var inventory = req.body.unique_delete_ID;

        //Function that destroy the entry from the database
        Gallery.destroy({id:inventory}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.redirect('/gallery/list');
        });
        return false;
    },

    //This function is used for editing the details
    edit: function(req, res){

        //Getting the id to edit
        var inventory = req.body.unique_edit_ID;

        //Function that find the particular id to edit
        Gallery.findOne({id:inventory}).exec(function(err, gallery){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.view('edit', {gallery:gallery});
        });
    },

    //This function stores the updated id
    update: function(req, res){
        var dname = req.body.dname;
        var address = req.body.address;
        var quantity = req.body.quantity;
        var time = req.body.time;
        var start_time = req.body.start_time;
        var end_time = req.body.end_time;

        // Create a galleryItem to store into database
        var galleryItem = {};
           
        galleryItem.dname = dname;
        galleryItem.address = address;
        galleryItem.quantity = quantity;
        galleryItem.time = time;
        galleryItem.start_time = start_time;
        galleryItem.end_time = end_time;

        var inventory = req.body.unique_ID;

        // Update the data in the database
        Gallery.update({id:inventory},galleryItem).exec(function (err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.redirect('/gallery/list');
        });
        return false;
    }

};