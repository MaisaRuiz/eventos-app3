const express = require("express");
const EventoController = require("../controllers/eventoController");
const router = express.Router();
const eventoController = new EventoController();

router.get("/evento", eventoController.obterTodos);
router.get("/evento/:id", eventoController.obterPorId);
router.post("/evento", eventoController.adicionar);
router.put("/evento/:id", eventoController.atualizar);
router.delete("/evento/:id", eventoController.excluir);

module.exports = router;
