const db = require('../models');
const {response} = require("express");

const Agent = db.agents;
const Issue = db.issues;

// 1. add issue

const createIssue = async (req, res) => {
  try {
    let info = {
      title: req.body.title,
      description: req.body.description
    }

    const issue = await Issue.create(info);
    res.status(200).send(issue);

  } catch (err) {
    res.send(err.message);
  }
}

// 2. get all isuses

const getAllIssues = async (req, res) => {
  let issues = await Issue.findAll({});
  if (issues.length <= 0) {
    res.status(404).send({
      message: 'There is no added issues.'
    })
  }
  res.status(200).send(issues);
};

// 3. get one issue

const getOneIssue = async (req, res) => {
  let id = req.params.id;
  let issue = await Issue.findOne({where: {id: id}});

  res.status(200).send(issue);

};

// 4. update Issue

const updateIssue = async (req, res) => {
  let id = req.params.id;

  const issue = await Issue.update(req.body, {where: {id: id}})

  res.status(200).send(issue);
}

// 5. delete issue by id

const deleteIssue = async (req, res) => {
  let id = req.params.id;

  await Issue.destroy({where: {id: id}})

  res.status(200).send('Issue is deleted');
};

// 6. get available issues

const getAvailableIssues = async (req, res) => {
  let issues = await Issue.findAll({where: {isAvailable: true}});
  issues = issues.sort(((a, b) => a.availableAt - b.availableAt));
  if (issues.length <= 0) {
    res.status(404).send({
      message: 'There is no available issues in this moment.'
    })
  }
  res.status(200).send(issues);
};

module.exports = {
  createIssue,
  getAllIssues,
  getOneIssue,
  updateIssue,
  deleteIssue
}