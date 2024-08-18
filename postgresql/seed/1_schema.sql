CREATE SCHEMA todo;

CREATE TABLE todo.tarefas (
    id SERIAL PRIMARY KEY,
    titulo TEXT NOT NULL,
    descricao TEXT,
    tipo TEXT,
    prioridade TEXT,
    status TEXT CHECK (status IN ('pendente', 'em andamento', 'concluída')),
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    atualizado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE OR REPLACE FUNCTION atualizar_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.atualizado_em = NOW();
    RETURN NEW; 
END;
$$ LANGUAGE plpgsql;


CREATE TRIGGER atualizar_timestamp_trigger
BEFORE UPDATE ON todo.tarefas 
FOR EACH ROW
EXECUTE FUNCTION atualizar_timestamp();