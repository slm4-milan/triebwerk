const db = require("./models");

// create main Model

const Agent = db.agents;

const Issue = db.issues;

const createIssue = async info => {
  try {
    return await Issue.create(info);

  } catch (err) {
    throw new Error(err.message);
  }
};

async function getAllIssues() {
  return await Issue.findAll({});
}

//---
// 3. get agent by ID

const findOneIssue = async id => {
  return await Issue.findOne({where: {id: id}});
}

// 4. update agent by ID

const updateIssue = async (body, id) => await Issue.update(body,
    {where: {id: id}});

// 5. delete agent

const deleteIssue = async id => await Issue.destroy({where: {id: id}});

const getAvailableIssues = async () => await Issue.findAll(
    {where: {isDone: false, inProcess: false}});

module.exports = {
  createIssue,
  getAllIssues,
  findOneIssue,
  updateIssue,
  deleteIssue,
  getAvailableIssues

}