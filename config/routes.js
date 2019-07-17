// Author: Jay Sharma (B00824331)

module.exports.routes = {

  '/': { view: 'pages/homepage' },
  '/about': { view: 'pages/about' },
  '/dashboard': { view: 'pages/dashboard' },
  '/donor_profile': { view: 'pages/donor_profile' },
  '/forgot': { view: 'pages/forgot' },
  '/help': { view: 'pages/help' },
  '/inventory': { view: 'pages/inventory' },
  '/signup': { view: 'pages/signup' },
  'post /gallery/upload' : 'GalleryController.create',
  'get /gallery/list' : 'GalleryController.list',
  'post /gallery/delete' : 'GalleryController.delete',
  'post /gallery/edit' : 'GalleryController.edit',
  'post /gallery/update' : 'GalleryController.update',
  'get /gallery/add' : 'GalleryController.add',

};
