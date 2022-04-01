const issueController = require('../controllers/IssueController');
const agentController = require("../controllers/AgentController");

const router = require('express').Router();

router.post('/addIssue', issueController.createIssue)

router.get('/getIssues', issueController.getAllIssues);

router.get('/availableIssues', issueController.getAvailableIssues)

router.get('/firstAvailableIssue', issueController.getFirstAvailableIssue)

router.get('/getIssue/:id', issueController.getOneIssue)

router.put('/updateIssue/:id', issueController.updateIssue)

router.delete('/deleteIssue/:id', issueController.deleteIssue)

module.exports = router;