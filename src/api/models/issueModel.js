module.exports = (sequalize, DataTypes) => {
  const Issue = sequalize.define('issue', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    isDone: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    processedAt: {
      type: DataTypes.DATE,
      defaultValue: null
    },
    inProcess: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    submitedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  });

  return Issue;
}