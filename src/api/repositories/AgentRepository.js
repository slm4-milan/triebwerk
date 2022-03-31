const {response} = require("express");

const db = require("../models");

// create main Model

const Agent = db.agents;

const Issue = db.issues;

// 1. create agent
const addAgent = async (agent) => {
  try {
    return await Agent.create(agent);

  } catch (err) {
    throw new Error(err.message);
  }
}

// 2. get agents

const getAgents = async () => {
  return await Agent.findAll({});
};

// 3. get agent by ID

const findOneAgent = async id => {
  return await Agent.findOne({where: {id: id}});
}

// 4. update agent by ID

const updateAgent = async (body, id) => await Agent.update(body,
    {where: {id: id}});

// 5. delete agent

const deleteAgent = async id => await Agent.destroy({where: {id: id}});

const getAvailableAgents = async () => await Agent.findAll(
    {where: {isAvailable: true}});

module.exports = {
  addAgent,
  getAgents,
  findOneAgent,
  updateAgent,
  deleteAgent,
  getAvailableAgents
}
