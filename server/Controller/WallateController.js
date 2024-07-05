const { PrismaClient, TransactionType } = require('@prisma/client');
const prisma = new PrismaClient();

const walletController = {
  addMoneyToWallet: async (userDetailsId, amount) => {
    try {
      // Convert amount to float
      const parsedAmount = parseFloat(amount);

      // Check if amount is within acceptable range
      if (parsedAmount <= 0) {
        throw new Error(`Amount must be greater than zero.`);
      }

      // Find the user details including their wallets
      const existingUser = await prisma.userDetails.findUnique({
        where: { id: parseInt(userDetailsId) },
        include: { wallets: true }
      });

      if (!existingUser) {
        throw new Error(`User with ID ${userDetailsId} not found`);
      }

      let wallet;

      // Check if the user has any existing wallets
      if (!existingUser.wallets || existingUser.wallets.length === 0) {
        // Create a new wallet for the user if none exists
        wallet = await prisma.wallet.create({
          data: {
            balance: 0,
            userDetailsId: existingUser.id
          }
        });
      } else {
        wallet = existingUser.wallets[0]; // Use the first wallet found
      }

      // Create a transaction for adding money to the wallet
      const transaction = await prisma.transaction.create({
        data: {
          amount: parsedAmount,
          type: TransactionType.AddMoney,
          walletId: wallet.id,
          charges: { create: [{ amount: 0, description: 'Initial Add Money' }] }
        },
        include: { charges: true }
      });

      // Update the wallet balance after adding money
      const updatedWallet = await prisma.wallet.update({
        where: { id: wallet.id },
        data: { balance: { increment: parsedAmount } }
      });

      return { transaction, updatedWallet };
    } catch (error) {
      console.error('Error adding money to wallet:', error);
      throw error;
    }
  },

  makePurchaseFromWallet: async (userId, amount, description) => {
    try {
      
      const parsedAmount = parseFloat(amount);

      
      if (parsedAmount <= 0) {
        throw new Error(`Amount must be greater than zero.`);
      }

      // Find the user details including their wallets
      const existingUser = await prisma.userDetails.findUnique({
        where: { id: parseInt(userId) },
        include: { wallets: true }
      });

      if (!existingUser || existingUser.wallets.length === 0) {
        throw new Error('User or wallet not found');
      }

      const wallet = existingUser.wallets[0];

      // Calculate charge (you can implement your own logic here)
      const chargeAmount = calculateCharge(parsedAmount);

      // Create a transaction for the purchase
      const transaction = await prisma.transaction.create({
        data: {
          amount: parsedAmount,
          type: TransactionType.Charge,
          walletId: wallet.id,
          charges: { create: [{ amount: chargeAmount, description }] }
        },
        include: { charges: true }
      });

      // Update the wallet balance after deducting the purchase amount and charges
      const updatedWallet = await prisma.wallet.update({
        where: { id: wallet.id },
        data: { balance: { decrement: parsedAmount + chargeAmount } }
      });

      return { transaction, updatedWallet, charge: chargeAmount };
    } catch (error) {
      console.error('Error making purchase from wallet:', error);
      throw error;
    }
  },

  getTransactionHistory: async (userId) => {
    try {
      const existingUser = await prisma.userDetails.findUnique({
        where: { id: parseInt(userId) },
        include: { wallets: true }
      });

      if (!existingUser || existingUser.wallets.length === 0) {
        throw new Error('User or wallet not found');
      }

      const wallet = existingUser.wallets[0];

      const transactions = await prisma.transaction.findMany({
        where: { walletId: wallet.id },
        include: { charges: true },
        orderBy: { id: 'desc' } // Corrected orderBy clause
      });

      return transactions;
    } catch (error) {
      console.error('Error fetching transaction history:', error);
      throw error;
    }
  },
  getWalletBalance: async (userId) => {
    try {
      const existingUser = await prisma.userDetails.findUnique({
        where: { id: parseInt(userId) },
        include: { wallets: true }
      });

      if (!existingUser || existingUser.wallets.length === 0) {
        throw new Error('User or wallet not found');
      }

      const wallet = existingUser.wallets[0];

      return { balance: wallet.balance };
    } catch (error) {
      console.error('Error fetching wallet balance:', error);
      throw error;
    }
  },
};

// Helper function to calculate charges (you can implement your own logic here)
function calculateCharge(amount) {
  return amount * 0.0; // 10% charge
}

module.exports = walletController;
