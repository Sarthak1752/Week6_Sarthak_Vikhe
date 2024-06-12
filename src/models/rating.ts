import { DataTypes, Model } from 'sequelize';
import sequelize from '../postgres/pgConfig';
import User from './user';
import Book from './book';

class Rating extends Model {
  public id!: string;
  public rating!: number;
  public userId!: string;
  public bookId!: string;
}

Rating.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
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
    modelName: 'Rating',
  }
);

export default Rating;
