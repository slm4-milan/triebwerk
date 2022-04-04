const IssueRepository = require('../repositories/IssueRepository')

const AgentRepository = require("../repositories/AgentRepository");

const AgentService = require("../services/AgentService");
const {json} = require("express");

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

const reportIssue = async (info) => {
  return await createIssue(info);
};

const assignIssue = async () => {
  let firstAvailableAgent = await AgentService.getFirstAvailableAgent()
  let firstAvailableIssue = await getFirstAvailableIssue();
  console.log(!firstAvailableAgent)
  console.log(!firstAvailableIssue)

  if (!firstAvailableAgent) {
    return {message: 'There is no available agents in this moment.'}
  } else if (!firstAvailableIssue) {
    return {message: 'There is no unassigned issues in this moment.'}
  } else {
    let agentBody = {"isAvailable": "false"};
    await AgentRepository
    .updateAgent(agentBody, firstAvailableAgent.id)

    let issueBody = {"inProcess": "true"}
    await IssueRepository.updateIssue(issueBody, firstAvailableIssue.id)

    firstAvailableAgent = await AgentService.findOneAgent(
        firstAvailableAgent.id)
    firstAvailableIssue = await findOneIssue(firstAvailableIssue.id)
    return {agent: firstAvailableAgent, issue: firstAvailableIssue}
  }
}

module.exports = {
  createIssue,
  getAllIssues,
  findOneIssue,
  updateIssue,
  deleteIssue,
  getAvailableIssues,
  getFirstAvailableIssue,
  reportIssue,
  assignIssue
}

