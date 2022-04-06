const issueController = require('../controllers/IssueController');
const agentController = require("../controllers/AgentController");

const router = require('express').Router();

router.post('/addIssue', issueController.createIssue)

router.post('/reportIssue', issueController.reportIssue)

router.get('/allIssues', issueController.getAllIssues);

router.get('/testAssignIssue', issueController.testAssignIssue);

router.get('/availableIssues', issueController.getAvailableIssues)

router.get('/firstAvailableIssue', issueController.getFirstAvailableIssue)

router.get('/issue/:id', issueController.getOneIssue)

router.put('/issue/:id', issueController.updateIssue)

router.delete('/issue/:id', issueController.deleteIssue)

module.exports = router;