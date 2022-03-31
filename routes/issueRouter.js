const issueController = require('../controllers/issueController');
const agentController = require("../controllers/agentController");

const router = require('express').Router();

router.post('/addIssue', issueController.createIssue)

router.get('/getIssues', issueController.getAllIssues);

router.get('/getIssue/:id', issueController.getOneIssue)

router.put('/updateIssue/:id', issueController.updateIssue)

router.delete('/deleteIssue/:id', issueController.deleteIssue)

module.exports = router;