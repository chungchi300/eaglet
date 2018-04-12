const orm = smartRequire('orm');

//relation
orm.Feedback.belongsTo(orm.User, {
  onDelete: 'cascade',
});
