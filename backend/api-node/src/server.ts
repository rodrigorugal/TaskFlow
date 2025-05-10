// src/server.ts
import 'dotenv/config';
import mongoose from 'mongoose';
import app from './app';

// Configurações locais (sem Docker)
const PORT = process.env.PORT || 3001;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/taskflow';

async function startServer() {
  try {
    // Conexão com MongoDB local
    await mongoose.connect(MONGO_URI);
    console.log('✅ Conectado ao MongoDB local');

    // Inicia o servidor
    app.listen(PORT, () => {
      console.log(`🚀 Servidor Node.js rodando em http://localhost:${PORT}`);
      console.log(`🔗 Endpoint de tarefas: http://localhost:${PORT}/api/tasks`);
    });

  } catch (error) {
    console.error('❌ Falha na inicialização:', error instanceof Error ? error.message : error);
    process.exit(1);
  }
}

// Inicia a aplicação
startServer();

// Tratamento de encerramento
process.on('SIGINT', () => {
  mongoose.connection.close().then(() => {
    console.log('🔴 Conexão com MongoDB encerrada');
    process.exit(0);
  });
});