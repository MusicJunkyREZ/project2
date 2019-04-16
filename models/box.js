module.exports = function(sequelize, DataTypes) {
    var Box = sequelize.define("Box", {
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      timestamps: false
    }
  );
  Box.associate = function(models){
      Box.hasMany(models.Post, {
          onDelete: "cascade"
      });
  };
    return Box;
  };
  