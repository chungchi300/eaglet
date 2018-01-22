//relation
global.orm.models.Employee.belongsTo(global.orm.models.Company, {
  onDelete: 'cascade',
});
global.orm.models.Company.hasMany(global.orm.models.Employee, {
  onDelete: 'cascade',
});
