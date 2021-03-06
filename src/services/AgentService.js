const AgentRepository = require('../repositories/AgentRepository')

const addAgent = async (info) => await AgentRepository.addAgent(info)

const getAgents = async () => await AgentRepository.getAgents()

const findOneAgent = async id => await AgentRepository.findOneAgent(id);

const updateAgent = async (body, id) => await AgentRepository.updateAgent(body,
    id);

const deleteAgent = async id => await AgentRepository.deleteAgent(id);

const getAvailableAgents = async () => {
  let availableAgents = await AgentRepository.getAvailableAgents()
  return availableAgents = availableAgents.sort(
      ((a, b) => b.availableAt - a.availableAt))
};

const getFirstAvailableAgent = async () => {
  let availableAgents = await getAvailableAgents()
  return availableAgents.shift();
};

module.exports = {
  addAgent,
  getAgents,
  findOneAgent,
  updateAgent,
  deleteAgent,
  getAvailableAgents,
  getFirstAvailableAgent
}
