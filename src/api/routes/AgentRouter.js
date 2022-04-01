const agentController = require('../controllers/AgentController');

const router = require('express').Router();

router.post('/addAgent', agentController.addAgent)

router.get('/allAgents', agentController.getAllAgents)

router.get('/availableAgents', agentController.getAvailableAgents)

router.get('/firstAvailableAgent', agentController.getFirstAvailableAgent)

router.get('/getAgent/:id', agentController.getOneAgent)

router.put('/updateAgent/:id', agentController.updateAgent)

router.delete('/deleteAgent/:id', agentController.deleteAgent)

module.exports = router;