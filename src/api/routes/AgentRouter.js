const agentController = require('../controllers/AgentController');

const router = require('express').Router();

router.post('/addAgent', agentController.addAgent)

router.get('/allAgents', agentController.getAllAgents)

router.get('/availableAgents', agentController.getAvailableAgents)

router.get('/firstAvailableAgent', agentController.getFirstAvailableAgent)

router.get('/agent/:id', agentController.getOneAgent)

router.put('/agent/:id', agentController.updateAgent)

router.delete('/agent/:id', agentController.deleteAgent)

module.exports = router;