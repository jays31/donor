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
  
  // Added by Jonathan Harris B00418947
  // '/results': { controller: 'results', action: 'results' },
  'post /results': 'ResultsController.results',
  'post /alerts': 'AlertController.alerts',

  'post /gallery/upload' : 'GalleryController.create',
  'get /gallery/list' : 'GalleryController.list',
  'post /gallery/delete' : 'GalleryController.delete',
  'post /gallery/edit' : 'GalleryController.edit',
  'post /gallery/update' : 'GalleryController.update',
  'get /gallery/add' : 'GalleryController.add',
  '/minventory': { view: 'pages/minventory' },
  '/report': { view: 'pages/reports' },
  '/inventoryReport':'ReportController.getInventoryReport',
  '/reservationReport':'ReportController.getReservationReport',
 };
