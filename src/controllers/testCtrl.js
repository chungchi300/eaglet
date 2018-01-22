module.exports= async (ctx, next) => {
  let title = 'koa2 ';

  let employeesName = '';
  try {
    //
    // //

    let employees = await global.orm.models.Employee.findAll({
      include: [{ all: true }],
    });
    employeesName = employees.map(
      employee => employee.name + ' from ' + employee.company.name
    );
    title += employeesName;

    ctx.body = { nameConcated: title, employees };
  } catch (err) {
    console.log('e', err);
  }
};
