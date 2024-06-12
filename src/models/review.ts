import { DataTypes, Model } from 'sequelize';
import sequelize from '../postgres/pgConfig';
import User from './user';
import Book from './book';

class Review extends Model {
  public id!: string;
  public content!: string;
  public userId!: string;
  public bookId!: string;
}

Review.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.UUID,
      references: {
        model: User,
        key: 'id',
      },
      allowNull: false,
    },
    bookId: {
      type: DataTypes.UUID,
      references: {
        model: Book,
        key: 'id',
      },
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Review',
  }
);

export default Review;
