import mongoose from 'mongoose';

const connection = mongoose.connect(
  'mongodb://localhost:27017/ms-authentication',
  { useNewUrlParser: true, useUnifiedTopology: true },
);

connection
  .then(() => console.log('Database ms-authentication connected.'))
  .catch((err) =>
    console.log(`Erro on connect ms-authenticaion database ${err}`),
  );
