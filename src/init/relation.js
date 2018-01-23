//relation
global.orm.models.Feedback.belongsTo(global.orm.models.User, {
  onDelete: 'cascade',
});
