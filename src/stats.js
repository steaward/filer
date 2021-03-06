var Constants = require('./constants.js');
var Path = require('./path.js');

function Stats(path, fileNode, devName) {
  this.dev = devName;
  this.node = fileNode.id;
  this.type = fileNode.type;
  this.size = fileNode.size;
  this.nlinks = fileNode.nlinks;
  this.atime = fileNode.atime;
  this.mtime = fileNode.mtime;
  this.ctime = fileNode.ctime;
  this.version = fileNode.version;
  this.mode = fileNode.mode;
  this.uid = fileNode.uid;
  this.gid = fileNode.gid;
  this.name = Path.basename(path);
}

Stats.prototype.isFile = function() {
  return this.type === Constants.NODE_TYPE_FILE;
};

Stats.prototype.isDirectory = function() {
  return this.type === Constants.NODE_TYPE_DIRECTORY;
};

Stats.prototype.isSymbolicLink = function() {
  return this.type === Constants.NODE_TYPE_SYMBOLIC_LINK;
};

// These will always be false in Filer.
Stats.prototype.isSocket          =
Stats.prototype.isFIFO            =
Stats.prototype.isCharacterDevice =
Stats.prototype.isBlockDevice     =
function() {
  return false;
};

module.exports = Stats;
