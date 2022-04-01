const IssueRepository = require('../repositories/IssueRepository')
const AgentRepository = require("../repositories/AgentRepository");

const createIssue = async info => await IssueRepository.createIssue(info);

const getAllIssues = async () => await IssueRepository.getAllIssues();

const findOneIssue = async id => await IssueRepository.findOneIssue(id);

const updateIssue = async (body, id) => await IssueRepository.updateIssue(body,
    id);

const deleteIssue = async id => await IssueRepository.deleteIssue(id);

const getAvailableIssues = async () => {
  let availableIssues = await IssueRepository.getAvailableIssues()
  return availableIssues = availableIssues.sort(
      ((a, b) => b.submitedAt - a.submitedAt))
};

const getFirstAvailableIssue = async () => {
  let availableIssues = await getAvailableIssues()
  return availableIssues.shift();
};

module.exports = {
  createIssue,
  getAllIssues,
  findOneIssue,
  updateIssue,
  deleteIssue,
  getAvailableIssues,
  getFirstAvailableIssue
}

