const db = require('../data/db-config.js');

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove,
  addStep,
};

function find() {
  return db('schemes');
}

function findById(id) {
  return db('schemes')
    .where({ id })
    .first()
    .then(scheme => (scheme ? scheme : null));
}

function findSteps(id) {
  return db('schemes as s')
    .join('steps', 's.id', 'steps.scheme_id')
    .select(
      'steps.id',
      's.scheme_name',
      'steps.step_number',
      'steps.instructions',
    )
    .where('steps.scheme_id', id)
    .orderBy('step_number', 'asc');
}

function add(scheme) {
  return db('schemes')
    .insert(scheme)
    .then(([schemeId]) => findById(schemeId));
}

function update(changes, id) {
  return db('schemes')
    .where('schemes.id', id)
    .update(changes)
    .then(count => (count ? findById(id) : null));
}

function remove(id) {
  const removedObject = findById(id);

  return db('schemes')
    .where('schemes.id', id)
    .del()
    .then(count => (count ? removedObject : null));
}

function addStep(step, scheme_id) {
  return db('steps')
    .insert({ ...step, scheme_id: scheme_id })
    .then(([stepId]) => findSteps(scheme_id));
}
