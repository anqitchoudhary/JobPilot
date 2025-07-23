// Enhanced test script to verify Prisma client connection
console.log('Starting Prisma client test...');

// Import the Prisma client directly
const { PrismaClient } = require('@prisma/client');

// Create a new Prisma client instance
const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

async function testConnection() {
  try {
    console.log('1. Testing Prisma client connection...');
    
    // Try to connect to the database
    console.log('2. Attempting to connect to the database...');
    await prisma.$connect();
    console.log('✅ 3. Successfully connected to the database');
    
    // Try a simple query
    console.log('4. Attempting to query the database...');
    const users = await prisma.user.findMany();
    console.log(`✅ 5. Found ${users.length} users in the database`);
    
    // Try a raw query to ensure the database is accessible
    console.log('6. Testing raw SQL query...');
    const result = await prisma.$queryRaw`SELECT 1+1 as result`;
    console.log('✅ 7. Raw SQL query result:', result);
    
  } catch (error) {
    console.error('❌ Error during test:');
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    
    // Check if the error is related to module resolution
    if (error.code === 'MODULE_NOT_FOUND') {
      console.error('\n⚠️  Module not found error detected.');
      console.error('This might be related to Prisma client generation.');
      console.error('Try running: npx prisma generate');
    }
  } finally {
    console.log('8. Disconnecting from the database...');
    await prisma.$disconnect().catch(e => {
      console.error('Error disconnecting:', e);
    });
    console.log('✅ 9. Disconnected from the database');
  }
}

// Run the test
testConnection()
  .then(() => {
    console.log('✅ Test completed');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Test failed with error:', error);
    process.exit(1);
  });
