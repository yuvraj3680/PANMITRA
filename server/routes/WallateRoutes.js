const express = require('express');
const walletController = require('../Controller/WallateController');
const router = express.Router();

// Route to add money to wallet
router.post('/:userDetailsId/addMoney', async (req, res) => {
  try {
    const { userDetailsId } = req.params;
    const { amount } = req.body;
    const { transaction, updatedWallet } = await walletController.addMoneyToWallet(userDetailsId, amount);
    res.status(200).json({ status: 'success', transaction, updatedWallet });
  } catch (error) {
    console.error('Error adding money to wallet:', error);
    res.status(500).json({ status: 'error', message: error.message });
  }
});

// Route to make a purchase from wallet
router.post('/:userId/charges', async (req, res) => {
  try {
    const { userId } = req.params;
    const { amount, description } = req.body;
    const { transaction, updatedWallet, charge } = await walletController.makePurchaseFromWallet(userId, amount, description);
    res.status(200).json({ status: 'success', transaction, updatedWallet, charge });
  } catch (error) {
    console.error('Error making purchase from wallet:', error);
    res.status(500).json({ status: 'error', message: error.message });
  }
});

// Route to get transaction history
router.get('/:userId/transactions', async (req, res) => {
  try {
    const { userId } = req.params;
    const transactions = await walletController.getTransactionHistory(userId);
    res.status(200).json({ status: 'success', transactions });
  } catch (error) {
    console.error('Error fetching transaction history:', error);
    res.status(500).json({ status: 'error', message: error.message });
  }
});

// Route to get wallet balance
router.get('/:userId/balance', async (req, res) => {
  try {
    const { userId } = req.params;
    const { balance } = await walletController.getWalletBalance(userId);
    res.status(200).json({ status: 'success', balance });
  } catch (error) {
    console.error('Error fetching wallet balance:', error);
    res.status(500).json({ status: 'error', message: error.message });
  }
});

module.exports = router;
