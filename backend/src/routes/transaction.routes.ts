import { Router } from 'express';
import CreateTransactionService from '../services/CreateTransactionService';

import TransactionsRepository from '../repositories/TransactionsRepository';

const transactionRouter = Router();

const transactionsRepository = new TransactionsRepository();

transactionRouter.get('/', (request, response) => {
  try {
    const transactions = transactionsRepository.all();
    const balance = transactionsRepository.getBalance();

    return response.json({
      transactions,
      balance,
    })
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

transactionRouter.post('/', (request, response) => {
  try {
    //Pegar os parametros do corpo
    const { title, value, type } = request.body
    //Criar a transação que cuida da regra de negócio
    const createTransaction = new CreateTransactionService(
      transactionsRepository,
    );
    //Que vai criar a transação de fato e retorna-la
    const transaction = createTransaction.execute({
      title,
      value,
      type,
    })

    return response.json(transaction)
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
