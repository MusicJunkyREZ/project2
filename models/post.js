module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
      text: DataTypes.STRING,
      description: DataTypes.TEXT
    });
    return Post;
  };
  