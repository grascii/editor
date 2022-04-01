function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.pmove = function(r, deg) {
  this.x += r * Math.cos(deg * Math.PI / 180);
  this.y += r * Math.sin(deg * Math.PI / 180);
  return this;
};

Point.prototype.move = function(dx, dy) {
  this.x += dx;
  this.y += dy;
  return this;
};

Point.prototype.add = function(pt) {
  this.x += pt.x;
  this.y += pt.y
  return this;
};

Point.prototype.scale = function(sx, sy) {
  this.x *= sx;
  if (typeof(sy) != 'undefined') {
    this.y *= sy
  }
  return this;
};

Point.prototype.set = function(x, y) {
  this.x = x;
  this.y = y;
  return this;
};

Point.prototype.pset = function(r, deg) {
  this.x = r * Math.cos(deg * Math.PI / 180);
  this.y = r * Math.sin(deg * Math.PI / 180);
  return this;
};

Point.prototype.toString = function() {
  return this.x + "," + this.y;
};

Point.prototype.m = function() {
  return "m" + this.x + "," + this.y;
};

p = function(x, y) {
  return new Point(x, y);
};

pp = function(r, deg) {
  return new Point(r * Math.cos(deg * Math.PI / 180), r * Math.sin(deg * Math.PI / 180));
};
