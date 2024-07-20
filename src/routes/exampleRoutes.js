/**
 * @swagger
 * tags:
 *   name: Examples
 *   description: Example management
 */

/**
 * @swagger
 * /api/v1/example:
 *   get:
 *     summary: Retrieve a list of examples
 *     tags: [Examples]
 *     responses:
 *       200:
 *         description: A list of examples
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: Example
 */

/**
 * @swagger
 * /api/v1/example:
 *   post:
 *     summary: Create a new example
 *     tags: [Examples]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 example: New Example
 *     responses:
 *       201:
 *         description: The created example
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 2
 *                 name:
 *                   type: string
 *                   example: New Example
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       msg:
 *                         type: string
 *                         example: Name must be at least 3 characters long
 *                       param:
 *                         type: string
 *                         example: name
 *                       location:
 *                         type: string
 *                         example: body
 */
const express = require('express');
const exampleController = require('../controllers/exampleController');
const { validateCreateExample } = require('../middlewares/validators/exampleValidator');

const router = express.Router();

router.get('/', exampleController.getExamples);
router.post('/', validateCreateExample, exampleController.createExample);

module.exports = router;