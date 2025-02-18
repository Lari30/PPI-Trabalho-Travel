const users = [{ username: 'admin', password: '1234' }];
const travelPackages = [
    { id: 1, name: 'Pacote para Paris', destination: 'Paris', date: '2025-06-10', price: 5000, description: 'Explore Paris e seus encantos, com passeios pela Torre Eiffel e museus famosos.' },
    { id: 2, name: 'Pacote para Nova York', destination: 'Nova York', date: '2025-07-15', price: 7000, description: 'Visite a cidade que nunca dorme e explore a Times Square, Central Park e Broadway.' },
    { id: 3, name: 'Pacote para Tóquio', destination: 'Tóquio', date: '2025-08-20', price: 8000, description: 'Experimente a cultura japonesa em Tóquio, incluindo o Monte Fuji e Akihabara.' }
];

module.exports = { users, travelPackages };