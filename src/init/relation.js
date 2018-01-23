//relation
global.orm.Feedback.belongsTo(global.orm.User, {
  onDelete: 'cascade',
});
