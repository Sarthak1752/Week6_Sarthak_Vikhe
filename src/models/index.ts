import sequelize from '../postgres/pgConfig';
import Book from './book';
import Author from './author';
import User from './user';
import Review from './review';
import Rating from './rating';
import Payment from './payment';

// Define Associations

Book.belongsToMany(Author, { through: 'BookAuthors' });
Author.belongsToMany(Book, { through: 'BookAuthors' });

Book.hasMany(Review, { foreignKey: 'bookId' });
Review.belongsTo(Book, { foreignKey: 'bookId' });

Book.hasMany(Rating, { foreignKey: 'bookId' });
Rating.belongsTo(Book, { foreignKey: 'bookId' });

User.hasMany(Review, { foreignKey: 'userId' });
Review.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Rating, { foreignKey: 'userId' });
Rating.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Payment, { foreignKey: 'userId' });
Payment.belongsTo(User, { foreignKey: 'userId' });

Book.hasMany(Payment, { foreignKey: 'bookId' });
Payment.belongsTo(Book, { foreignKey: 'bookId' });

// Export Models
export { sequelize, Book, Author, User, Review, Rating, Payment };
