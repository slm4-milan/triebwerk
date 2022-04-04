const db = require('../../repositories/models');
const {response} = require("express");
const IssueService = require("../../services/IssueService");
const AgentService = require("../../services/AgentService");

const Agent = db.agents;
const Issue = db.issues;

// 1. add issue

const createIssue = async (req, res) => {
  try {
    let info = {
      title: req.body.title,
      description: req.body.description
    };

    const issue = await IssueService.createIssue(info);

    res.status(200).send(issue);

  } catch (err) {
    res.send(err.message)
  }
}

// 2. get all isuses

const getAllIssues = async (req, res) => {
  try {
    let issues = await IssueService.getAllIssues()
    let noIssues;
    let numberOfIssues = issues.length;
    noIssues = numberOfIssues <= 0 ?
        res.status(404).send(
            {message: 'There is no added issues.'}) :
        res.status(200).send(issues)

  } catch (err) {
    res.send(err.message)
  }
};

// 3. get one issue

const getOneIssue = async (req, res) => {
  try {
    let id = req.params.id;
    let issue = await IssueService.findOneIssue(id);

    issue = !issue ?
        res.status(404).send(
            {message: 'There is no issue with the given ID.'}) :
        res.status(200).send(issue)
  } catch (err) {
    res.send(err.message)
  }
};

// 4. update Issue

const updateIssue = async (req, res) => {

  try {
    let id = req.params.id;
    let issue = await IssueService.updateIssue(req.body, id);
    let updated = 1;
    issue[0] === updated ?
        res.status(200).send({message: `Issue with the ID ${id} updated.`}) :
        res.status(404).send(
            {message: 'There is no issue with the given ID'})
  } catch (err) {
    res.send(err.message)
  }
}

// 5. delete issue by id

const deleteIssue = async (req, res) => {
  try {
    let id = req.params.id;
    let issue = await IssueService.deleteIssue(id);
    let deleted = 1;
    issue === deleted ?
        res.status(200).send({message: `Issue with the ID ${id} deleted.`}) :
        res.status(404).send(
            {message: 'There is no issue with the given ID.'})

  } catch (err) {
    res.send(err.message)
  }
};

// 6. get available issues

const getAvailableIssues = async (req, res) => {
  try {
    let availableIssues = await IssueService.getAvailableIssues()
    let noAvailableIssues;
    let numberOfAvailableIssues = availableIssues.length;
    noAvailableIssues = numberOfAvailableIssues <= 0 ?
        res.status(404).send(
            {message: 'There is no available issues.'}) :
        res.status(200).send(availableIssues)

  } catch (err) {
    res.send(err.message)
  }
};

// 7. get first available issue

const getFirstAvailableIssue = async (req, res) => {
  try {
    let firstAvailableIssue = await IssueService.getFirstAvailableIssue()
    let noAvailableIssues;
    let numberOfAvailableIssues = firstAvailableIssue.length;
    noAvailableIssues = undefined ?
        res.status(404).send(
            {message: 'There is no available issues.'}) :
        res.status(200).send(firstAvailableIssue)

  } catch (err) {
    res.send(err.message)
  }
}

// 8. report issue

const reportIssue = async (req, res) => {
  try {
    let info = {
      title: req.body.title,
      description: req.body.description
    };
    const reportedIssue = await IssueService.reportIssue(info);
    res.status(200).send(reportedIssue);

  } catch (err) {
    res.send(err.message)
  }
}

// test

const testAssignIssue = async (req, res) => {
  try {
    let result = await IssueService.assignIssue()
    res.status(200).send(result)

  } catch (err) {
    res.send(err.message)
  }
}

module.exports = {
  createIssue,
  getAllIssues,
  getOneIssue,
  updateIssue,
  deleteIssue,
  getAvailableIssues,
  getFirstAvailableIssue,
  reportIssue,
  testAssignIssue
}