const db = require('../models');
const {response} = require("express");
const AgentService = require('../services/AgentService')

// create main Model

const Agent = db.agents;
const Issue = db.issues;

// main work

// 1. create agent

const addAgent = async (req, res) => {

  try {
    let info = {
      firstName: req.body.firstName,
      lastName: req.body.lastName
    };

    const agent = await AgentService.addAgent(info);

    res.status(200).send(agent);

  } catch (err) {
    res.send(err.message)
  }
}

// 2. get all agents

const getAllAgents = async (req, res) => {
  // let agents = await Agent.findAll({});
  try {
    let agents = await AgentService.getAgents()
    let noAgents;
    let numberOfAgents = agents.length;
    noAgents = numberOfAgents <= 0 ?
        res.status(404).send(
            {message: 'There is no added agents.'}) :
        res.status(200).send(agents)

  } catch (err) {
    res.send(err.message)
  }
};

// 3. get one agent

const getOneAgent = async (req, res) => {
  try {
    let id = req.params.id;
    let agent = await AgentService.findOneAgent(id);

    agent = !agent ?
        res.status(404).send(
            {message: 'There is no agent with the given ID.'}) :
        res.status(200).send(agent)
  } catch (err) {
    res.send(err.message)
  }
};

// 4. update Agent

const updateAgent = async (req, res) => {

  try {
    let id = req.params.id;
    let agent = await AgentService.updateAgent(req.body, id);
    let updated = 1;
    console.log(agent[0])
    // console.log(noUpdate);
    agent[0] === updated ?
        res.status(200).send({message: `Agent with the ID ${id} updated.`}) :
        res.status(404).send(
            {message: 'There is no agent with the given ID'})
  } catch (err) {
    res.send(err.message)
  }

}

// 5. delete agent by id

const deleteAgent = async (req, res) => {

  try {
    let id = req.params.id;
    let agent = await AgentService.deleteAgent(id);
    let deleted = 1;
    console.log(agent)
    console.log(deleted)
    agent === deleted ?
        res.status(200).send({message: `Agent with the ID ${id} deleted.`}) :
        res.status(404).send(
            {message: 'There is no agent with the given ID.'})

  } catch (err) {
    res.send(err.message)
  }
};

// 6. get available agents

const getAvailableAgents = async (req, res) => {
  try {
    let availableAgents = await AgentService.getAvailableAgents()
    let noAvailableAgents;
    let numberOfAvailableAgents = availableAgents.length;
    noAvailableAgents = numberOfAvailableAgents <= 0 ?
        res.status(404).send(
            {message: 'There is no available agents.'}) :
        res.status(200).send(availableAgents)

  } catch (err) {
    res.send(err.message)
  }
};

module.exports = {
  addAgent,
  getAllAgents,
  getOneAgent,
  updateAgent,
  deleteAgent,
  getAvailableAgents
};


