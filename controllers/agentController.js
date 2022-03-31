const db = require('../models');
const {response} = require("express");

// create main Model

const Agent = db.agents;
const Issue = db.issues;

// main work

// 1. create agent

const addAgent = async (req, res) => {
  console.log(req.body)
  try {
    let info = {
      firstName: req.body.firstName,
      lastName: req.body.lastName
    };

    const agent = await Agent.create(info);
    res.status(200).send(agent);
  } catch (err) {
    res.send(err.message)
  }

}

// 2. get all agents

const getAllAgents = async (req, res) => {
  let agents = await Agent.findAll({});
  if (agents.length <= 0) {
    res.status(404).send({
      message: 'There is no added agents.'
    })
  }
  res.status(200).send(agents);
};

// 3. get one agent

const getOneAgent = async (req, res) => {
  let id = req.params.id;
  let agent = await Agent.findOne({where: {id: id}});

  res.status(200).send(agent);

};

// 4. update Agent

const updateAgent = async (req, res) => {
  let id = req.params.id;

  const agent = await Agent.update(req.body, {where: {id: id}})

  res.status(200).send(agent);
}

// 5. delete agent by id

const deleteAgent = async (req, res) => {
  let id = req.params.id;

  await Agent.destroy({where: {id: id}})

  res.status(200).send('Agent is deleted');
};

// 6. get available agents

const getAvailableAgents = async (req, res) => {
  let agents = await Agent.findAll({where: {isAvailable: true}});
  agents = agents.sort(((a, b) => a.availableAt - b.availableAt));
  if (agents.length <= 0) {
    res.status(404).send({
      message: 'There is no available agents in this moment.'
    })
  }
  res.status(200).send(agents);
};

module.exports = {
  addAgent,
  getAllAgents,
  getOneAgent,
  updateAgent,
  deleteAgent,
  getAvailableAgents
};


