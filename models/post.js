

module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
      product_name: DataTypes.STRING,
      category: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      // userId: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      // }

    },
    {
      timestamps: false
    }
  );
  Post.associate = function(models){
    Post.belongsTo(models.Box, {
      foreignKey: {
        allowNull: false
      }
    })
  }
    return Post;
  };
  