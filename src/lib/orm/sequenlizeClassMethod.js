module.exports = {
  last: function() {
    return this.findOne({
      limit: 1,
      where: {
        //your where conditions, or without them if you need ANY entry
      },
      order: [['createdAt', 'DESC']],
    });
  },
};
