-- data.sql

-- Inserção de Funcionários
INSERT INTO funcionarios (nome, cpf, cargo, data_admissao)
VALUES
('João Silva', '12345678901', 'Analista de TI', '2020-02-01'),
('Maria Oliveira', '23456789012', 'Assistente Administrativo', '2021-06-15'),
('Carlos Souza', '34567890123', 'Gerente de Vendas', '2019-03-20');

-- Inserção de Produtos
INSERT INTO produtos (nome, descricao, quantidade_estoque, preco_unitario)
VALUES
('Notebook Dell', 'Notebook com 16GB de RAM e 512GB de SSD', 10, 3500.00),
('Mouse Logitech', 'Mouse sem fio', 50, 100.00),
('Teclado Mecânico', 'Teclado RGB com switches Cherry', 30, 450.00);

-- Inserção de Movimentações de Estoque
INSERT INTO movimentacoes_estoque (produto_id, tipo_movimentacao, quantidade, observacoes)
VALUES
(1, 'entrada', 10, 'Compra de notebooks'),
(2, 'saida', 5, 'Venda de mouses'),
(3, 'entrada', 30, 'Compra de teclados mecânicos');

-- Inserção de Registros de Ponto
INSERT INTO registros_ponto (funcionario_id, data, hora_entrada, hora_saida, horas_trabalhadas, observacoes)
VALUES
(1, '2024-11-01', '08:00:00', '17:00:00', 8.00, 'Trabalho diário'),
(2, '2024-11-01', '09:00:00', '18:00:00', 8.00, 'Trabalho diário'),
(3, '2024-11-01', '08:30:00', '17:30:00', 8.00, 'Trabalho diário');
