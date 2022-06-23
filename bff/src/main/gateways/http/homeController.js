const path = require('path');

const homeController = {
  home(req, res) {
    res.sendFile(path.join(__dirname, '../../../public', 'index.html'));
  },
};

module.exports = homeController;