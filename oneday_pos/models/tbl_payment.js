module.exports = (sequelize, DataTypes) => {
  const payment = sequelize.define("tbl_payment", {
    p_seq: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    o_table: {
      type: DataTypes.STRING(10),
    },
    p_method: {
      type: DataTypes.INTEGER,
    },
    p_pay: {
      type: DataTypes.BOOLEAN,
    },
  });
  return payment;
};
